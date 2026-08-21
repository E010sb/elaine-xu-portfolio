import * as THREE from "../node_modules/three/build/three.module.min.js";

// A framework-free adaptation of React Bits' LiquidEther for this static portfolio.
const mount = document.querySelector("[data-liquid-ether]");

if (mount && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const isCompact = window.matchMedia("(max-width: 768px)").matches;
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: "high-performance" });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isCompact ? 1.25 : 1.75));
  mount.append(renderer.domElement);

  const camera = new THREE.Camera();
  const geometry = new THREE.PlaneGeometry(2, 2);
  const pointer = new THREE.Vector2(0.5, 0.5);
  const previousPointer = new THREE.Vector2(0.5, 0.5);
  const pointerVelocity = new THREE.Vector2();
  const targetPointer = new THREE.Vector2(0.5, 0.5);
  const clock = new THREE.Clock();
  const startedAt = performance.now();
  let lastInteraction = 0;
  let width = 1;
  let height = 1;
  let simWidth = 1;
  let simHeight = 1;
  let frame = 0;
  let running = true;
  let visible = true;
  let velocityA;
  let velocityB;

  const vertexShader = `
    precision highp float;
    attribute vec3 position;
    varying vec2 vUv;
    void main() {
      vUv = position.xy * 0.5 + 0.5;
      gl_Position = vec4(position, 1.0);
    }
  `;

  const simulationMaterial = new THREE.RawShaderMaterial({
    vertexShader,
    fragmentShader: `
      precision highp float;
      uniform sampler2D velocity;
      uniform vec2 texel;
      uniform vec2 pointer;
      uniform vec2 force;
      uniform float radius;
      uniform float inject;
      varying vec2 vUv;

      void main() {
        vec2 current = texture2D(velocity, vUv).xy;
        vec2 tracedUv = clamp(vUv - current * 0.012, texel, 1.0 - texel);
        vec2 advected = texture2D(velocity, tracedUv).xy * 0.982;

        vec2 delta = vUv - pointer;
        delta.x *= texel.y / texel.x;
        float brush = exp(-dot(delta, delta) / max(0.00001, radius * radius));
        vec2 stirred = advected + force * brush * inject;
        gl_FragColor = vec4(stirred, 0.0, 1.0);
      }
    `,
    uniforms: {
      velocity: { value: null },
      texel: { value: new THREE.Vector2(1, 1) },
      pointer: { value: pointer },
      force: { value: pointerVelocity },
      radius: { value: isCompact ? 0.11 : 0.075 },
      inject: { value: 1 },
    },
    depthWrite: false,
    depthTest: false,
  });

  const displayMaterial = new THREE.RawShaderMaterial({
    vertexShader,
    fragmentShader: `
      precision highp float;
      uniform sampler2D velocity;
      varying vec2 vUv;

      vec3 palette(float t) {
        vec3 violet = vec3(0.322, 0.153, 1.0);
        vec3 orchid = vec3(0.706, 0.592, 0.812);
        vec3 pink = vec3(1.0, 0.624, 0.988);
        return t < 0.5
          ? mix(violet, orchid, t * 2.0)
          : mix(orchid, pink, (t - 0.5) * 2.0);
      }

      void main() {
        vec2 velocityValue = texture2D(velocity, vUv).xy;
        float speed = length(velocityValue);
        float intensity = smoothstep(0.006, 0.22, speed);
        float glow = smoothstep(0.0, 0.16, speed);
        vec3 color = palette(clamp(speed * 4.0, 0.0, 1.0));
        float alpha = intensity * 0.54 + glow * 0.08;
        gl_FragColor = vec4(color, alpha);
      }
    `,
    uniforms: { velocity: { value: null } },
    transparent: true,
    depthWrite: false,
    depthTest: false,
  });

  const simulationScene = new THREE.Scene();
  const displayScene = new THREE.Scene();
  simulationScene.add(new THREE.Mesh(geometry, simulationMaterial));
  displayScene.add(new THREE.Mesh(geometry, displayMaterial));

  function createTarget(w, h) {
    return new THREE.WebGLRenderTarget(w, h, {
      type: THREE.HalfFloatType,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      wrapS: THREE.ClampToEdgeWrapping,
      wrapT: THREE.ClampToEdgeWrapping,
      depthBuffer: false,
      stencilBuffer: false,
    });
  }

  function resize() {
    const rect = mount.getBoundingClientRect();
    width = Math.max(1, Math.round(rect.width));
    height = Math.max(1, Math.round(rect.height));
    renderer.setSize(width, height, false);
    const resolution = isCompact ? 0.32 : 0.48;
    const nextWidth = Math.max(2, Math.round(width * resolution));
    const nextHeight = Math.max(2, Math.round(height * resolution));
    if (nextWidth === simWidth && nextHeight === simHeight) return;
    simWidth = nextWidth;
    simHeight = nextHeight;
    velocityA?.dispose();
    velocityB?.dispose();
    velocityA = createTarget(simWidth, simHeight);
    velocityB = createTarget(simWidth, simHeight);
    simulationMaterial.uniforms.texel.value.set(1 / simWidth, 1 / simHeight);
  }

  function updatePointer(clientX, clientY) {
    const rect = mount.getBoundingClientRect();
    if (clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom) return;
    targetPointer.set((clientX - rect.left) / rect.width, 1 - (clientY - rect.top) / rect.height);
    lastInteraction = performance.now();
  }

  window.addEventListener("pointermove", event => updatePointer(event.clientX, event.clientY), { passive: true });
  window.addEventListener("touchmove", event => {
    if (event.touches.length === 1) updatePointer(event.touches[0].clientX, event.touches[0].clientY);
  }, { passive: true });

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(mount);
  const intersectionObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting && entry.intersectionRatio > 0;
  }, { threshold: [0, 0.01] });
  intersectionObserver.observe(mount);

  function render() {
    frame = requestAnimationFrame(render);
    if (!running || !visible || document.hidden || !velocityA || !velocityB) return;

    const now = performance.now();
    const elapsed = (now - startedAt) / 1000;
    const idle = now - lastInteraction > 2800;
    if (idle) {
      targetPointer.set(
        0.5 + Math.sin(elapsed * 0.47) * 0.34 + Math.sin(elapsed * 0.19) * 0.06,
        0.5 + Math.cos(elapsed * 0.39) * 0.29 + Math.sin(elapsed * 0.23) * 0.07,
      );
    }

    const easing = idle ? 0.055 : 0.18;
    pointer.lerp(targetPointer, easing);
    pointerVelocity.subVectors(pointer, previousPointer);
    previousPointer.copy(pointer);
    pointerVelocity.multiplyScalar(idle ? 7.5 : 12.0);

    simulationMaterial.uniforms.velocity.value = velocityA.texture;
    simulationMaterial.uniforms.inject.value = Math.min(1.35, Math.max(0.18, pointerVelocity.length() * 18));
    renderer.setRenderTarget(velocityB);
    renderer.render(simulationScene, camera);

    const swap = velocityA;
    velocityA = velocityB;
    velocityB = swap;
    displayMaterial.uniforms.velocity.value = velocityA.texture;
    renderer.setRenderTarget(null);
    renderer.clear();
    renderer.render(displayScene, camera);
  }

  function handleVisibility() {
    running = !document.hidden;
    if (running) clock.start();
  }

  document.addEventListener("visibilitychange", handleVisibility);
  resize();
  render();

  window.addEventListener("pagehide", () => {
    cancelAnimationFrame(frame);
    resizeObserver.disconnect();
    intersectionObserver.disconnect();
    velocityA?.dispose();
    velocityB?.dispose();
    geometry.dispose();
    simulationMaterial.dispose();
    displayMaterial.dispose();
    renderer.dispose();
  }, { once: true });
}
