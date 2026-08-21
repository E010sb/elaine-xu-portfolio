import projects from "./data/projects.js";
import selectedWorks from "./data/selectedWorks.js";
import { logoMark, starMark } from "./marks.js";

const email = "eladontkill999@gmail.com";

const experienceEntries = [
  {
    company: "Interbrand",
    role: "Design Intern",
    date: "May 2025 – July 2025",
    location: "Shanghai, China",
    description:
      "Worked on digital campaigns, UX assets, and AI-assisted design explorations across branding and product experiences.",
  },
  {
    company: "Eth Tech",
    role: "UX Design Intern",
    date: "Nov 2024 – Apr 2025",
    location: "Newark, CA",
    description:
      "Designed end-to-end mobile experiences, collaborated with cross-functional teams, and helped shape product strategy through user research.",
  },
  {
    company: "NextTier",
    role: "Product Designer",
    date: "Jun 2024 – Oct 2024",
    location: "Sacramento, CA",
    description:
      "Designed an AI-powered job platform from research to interface design, focusing on usability, design systems, and product growth.",
  },
  {
    company: "Publicis Groupe",
    role: "Creative Designer",
    date: "May 2024 – Jun 2024",
    location: "Shanghai, China",
    description:
      "Designed digital experiences and system interfaces while collaborating closely with product, engineering, and UX teams.",
  },
];

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I offer a range of services tailored to meet your digital needs, including custom web design and development, Webflow no-code builds, app design and development for web and mobile, and ongoing maintenance and support. Whether you're starting from scratch or need help refining an existing project, I create solutions that align with your goals.",
  },
  {
    question: "What tools do you use?",
    answer:
      "For custom-coded projects, I use technologies like React, React Native, Next.js, and Tailwind CSS. For no-code solutions, I leverage the power of Webflow. Additionally, I use design tools like Figma for prototyping and collaboration.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "My pricing is project-based and depends on the scope, complexity, and timeline of your requirements. For smaller, straightforward projects like no-code builds, I offer more affordable packages. For custom-coded or highly tailored solutions, pricing is determined after an in-depth consultation to ensure transparency and alignment with your budget. This will allow me to figure out the best way to complete your project, and provide you with a quote.",
  },
  {
    question: "How do you approach a new project?",
    answer:
      "I start every project by understanding your goals, target audience, and unique requirements. This is followed by a collaborative planning phase where we outline the project’s scope and design. Once approved, I move on to development, ensuring regular updates and feedback throughout. Testing and quality assurance are performed before launch to ensure everything runs smoothly.",
  },
  {
    question: "How long will it take to complete the project?",
    answer:
      "Project timelines vary based on complexity and scope. A smaller website or no-code build may take 2–4 weeks, while larger custom-coded projects or apps might require 6–12 weeks or more. I’ll provide a clear timeline after assessing your project’s requirements during our initial consultation.",
  },
  {
    question: "Will you maintain the project once it’s built?",
    answer:
      "Absolutely! I offer maintenance and support packages to ensure your project remains secure, up-to-date, and running smoothly. This includes regular updates, backups, performance monitoring, and resolving any technical issues that arise. You can count on me to keep your website/app in top shape.",
  },
];

const localImages = {
  Mizone: "public/images/mizone/home/mizone-selected-work-cover-v2.png",
  "ABC Silk Care": "public/images/abc/hero-final-packaging.png",
  FIZZ: "public/images/fizz/hero-four-cans.png",
  "Balenciaga Noir Salon": "public/images/balenciaga-noir/hero-lookbook.png",
  "Highful Minds": "public/images/images_highful_minds_highful-minds-lg.jpg",
  BOX: "public/images/images_box_box-lg.jpg",
  Erfling: "public/images/images_erfling_erfling-lg.jpg",
  "Merchant Genie": "public/images/images_merchant_genie_genie-lg.jpg",
  CutHouse: "public/images/images_cuthouse_cuthouse-lg.jpg",
  ERMINE: "public/images/images_ermine_ermine-lg.jpg",
};

const featuredWork = {
  title: "Haitou",
  description:
    "Helping international students discover visa-sponsored job opportunities through a clearer and more intuitive hiring experience.",
  image: "public/images/haitou-selected-work-card.png",
  href: "/case-studies/haitou/",
  fileHref: "case-studies/haitou/index.html",
};

const mizoneWork = {
  category: "02 | Brand Designer",
  title: "Mizone",
  image: "public/images/mizone/home/mizone-selected-work-cover-v2.png",
  labelPosition: "top",
  href: "/case-studies/mizone/",
  fileHref: "case-studies/mizone/index.html",
};

const abcWork = {
  title: "ABC Silk Care",
  image: "public/images/abc/hero-final-packaging.png",
  href: "/case-studies/abc-silk-care/",
  fileHref: "case-studies/abc-silk-care/index.html",
};

const fizzWork = {
  title: "FIZZ",
  image: "public/images/fizz/hero-four-cans.png",
  href: "/case-studies/fizz/",
  fileHref: "case-studies/fizz/index.html",
};

const noirWork = {
  title: "Balenciaga Noir Salon",
  image: "public/images/balenciaga-noir/hero-lookbook.png",
  href: "/case-studies/balenciaga-noir/",
  fileHref: "case-studies/balenciaga-noir/index.html",
};

const risoWork = {
  title: "Thaiboy Digital",
  image: "public/images/riso-thaiboy/hero-hands.png",
  href: "/case-studies/riso-thaiboy/",
  fileHref: "case-studies/riso-thaiboy/index.html",
};

const archiveProjects = [
  {
    name: "Mizone",
    type: "[packaging design]",
    category: ["Brand Design", "Packaging"],
    backgroundColors: { light: "#DDF4E1", dark: "#0D3F25" },
    images: [{ src: mizoneWork.image, alt: "Mizone Refreshing Grass Flavor packaging design" }],
    caseStudyRoute: mizoneWork.href,
    caseStudyFileHref: mizoneWork.fileHref,
  },
  {
    name: "ABC Silk Care",
    type: "[packaging redesign]",
    category: ["Brand Refresh", "FMCG Packaging"],
    backgroundColors: { light: "#DDF2FA", dark: "#123B61" },
    images: [{ src: abcWork.image, alt: "ABC Silk Care feminine care packaging redesign" }],
    caseStudyRoute: abcWork.href,
    caseStudyFileHref: abcWork.fileHref,
  },
  {
    name: "Balenciaga Noir Salon",
    type: "[experiential design]",
    category: ["Brand Extension", "Art Direction"],
    backgroundColors: { light: "#D8D8D8", dark: "#080808" },
    images: [{ src: noirWork.image, alt: "Balenciaga Noir Salon monochrome dining experience" }],
    caseStudyRoute: noirWork.href,
    caseStudyFileHref: noirWork.fileHref,
  },
  {
    name: "FIZZ",
    type: "[packaging design]",
    category: ["Brand Identity", "Packaging"],
    backgroundColors: { light: "#FFF06A", dark: "#171717" },
    images: [{ src: fizzWork.image, alt: "Four colorful FIZZ sparkling water cans" }],
    caseStudyRoute: fizzWork.href,
    caseStudyFileHref: fizzWork.fileHref,
  },
  {
    name: "Thaiboy Digital",
    type: "[print design]",
    category: ["Risograph", "Poster Design"],
    backgroundColors: { light: "#FFE3DD", dark: "#1734BC" },
    images: [{ src: risoWork.image, alt: "Thaiboy Digital two-color Risograph poster" }],
    caseStudyRoute: risoWork.href,
    caseStudyFileHref: risoWork.fileHref,
  },
  ...projects.slice(4).filter((project) => !["CutHouse", "ERMINE"].includes(project.name)),
];

const haitouCaseStudy = {
  assetBase: "public/case-studies/haitou/",
  meta: [
    { label: "Timeline", value: "6 Months", detail: "May – Nov 2024" },
    { label: "My Role", value: "Product Designer", detail: "UX Research / Interaction Design / UI Design / Interactive Prototyping" },
    { label: "Team", value: "Cross-functional Team", detail: "PM / Engineering / Marketing / UX" },
    { label: "Tools", value: "Figma", detail: "ProtoPie / Miro / Adobe Creative Suite" },
  ],
  challenge: {
    intro:
      "Over the past six months, user engagement had steadily declined. Daily Active Users dropped by 10%, while the monthly drop-off rate increased by 15%.",
    metrics: [
      { value: "10%", label: "Decrease in Daily Active Users over six months" },
      { value: "15%", label: "Increase in monthly drop-off rate" },
    ],
    context: [
      "More than 90% of users were international students.",
      "The original platform was built with a basic engineering-first template and lacked a clear user experience structure.",
    ],
    opportunity:
      "Based on the product data, we identified two main opportunities:",
    questions: [
      "How might we increase Daily Active Users?",
      "How might we reduce drop-off throughout the job-search journey?",
    ],
    direction:
      "Improve the hiring experience through a clearer, more intuitive, and user-centered product.",
  },
  research: {
    intro:
      "To better understand why users were leaving the platform, I conducted 25 user interviews and collected 200+ survey responses to uncover their motivations, frustrations, and behaviors throughout the hiring journey.",
    cards: [
      { title: "Participants", points: ["96% International Students", "88% Recent Graduates"] },
      { title: "Why Haitou?", points: ["Visa sponsorship information", "International student–focused opportunities"] },
      { title: "Where do users drop off?", points: ["98% dropped after reviewing job details"] },
      { title: "Why do users drop off?", points: ["Lack of immigration information", "Unclear application process"] },
      { title: "Where do users go?", points: ["USCIS & immigration resources", "External job boards", "Personal tracking tools"] },
      { title: "What are users missing?", points: ["Direct application support", "Better job tracking", "Reliable sponsorship insights"] },
    ],
    summary:
      "These findings revealed several recurring patterns that directly informed the product strategy and design decisions.",
  },
  insights: {
    intro:
      "Research revealed four recurring patterns that directly shaped the product strategy and design decisions.",
    cards: [
      {
        title: "Immigration info remains our top priority",
        body:
          "International students rely on Haitouwang for immigration support. Our platform simplifies their next step by focusing their job search and saving valuable time.",
        image: "05/insight-logos/key-insight-01.png",
      },
      {
        title: "Users need more immigration info",
        body:
          "Despite the tags, users remained dissatisfied, forced to visit other sites for comprehensive sponsorship details and records.",
        image: "05/insight-logos/key-insight-02.png",
      },
      {
        title: "No On-Site Applications",
        body:
          "HT's absence of direct application portals forces users to external sites to apply. Consequently, most participants treat HT solely as a job research engine.",
        image: "05/insight-logos/key-insight-03.png",
      },
      {
        title: "Superior External Trackers",
        body:
          "Users frequently migrate to external tools after applying, as they provide more advanced features and flexibility for tracking progress.",
        image: "05/insight-logos/key-insight-04.png",
      },
    ],
    priorities: [
      "Clear Sponsorship Information",
      "AI Job Summarizer",
      "Integrated Job Tracker",
      "Simplified Job Search Experience",
    ],
    summary:
      "These priorities became the foundation for the product redesign and guided every major design decision.",
  },
  processBoards: [
    {
      number: "01",
      title: "Metrics & Prioritization",
      body: "Prioritizing concepts by balancing user impact and implementation effort.",
      image: "06/06-metrics-stack-ranking.png",
      alt: "Metrics stack ranking matrix for Haitou feature priorities",
    },
    {
      number: "02",
      title: "Information Architecture",
      body: "Mapping how users moved from search to sponsorship evaluation, AI support, and tracking.",
      image: "06/06-site-map-before-after.png",
      alt: "Before and after site map showing the redesigned Haitou hiring journey",
    },
    {
      number: "03",
      title: "Ideation",
      body: "Exploring application tools, discovery patterns, navigation improvements, and platform extensions.",
      image: "06/06-ideation.png",
      alt: "Ideation board for Haitou feature concepts",
    },
    {
      number: "04",
      title: "Low-Fi Wireframes",
      body: "Defining the core job search, job detail, sponsorship, tracker, and filter flows.",
      image: "06/06-low-fi.jpg",
      alt: "Low-fidelity wireframes for Haitou",
    },
    {
      number: "05",
      title: "Mid-Fi Wireframes",
      body: "Replacing the planned high-fidelity placeholder with the complete mid-fidelity wireframe board.",
      image: "06/06-mid-fi.png",
      alt: "Mid-fidelity wireframes for Haitou",
    },
    {
      number: "06",
      title: "Design System",
      body: "Establishing principles, color, typography, spacing, radius, and core components.",
      image: "06/06-design-system.png",
      alt: "Haitou design language board",
      orientation: "tall",
    },
    {
      number: "07",
      title: "Design Evolution",
      body: "Showing how navigation, job cards, filters, AI support, and notes evolved from early versions to final directions.",
      image: "06/06-design-evolution.png",
      alt: "Design evolution board for Haitou",
      orientation: "tall",
    },
  ],
  userFlows: [
    {
      chapter: "06",
      number: "User Flow 01",
      title: "Research & Discover Jobs",
      subtitle: "Help users discover relevant visa-sponsored opportunities with a clearer search journey.",
      flow: ["Search Jobs", "Apply Filters", "Browse Results", "View Job Details"],
      stepCaptions: [
        "Start from a direct search entry point.",
        "Narrow opportunities with focused filters.",
        "Scan relevant job results with clearer context.",
        "Open a role to evaluate details before applying.",
      ],
      description: "",
      documentLayout: true,
      video: "06/user-flow-1/job-search.mp4",
    },
    {
      chapter: "06",
      number: "User Flow 02",
      title: "Apply Smart Filters",
      subtitle: "Move from job discovery to the details that matter most before applying.",
      flow: ["Browse Jobs", "Select a Job", "Review Job Details", "Identify Sponsorship"],
      description: "",
      documentLayout: true,
      images: [
        { src: "06/user-flow-2/01-job-list.png", title: "01 · Browse Jobs", caption: "Browse available opportunities.", size: "tall" },
        { src: "06/user-flow-2/02-selected-job.png", title: "02 · Select a Job", caption: "Choose a role to explore.", size: "small" },
        { src: "06/user-flow-2/03-job-details.png", title: "03 · Review Job Details", caption: "Review responsibilities and requirements.", size: "wide" },
        { src: "06/user-flow-2/04-sponsorship-highlight.png", title: "04 · Identify Sponsorship", caption: "Confirm H1-B sponsorship before applying.", size: "small" },
      ],
    },
    {
      chapter: "06",
      number: "User Flow 03",
      title: "Get AI Guidance",
      subtitle: "Bring contextual support into the job page without interrupting the browsing flow.",
      flow: ["Open AI Copilot", "Ask a Question", "Receive AI Guidance", "Continue Browsing"],
      description: "",
      documentLayout: true,
      images: [
        { src: "06/user-flow-3/01-ai-copilot-button.png", title: "01 · Open AI Copilot", caption: "Launch the AI assistant directly from the job page.", size: "small" },
        { src: "06/user-flow-3/02-floating-chat.png", title: "02 · Ask a Question", caption: "Ask about the role without leaving the job page.", size: "medium" },
        { src: "06/user-flow-3/03-integrated-workspace.png", title: "03 · Receive AI Guidance", caption: "Review personalized guidance beside the job details.", size: "wide" },
        { src: "06/user-flow-3/04-expanded-ai-workspace.png", title: "04 · AI Workspace", caption: "Expand the conversation when more focus is needed.", size: "wide" },
        { src: "06/user-flow-3/05-ask-upload.png", title: "05 · Ask & Upload", caption: "Ask about the job or attach materials directly inside the workspace.", size: "small" },
      ],
    },
    {
      chapter: "06",
      number: "User Flow 04",
      title: "Save & Track Applications",
      subtitle: "Keep saved roles, application progress, and personal notes organized in one place.",
      flow: ["Add to Tracker", "Open Job Tracker", "Open Notes", "Add Personal Notes"],
      description: "",
      documentLayout: true,
      images: [
        { src: "06/user-flow-4/01-add-to-tracker.png", title: "01 · Add to Tracker", caption: "Save a job directly from the job detail page.", size: "wide" },
        { src: "06/user-flow-4/02-open-job-tracker.png", title: "02 · Open Job Tracker", caption: "View all saved applications in one organized dashboard.", size: "wide" },
        { src: "06/user-flow-4/03-open-notes.png", title: "03 · Open Notes", caption: "Open the notes panel for a specific application.", size: "wide" },
        { src: "06/user-flow-4/04-add-personal-notes.png", title: "04 · Add Personal Notes", caption: "Capture reminders and interview notes in context.", size: "tall" },
      ],
    },
  ],
  iterations: {
    image: "06/06-iterations.png",
    alt: "Iterations board showing AI assistance and tracker improvements",
  },
  reflection: {
    title: "What I'd Do Next",
    body:
      "Although Haitou addresses many of the challenges international students face during their job search, there are still opportunities to expand the experience. Future iterations would focus on providing more personalized guidance, stronger community support, and deeper insights throughout the application journey.",
    takeaways: [
      {
        title: "AI Resume Review",
        body:
          "Provide personalized resume feedback tailored to each job description, helping users improve their applications before submission.",
      },
      {
        title: "Salary & Sponsorship Insights",
        body:
          "Offer salary benchmarks and sponsorship trends to support more informed job-search decisions.",
      },
      {
        title: "Networking",
        body:
          "Connect users with alumni, mentors, and professionals working at target companies to make referrals and career guidance more accessible.",
      },
    ],
  },
  nextSteps: {
    intro:
      "While Haitou provides a strong foundation for international job seekers, there are opportunities to further enhance the experience through AI, personalized guidance, and community-driven support.",
    cards: [
      { title: "AI Resume Review", body: "Receive personalized resume feedback tailored to each job description." },
      { title: "Interview Coach", body: "Practice interviews with AI-generated questions and real-time feedback." },
      { title: "Networking", body: "Connect with alumni and professionals for mentorship and referrals." },
      { title: "Visa Timeline", body: "Track OPT, CPT, and H-1B milestones with personalized reminders." },
    ],
  },
};

const app = document.querySelector("#app");
const currentPage = document.body.dataset.page || "home";
const siteRoot = document.body.dataset.siteRoot || "";
let activeProject = null;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function assetPath(path) {
  if (!path || /^(data:|https?:|mailto:|#)/.test(path)) return path;
  return `${siteRoot}${path}`;
}

function pagePath(path) {
  if (!path || /^(https?:|mailto:|#)/.test(path)) return path;
  return `${siteRoot}${path}`;
}

function routePath(route, fileFallback) {
  return window.location.protocol === "file:" ? pagePath(fileFallback) : route;
}

function homeAnchor(id) {
  return currentPage === "home" ? `#${id}` : pagePath(`index.html#${id}`);
}

function renderGlobalNav() {
  const isAbout = currentPage === "about";
  const isWork = !isAbout;

  return `
    <nav class="global-nav" aria-label="Primary navigation" data-global-nav>
      <a class="global-nav-link ${isWork ? "is-active" : ""}" href="${routePath("/", "index.html")}" ${isWork ? 'aria-current="page"' : ""}><span class="global-nav-text"><span>Work</span><span>Work</span></span></a>
      <a class="global-nav-link ${isAbout ? "is-active" : ""}" href="${routePath("/about", "about/index.html")}" ${isAbout ? 'aria-current="page"' : ""}><span class="global-nav-text"><span>About</span><span>About</span></span></a>
    </nav>
  `;
}

function sectionTitle(title, className = "") {
  return `
    <div class="section-heading ${className} reveal">
      <div class="section-star">${starMark}</div>
      <h2>${title}</h2>
    </div>
  `;
}

function renderSelectedWorks() {
  return `
    <section class="selected-works reveal" data-selected-works aria-label="Selected works">
      <div class="selected-works-ambient" aria-hidden="true"></div>
      <div class="selected-work-grid" data-selected-grid>
        ${selectedWorks
          .map(
            (project, index) => `
              <button
                class="selected-work-card"
                type="button"
                style="--selected-accent:${escapeHtml(project.accentColor)}"
                data-selected-card
                data-selected-index="${index}"
                aria-label="Open ${escapeHtml(project.title)} in focus view"
              >
                <span class="selected-work-sheen" aria-hidden="true"></span>
                <img class="selected-work-poster" src="${escapeHtml(project.poster)}" alt="${escapeHtml(project.title)} placeholder poster" />
                <span class="selected-work-info">
                  <span class="selected-work-number">${String(index + 1).padStart(2, "0")}</span>
                  <span class="selected-work-title">${escapeHtml(project.title)}</span>
                  <span class="selected-work-meta">${escapeHtml(project.category)} / ${escapeHtml(project.year)}</span>
                </span>
              </button>
            `,
          )
          .join("")}
      </div>
      <div class="selected-focus-controls" aria-label="Selected works controls">
        <button class="selected-control" type="button" data-selected-next>Next Card</button>
        <button class="selected-control selected-control-primary" type="button" data-selected-show>Show Me</button>
        <p class="selected-counter" data-selected-counter aria-live="polite">01 / 09</p>
        <button class="selected-control" type="button" data-selected-all>View All</button>
      </div>
      <p class="sr-only" data-selected-status aria-live="polite"></p>
    </section>
  `;
}

function renderFooter() {
  return `
      <footer id="contact" class="section footer">
        ${sectionTitle("Let's Work Together", "section-heading-compact")}
        <p class="footer-copy reveal">Inspired by life.<br />Crafted through design.</p>
        <nav class="footer-links reveal" aria-label="Contact links">
          <a class="menu-link" href="#contact" aria-label="View Resume"><span>View Resume ↗</span><span>View Resume ↗</span></a>
          <a class="menu-link" href="mailto:${email}"><span>Email ↗</span><span>Email ↗</span></a>
          <a class="menu-link" href="https://www.linkedin.com/in/elaine-xu-xjy/" target="_blank" rel="noreferrer"><span>LinkedIn ↗</span><span>LinkedIn ↗</span></a>
        </nav>
        <div class="footer-logo reveal">${logoMark}</div>
        <p class="copyright">© 2026 Elaine Xu</p>
      </footer>
  `;
}

function renderSelectedWorkCard({ title, image, logoBack, hoverGif, labelPosition, category, href, fileHref }) {
  const targetHref = routePath(href, fileHref);

  return `
    <a class="featured-work-card featured-work-card-fullscreen ${logoBack ? "has-logo-back" : "is-static-work"} ${hoverGif ? "has-hover-gif" : ""}" href="${targetHref}" aria-label="View ${escapeHtml(title)} case study" ${hoverGif ? "data-hover-gif-card" : ""}>
      <span class="featured-work-flip">
        <span class="featured-work-media featured-work-face featured-work-face-front" aria-hidden="true">
          ${
            image
              ? `<img class="featured-work-static-cover" src="${assetPath(image)}" alt="" />${hoverGif ? `<img class="featured-work-hover-gif" data-hover-gif-src="${assetPath(hoverGif)}" alt="" />` : ""}`
              : `<span class="featured-work-placeholder"></span>`
          }
        </span>
        ${
          logoBack
            ? `<span class="featured-work-media featured-work-face featured-work-face-back" aria-hidden="true">
                <img src="${assetPath(logoBack)}" alt="" />
              </span>`
            : ""
        }
        ${category ? `<span class="featured-work-card-label ${labelPosition === "top" ? "is-top" : ""}">${escapeHtml(category)}</span>` : ""}
      </span>
    </a>
  `;
}

function renderFeaturedWorkSection() {
  return `
    <section class="section selected-work-section">
      ${sectionTitle("Selected Work")}
      <div class="featured-work-shell reveal">
        ${renderSelectedWorkCard(featuredWork)}
      </div>
    </section>
  `;
}

function renderLegacyWorkList() {
  return `
    <section class="section work-archive-section">
      ${sectionTitle("Archive")}
      <div class="work-list">
        <div class="hover-preview" data-hover-preview>
          <img alt="" src="${assetPath(localImages[archiveProjects[0].name] || archiveProjects[0].images[0].src)}" />
        </div>
        ${archiveProjects
          .map(
            (project, index) => {
              const isCaseStudy = Boolean(project.caseStudyRoute);
              const rowTag = isCaseStudy ? "a" : "article";
              const caseStudyHref = isCaseStudy ? routePath(project.caseStudyRoute, project.caseStudyFileHref) : "";
              const rowHref = isCaseStudy ? ` href="${escapeHtml(caseStudyHref)}" data-case-study-href="${escapeHtml(caseStudyHref)}"` : "";
              return `
              <${rowTag} class="work-row reveal" style="--row-bg:${project.backgroundColors.light}" data-project-index="${index}"${rowHref}>
                <div class="mobile-thumb">
                  <img src="${assetPath(localImages[project.name] || project.images[0].src)}" alt="${escapeHtml(project.images[0].alt)}" />
                </div>
                <h3>${escapeHtml(project.name)}</h3>
                <p>${escapeHtml(project.type)}</p>
                <p>${escapeHtml(project.category.join(" - "))}</p>
              </${rowTag}>
            `;
            },
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderAboutSections() {
  return `
        <section id="about" class="section about-section" data-dark-trigger>
          ${sectionTitle("About")}
          <div class="about-grid">
            <div class="about-copy reveal">
              <p>Hey, I'm Elaine. A multidisciplinary designer from Shanghai, now based in New York.</p>
              <p>I create thoughtful digital experiences and bold visual identities inspired by everyday life. I love <span class="icon-badge">♫</span> music, traveling, and believe that the best ideas come from the world around us. When I'm off the clock, you'll usually find me watching movies with my little cat. <span class="icon-badge spin">☻</span></p>
            </div>
            <div class="about-lists reveal">
              <div>
                <h3>What I Do</h3>
                <ul>
                  <li>Product Design</li>
                  <li>Graphic Design</li>
                  <li>3D</li>
                  <li>Motion</li>
                  <li>Art Director</li>
                  <li>Creative Development</li>
                </ul>
              </div>
              <div>
                <h3>What I Use</h3>
                <ul>
                  <li>Codex & AI Tools</li>
                  <li>Figma</li>
                  <li>Adobe Creative Suite</li>
                  <li>Blender</li>
                  <li>SketchUp</li>
                  <li>HTML · CSS · JavaScript</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="section services-section">
          ${sectionTitle("Experience")}
          <div class="experience-shell reveal" data-experience>
            <div class="experience-timeline" role="list" aria-label="Experience timeline">
              <span class="experience-line" aria-hidden="true"></span>
              <span class="experience-active-line" data-experience-line aria-hidden="true"></span>
              ${experienceEntries
                .map(
                  (entry, index) => `
                    <button class="experience-entry ${index === 0 ? "is-active" : ""}" type="button" role="listitem" data-experience-entry data-experience-index="${index}" aria-pressed="${index === 0}">
                      <span class="experience-marker" aria-hidden="true"></span>
                      <span class="experience-title-line">
                        <span class="experience-company">${escapeHtml(entry.company)}</span>
                        <span class="experience-role-group">
                          <span class="experience-separator" aria-hidden="true">|</span>
                          <span class="experience-role">${escapeHtml(entry.role)}</span>
                        </span>
                      </span>
                      <span class="experience-meta experience-date">${escapeHtml(entry.date)}</span>
                      <span class="experience-meta experience-location">${escapeHtml(entry.location)}</span>
                      <span class="experience-mobile-description">${escapeHtml(entry.description)}</span>
                    </button>
                  `,
                )
                .join("")}
            </div>
            <aside class="experience-detail" data-experience-detail aria-live="polite">
              <p class="eyebrow" data-experience-company>${escapeHtml(experienceEntries[0].company)}</p>
              <h3 data-experience-role>${escapeHtml(experienceEntries[0].role)}</h3>
              <p data-experience-description>${escapeHtml(experienceEntries[0].description)}</p>
            </aside>
          </div>
        </section>
  `;
}

function haitouAsset(path) {
  return assetPath(`${haitouCaseStudy.assetBase}${path}`);
}

function renderCaseSection({ id, eyebrow, title, intro = "", children = "", modifier = "", darkTrigger = false }) {
  return `
    <section id="${id}" class="case-section ${modifier}" ${darkTrigger ? "data-dark-trigger" : ""}>
      <div class="case-section-header reveal">
        <p class="case-eyebrow">${eyebrow}</p>
        <h2>${title}</h2>
        ${intro ? `<p>${intro}</p>` : ""}
      </div>
      ${children}
    </section>
  `;
}

function renderCaseImage(src, alt, className = "") {
  return `
    <figure class="case-image-frame ${className} reveal">
      <img src="${haitouAsset(src)}" alt="${escapeHtml(alt)}" loading="lazy" />
    </figure>
  `;
}

function renderCasePlaceholder(eyebrow, title, reservedFor) {
  return renderCaseSection({
    id: eyebrow.toLowerCase().replaceAll(" ", "-"),
    eyebrow,
    title,
    modifier: "case-placeholder-section",
    children: `
      <div class="case-placeholder reveal">
        <p class="case-placeholder-status">Status: Asset pending</p>
        <div>
          <p>Reserved for:</p>
          <ul>
            ${reservedFor.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
      </div>
    `,
  });
}

function renderHaitouHero() {
  return `
    <section id="hero" class="case-hero-banner-section" aria-label="Haitou product experience">
      <img
        src="${haitouAsset("01/haitou-hero-banner.png")}"
        alt="Haitou visa-sponsored job search product experience"
        fetchpriority="high"
      />
    </section>
  `;
}

function renderHaitouOverview() {
  return renderCaseSection({
    id: "project-overview",
    eyebrow: "02",
    title: "Project Overview",
    darkTrigger: true,
    children: `
      <div class="case-meta-grid">
        ${haitouCaseStudy.meta
          .map(
            (item) => `
              <article class="case-meta-card reveal">
                <p>${escapeHtml(item.label)}</p>
                <h3>${escapeHtml(item.value)}</h3>
                <span>${escapeHtml(item.detail)}</span>
              </article>
            `,
          )
          .join("")}
      </div>
    `,
  });
}

function renderHaitouChallenge() {
  const challenge = haitouCaseStudy.challenge;
  return renderCaseSection({
    id: "challenge",
    eyebrow: "03",
    title: "The Challenge",
    intro: challenge.intro,
    children: `
      <div class="case-metric-grid">
        ${challenge.metrics
          .map(
            (metric) => `
              <article class="case-metric-card reveal">
                <strong>${escapeHtml(metric.value)}</strong>
                <span>${escapeHtml(metric.label)}</span>
              </article>
            `,
          )
          .join("")}
      </div>
      <div class="case-split">
        <div class="case-bullet-list reveal">
          ${challenge.context.map((item) => `<p>${escapeHtml(item)}</p>`).join("")}
        </div>
        <div class="case-opportunity reveal">
          <p class="case-small-title">Design Opportunity</p>
          <p>${escapeHtml(challenge.opportunity)}</p>
          <div class="case-question-grid">
            ${challenge.questions.map((question) => `<blockquote>${escapeHtml(question)}</blockquote>`).join("")}
          </div>
          <p class="case-direction">${escapeHtml(challenge.direction)}</p>
        </div>
      </div>
    `,
  });
}

function renderHaitouResearch() {
  const research = haitouCaseStudy.research;
  return renderCaseSection({
    id: "research",
    eyebrow: "04",
    title: "Research",
    intro: research.intro,
    children: `
      <div class="case-card-grid case-card-grid-six">
        ${research.cards
          .map(
            (card, index) => `
              <article class="case-info-card reveal">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <h3>${escapeHtml(card.title)}</h3>
                ${card.points.map((point) => `<p>${escapeHtml(point)}</p>`).join("")}
              </article>
            `,
          )
          .join("")}
      </div>
      <p class="case-section-summary reveal">${escapeHtml(research.summary)}</p>
    `,
  });
}

function renderHaitouInsights() {
  const insights = haitouCaseStudy.insights;
  return renderCaseSection({
    id: "key-insights",
    eyebrow: "05",
    title: "Key Insights",
    intro: insights.intro,
    children: `
      <div class="case-card-grid case-card-grid-four">
        ${insights.cards
          .map(
            (card, index) => `
              <article class="case-info-card reveal">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <figure class="case-insight-logo">
                  <img src="${haitouAsset(card.image)}" alt="" loading="lazy" />
                </figure>
                <h3>${escapeHtml(card.title)}</h3>
                <p>${escapeHtml(card.body)}</p>
              </article>
            `,
          )
          .join("")}
      </div>
      <article class="case-priority-card reveal">
        <p class="case-small-title">Design Priorities</p>
        <div>
          ${insights.priorities.map((priority) => `<span>${escapeHtml(priority)}</span>`).join("")}
        </div>
      </article>
      <p class="case-section-summary reveal">${escapeHtml(insights.summary)}</p>
    `,
  });
}

function renderHaitouProcess() {
  const processGalleryItems = [
    ...haitouCaseStudy.processBoards,
    {
      number: "08",
      title: "Interaction",
      body: "Refining AI assistance and tracker behavior through progressive versions and focused design decisions.",
      image: haitouCaseStudy.iterations.image,
      alt: haitouCaseStudy.iterations.alt,
      orientation: "tall",
    },
  ];

  return renderCaseSection({
    id: "design-process",
    eyebrow: "06",
    title: "Design Process",
    intro:
      "Design Process shows how the product direction was shaped. User Flow shows how the final product works.",
    modifier: "case-process-section",
    children: `
      <div class="case-process-gallery reveal" data-case-process-gallery>
        <div class="case-process-tabs" role="tablist" aria-label="Design process categories">
          ${processGalleryItems
            .map(
              (board, index) => `
                <button
                  class="case-process-tab ${index === 0 ? "is-active" : ""}"
                  type="button"
                  role="tab"
                  id="case-process-tab-${index}"
                  aria-controls="case-process-panel-${index}"
                  aria-selected="${index === 0}"
                  data-case-process-tab
                  data-process-index="${index}"
                >
                  <span>${escapeHtml(board.number)}</span>
                  ${escapeHtml(board.title)}
                </button>
              `,
            )
            .join("")}
        </div>
        <div class="case-process-stage">
          ${processGalleryItems
            .map(
              (board, index) => `
                <article
                  class="case-process-panel ${index === 0 ? "is-active" : ""}"
                  role="tabpanel"
                  id="case-process-panel-${index}"
                  aria-labelledby="case-process-tab-${index}"
                  data-case-process-panel
                  ${index === 0 ? "" : "hidden"}
                >
                  <div class="case-process-panel-copy">
                    <p>${escapeHtml(board.number)}</p>
                    <h3>${escapeHtml(board.title)}</h3>
                    <span>${escapeHtml(board.body)}</span>
                  </div>
                  <figure class="case-process-panel-image ${board.orientation === "tall" ? "is-tall" : "is-landscape"}">
                    <img src="${haitouAsset(board.image)}" alt="${escapeHtml(board.alt)}" loading="lazy" />
                  </figure>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
      ${haitouCaseStudy.userFlows.map(renderHaitouUserFlow).join("")}
    `,
  });
}

function renderHaitouFinalExperience() {
  return `
    <section id="final-experience" class="case-section case-final-experience-section">
      <div class="case-section-header reveal">
        <p class="case-eyebrow">07</p>
        <h2>Final Experience</h2>
      </div>
      <div class="case-final-experience-gallery">
        <figure class="case-final-experience-image reveal">
          <img src="${haitouAsset("07/final-experience-tracker.png")}" alt="Haitou final experience showing the application tracker" loading="lazy" />
        </figure>
      </div>
    </section>
  `;
}

function renderHaitouUserFlow(flow) {
  const flowClass = `case-${flow.number.toLowerCase().replaceAll(" ", "-")}`;
  const timelineItems = flow.images
    ? flow.images.map((image, index) => ({
        title: image.title.replace(/^\d+\s*·\s*/, ""),
        caption: image.caption,
        media: image,
        index,
      }))
    : flow.flow.map((step, index) => ({
        title: step,
        caption: flow.stepCaptions?.[index] || "",
        index,
      }));

  const introMarkup = flow.documentLayout
    ? `
      <div class="case-user-flow-intro case-user-flow-doc-intro reveal">
        <p class="case-flow-chapter">${escapeHtml(flow.chapter || "06")}</p>
        <div class="case-flow-doc-title">
          <h3 class="case-flow-kicker">${escapeHtml(flow.number)}</h3>
          <h4>${escapeHtml(flow.title)}</h4>
          <p>${escapeHtml(flow.subtitle)}</p>
        </div>
      </div>
    `
    : `
      <div class="case-user-flow-intro reveal">
        <p>${escapeHtml(flow.number)}</p>
        <h3>${escapeHtml(flow.title)}</h3>
        <span>${escapeHtml(flow.subtitle)}</span>
        <div class="case-flow-steps" aria-label="${escapeHtml(flow.title)} flow">
          ${flow.flow.map((step) => `<span>${escapeHtml(step)}</span>`).join("")}
        </div>
        ${flow.description ? `<p>${escapeHtml(flow.description)}</p>` : ""}
      </div>
    `;

  return `
    <article class="case-user-flow ${flowClass}">
      ${introMarkup}
      ${
        flow.documentLayout
          ? `
            <div class="case-flow-timeline ${flow.images ? "" : "case-flow-timeline-text-only"}" aria-label="${escapeHtml(`${flow.number}: ${flow.title}`)}">
              ${timelineItems
                .map(
                  (item) => `
                    <article class="case-flow-step case-flow-step-${String(item.index + 1).padStart(2, "0")} case-flow-step-${escapeHtml(item.media?.size || "text")} reveal">
                      <div class="case-flow-step-marker" aria-hidden="true"></div>
                      <div class="case-flow-step-copy">
                        <p>Step ${String(item.index + 1).padStart(2, "0")}</p>
                        <h4>${escapeHtml(item.title)}</h4>
                        ${item.caption ? `<span>${escapeHtml(item.caption)}</span>` : ""}
                      </div>
                      ${
                        item.media
                          ? `
                            <figure class="case-flow-step-media case-flow-figure-${escapeHtml(item.media.size)}">
                              <img src="${haitouAsset(item.media.src)}" alt="${escapeHtml(`${flow.title}: ${item.media.title}`)}" loading="lazy" />
                            </figure>
                          `
                          : ""
                      }
                    </article>
                  `,
                )
                .join("")}
            </div>
          `
          : ""
      }
      ${
        flow.video
          ? `
            <figure class="case-video-frame reveal">
              <video src="${haitouAsset(flow.video)}" autoplay muted loop playsinline controls></video>
            </figure>
          `
          : flow.documentLayout
            ? ""
            : `
            <div class="case-flow-gallery ${flow.documentLayout ? "case-flow-gallery-doc" : ""} case-flow-${escapeHtml(flow.title.toLowerCase().replaceAll(" ", "-"))}">
              ${flow.images
                .map(
                  (image) => `
                    <figure class="case-flow-figure case-flow-figure-${escapeHtml(image.size)} reveal">
                      <img src="${haitouAsset(image.src)}" alt="${escapeHtml(`${flow.title}: ${image.title}`)}" loading="lazy" />
                      <figcaption>
                        <strong>${escapeHtml(image.title)}</strong>
                        <span>${escapeHtml(image.caption)}</span>
                      </figcaption>
                    </figure>
                  `,
                )
                .join("")}
            </div>
          `
      }
    </article>
  `;
}

function renderHaitouReflection() {
  const reflection = haitouCaseStudy.reflection;
  return renderCaseSection({
    id: "reflection",
    eyebrow: "09",
    title: "Reflection",
    modifier: "case-reflection-section",
    children: `
      <div class="case-reflection-grid">
        <h3 class="reveal">${escapeHtml(reflection.title)}</h3>
        <p class="reveal">${escapeHtml(reflection.body)}</p>
      </div>
      <div class="case-card-grid case-card-grid-three">
        ${reflection.takeaways
          .map(
            (item) => `
              <article class="case-info-card reveal">
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.body)}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    `,
  });
}

function renderHaitouNextSteps() {
  const nextSteps = haitouCaseStudy.nextSteps;
  return renderCaseSection({
    id: "next-steps",
    eyebrow: "10",
    title: "Next Steps",
    intro: nextSteps.intro,
    children: `
      <div class="case-card-grid case-card-grid-four">
        ${nextSteps.cards
          .map(
            (item, index) => `
              <article class="case-info-card case-next-card reveal">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.body)}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    `,
  });
}

function renderHaitouCaseStudy() {
  app.innerHTML = `
    <div class="site light-theme haitou-page">
      ${renderGlobalNav()}
      <main class="case-main">
        ${renderHaitouHero()}
        ${renderHaitouOverview()}
        ${renderHaitouChallenge()}
        ${renderHaitouResearch()}
        ${renderHaitouInsights()}
        ${renderHaitouProcess()}
        ${renderHaitouFinalExperience()}
        ${renderHaitouReflection()}
        ${renderHaitouNextSteps()}
      </main>
      ${renderFooter()}
      <div class="cursor" data-cursor></div>
      <div class="modal-root" data-modal-root></div>
    </div>
  `;

  attachInteractions();
  window.scrollTo({ top: 0, left: 0 });
}

function renderMizoneCaseStudy() {
  const mizoneImage = (path) => assetPath(`public/images/mizone/${path}`);
  app.innerHTML = `
    <div class="site mizone-page">
      ${renderGlobalNav()}
      <main class="mizone-main">
        <section class="mizone-hero">
          <img src="${mizoneImage("final/mizone-lifestyle.gif")}" alt="Mizone Refreshing Grass Flavor bottle in an outdoor skatepark setting" />
          <div class="mizone-hero-shade"></div>
          <div class="mizone-hero-copy reveal">
            <h1>Mizone<br /><span>“Refreshing Grass Flavor”</span></h1>
            <p class="mizone-hero-subtitle">Interbrand × Mizone · Limited Edition Packaging Design</p>
          </div>
        </section>

        <section class="mizone-section mizone-overview">
          <div class="mizone-section-index">02</div>
          <div class="mizone-overview-intro reveal">
            <p class="mizone-overview-label">Project Overview</p>
            <div class="mizone-brand-lockup">
              <strong>Mizone</strong>
              <span>Refreshing Grass Flavor</span>
            </div>
            <h2>A seasonal packaging expression<br />built for spring outdoors.</h2>
            <p class="mizone-overview-description">A limited-edition beverage packaging project developed at Interbrand Shanghai to bring Mizone’s refreshing energy into a seasonal outdoor context.</p>
          </div>
          <div class="mizone-meta-grid reveal">
            <div><span>Client</span><strong>Mizone</strong></div>
            <div><span>Agency</span><strong>Interbrand Shanghai</strong></div>
            <div><span>Role</span><strong>Brand Design Intern</strong></div>
            <div><span>Timeline</span><strong>Summer 2024</strong></div>
            <div><span>Project Type</span><strong>Limited-Edition Beverage Packaging Design</strong></div>
          </div>
        </section>

        <section class="mizone-section mizone-background">
          <div class="mizone-section-index">03</div>
          <div class="mizone-section-heading reveal">
            <p>Project Background</p>
            <h2>“A spring picnic on your tongue.”</h2>
          </div>
          <div class="mizone-background-story reveal">
            <p class="mizone-background-label">Main Description</p>
            <div class="mizone-background-copy">
              <p>Considering the Mizone 2025 social platform campaign, the brand sought innovative ways to engage consumers. As springtime outdoor activities grew in popularity, Mizone launched a limited-edition <strong>“Refreshing Grass Flavor”</strong>, inviting consumers to enjoy a sensory experience akin to a <strong>“spring picnic on your tongue”.</strong></p>
              <p>As one of the major visual strategies for the campaign, the new Mizone bottle packaging was designed to serve as a <strong>hero and prominent campaign visual signal.</strong> Interbrand was brought on to craft the packaging with the following key objectives:</p>
            </div>
          </div>
          <div class="mizone-objectives reveal">
            <p class="mizone-background-label">Design Objectives</p>
            <ol>
              <li><span>01</span><div><h3>Differentiation</h3><p>Stand out on crowded beverage shelves.</p></div></li>
              <li><span>02</span><div><h3>Contextualization</h3><p>Evoke emotional connections by associating with <strong>“outdoor adventures.”</strong></p></div></li>
              <li><span>03</span><div><h3>Brand Consistency</h3><p>Maintain Mizone’s <strong>“energetic freshness”</strong> visual language while incorporating seasonal innovation.</p></div></li>
            </ol>
          </div>
        </section>

        <section class="mizone-section mizone-design-objective">
          <div class="mizone-section-index">04</div>
          <div class="mizone-section-heading reveal">
            <p>Design Objective</p>
            <h2>Natural vitality. Outdoor joy. Refreshing energy.</h2>
          </div>
          <div class="mizone-objective-core reveal">
            <p class="mizone-background-label">Core Objective</p>
            <p>Convey <strong>“natural vitality”</strong> and <strong>“outdoor joy”</strong> through visual design, reinforcing Mizone’s <strong>“refreshing energy”</strong> brand identity while appealing to young consumers in spring outdoor scenarios.</p>
          </div>
          <div class="mizone-strategy reveal">
            <p class="mizone-background-label">Design Strategy</p>
            <div class="mizone-strategy-list">
              <article><span>01</span><div><h3>Key Themes</h3><p>Natural Vitality · Crisp Transparency · Interactive Fun</p></div></article>
              <article><span>02</span><div><h3>Color Palette</h3><p>A dominant fresh green paired with white negative space, mimicking grass and clear skies to reinforce <strong>“refreshing”</strong> taste associations.</p></div></article>
              <article><span>03</span><div><h3>Botanical Motifs</h3><p>Natural backgrounds wrap around the bottle, symbolizing organic growth and the connection between nature and vitality.</p></div></article>
              <article><span>04</span><div><h3>Brand Integration</h3><p>The Mizone logo blends into the foliage, with leaf details emerging from the typography to create a sense of playful dynamism.</p></div></article>
            </div>
          </div>
        </section>

        <section class="mizone-section mizone-development">
          <div class="mizone-section-index">05</div>
          <div class="mizone-section-heading reveal">
            <p>Design Evolution</p>
            <h2>Iteration</h2>
            <p class="mizone-section-description">The visual direction evolved through three iterations, moving from a natural foundation toward a clearer, campaign-ready expression.</p>
          </div>
          <div class="mizone-development-flow">
            <article class="mizone-development-step reveal">
              <span class="mizone-development-version">Version 1</span>
              <img class="mizone-development-image" src="${mizoneImage("development/version-1-natural-foundation.png")}" alt="Mizone Refreshing Grass Flavor bottles placed in fresh grass" />
              <h3>Natural Foundation</h3>
              <div class="mizone-development-notes">
                <div><h4>Strength</h4><p>Clean and natural visual direction with a strong connection to the spring environment.</p></div>
                <div><h4>Improvement</h4><p>The composition felt too subtle. Added soft sunlight and greenery elements to enhance the seasonal atmosphere and create a stronger sense of freshness.</p></div>
              </div>
            </article>
            <article class="mizone-development-step reveal">
              <span class="mizone-development-version">Version 2</span>
              <img class="mizone-development-image" src="${mizoneImage("development/version-2-social-engagement.png")}" alt="Mizone bottle visual concept in a sunlit spring meadow" />
              <h3>Social Engagement</h3>
              <div class="mizone-development-notes">
                <div><h4>Strength</h4><p>Created a more engaging visual direction suitable for social media applications.</p></div>
                <div><h4>Improvement</h4><p>The design lacked clear communication of product benefits. Introduced stronger typography and supporting graphic elements to highlight key USPs and improve product storytelling.</p></div>
              </div>
            </article>
            <article class="mizone-development-step reveal">
              <span class="mizone-development-version">Version 3</span>
              <img class="mizone-development-image" src="${mizoneImage("development/version-3-final-direction.png")}" alt="Final Mizone campaign direction with bottle, outdoor landscape, and campaign typography" />
              <h3>Final Direction</h3>
              <div class="mizone-development-notes">
                <div><h4>Strength</h4><p>Achieved a more balanced composition between product visibility, brand expression, and campaign messaging.</p></div>
                <div><h4>Final Refinement</h4><p>The lighting effect reduced label readability. Refined the contrast and tested mobile visibility to ensure key information remained clear across different applications.</p></div>
              </div>
            </article>
          </div>
        </section>

        <section class="mizone-section mizone-final-design">
          <div class="mizone-section-index">06</div>
          <div class="mizone-section-heading reveal">
            <p>Final Design</p>
            <h2>Final packaging experience</h2>
          </div>
          <div class="mizone-final-design-intro reveal">
            <p>The final packaging design transforms Mizone’s refreshing energy into a seasonal outdoor experience, combining natural vitality, playful visuals, and strong brand recognition.</p>
            <p>Through botanical graphics, fresh green tones, and an immersive outdoor setting, the limited-edition bottle creates a visual connection between the product and spring lifestyle moments.</p>
          </div>
          <div class="mizone-final-outcomes reveal">
            <p class="mizone-background-label">Key Design Outcomes</p>
            <div class="mizone-final-outcomes-list">
              <article><span>01</span><div><h3>Natural Vitality</h3><p>Botanical elements and fresh green visuals communicate a sense of nature, freshness, and organic energy.</p></div></article>
              <article><span>02</span><div><h3>Outdoor Connection</h3><p>The packaging extends beyond the bottle by creating a lifestyle experience inspired by spring outdoor activities.</p></div></article>
              <article><span>03</span><div><h3>Brand Recognition</h3><p>The iconic Mizone typography remains the visual anchor while integrating seamlessly with the seasonal graphic language.</p></div></article>
            </div>
          </div>
          <div class="mizone-final-showcase">
            <p class="mizone-background-label reveal">Final Showcase</p>
            <figure class="mizone-showcase-primary reveal"><img src="${mizoneImage("final-showcase/hero-mockup.png")}" alt="Mizone bottle hero mockup framed by leaves" /><figcaption>Hero Mockup</figcaption></figure>
            <div class="mizone-showcase-secondary">
              <figure class="reveal"><img src="${mizoneImage("final-showcase/bottle-detail.png")}" alt="Mizone bottle held outdoors against a clear blue sky" /><figcaption>Bottle Detail</figcaption></figure>
              <figure class="reveal"><img src="${mizoneImage("final-showcase/campaign-visual.png")}" alt="Mizone Refreshing Grass Flavor final outdoor campaign visual" /><figcaption>Campaign Visual</figcaption></figure>
            </div>
          </div>
        </section>

        <section class="mizone-section mizone-impact-detail">
          <div class="mizone-section-index">07</div>
          <div class="mizone-section-heading reveal">
            <p>Impact</p>
            <h2>Market performance. Social momentum. Community response.</h2>
          </div>
          <div class="mizone-impact-groups">
            <article class="mizone-impact-group reveal">
              <header><span>01</span><h3>Market Performance</h3></header>
              <div class="mizone-impact-metrics mizone-impact-metrics-single">
                <div><strong>30%</strong><p>Exceeded first-month sales expectations by <b>30%</b>, demonstrating strong consumer response to the spring limited-edition packaging.</p></div>
              </div>
            </article>
            <article class="mizone-impact-group reveal">
              <header><span>02</span><h3>Channel Performance</h3></header>
              <div class="mizone-impact-metrics">
                <div><strong>60%</strong><em>Online</em><p>Generated <b>60% of sales through online channels</b>, supported by social campaigns, livestream promotions, and influencer collaborations.</p></div>
                <div><strong>40%</strong><em>Retail</em><p>Contributed <b>40% of sales through retail channels</b>, with strong demand across convenience stores and supermarkets.</p></div>
              </div>
            </article>
            <article class="mizone-impact-group reveal">
              <header><span>03</span><h3>Social Engagement</h3></header>
              <div class="mizone-impact-metrics mizone-impact-metrics-single">
                <div><strong>56%</strong><p>Increased organic social sharing through a visually distinctive packaging system designed for seasonal outdoor moments.</p></div>
              </div>
            </article>
            <article class="mizone-impact-group reveal">
              <header><span>04</span><h3>Community Response</h3></header>
              <div class="mizone-impact-metrics mizone-impact-metrics-community">
                <div><strong>5M+</strong><em>Weibo</em><p>Generated <b>5M+ hashtag views on Weibo</b>, with users sharing their experiences around the limited-edition design.</p></div>
                <div><strong>1,200+</strong><em>Xiaohongshu</em><p>Inspired <b>1,200+ Xiaohongshu posts</b>, helping establish “refreshing spring flavor” as a campaign conversation topic.</p></div>
                <div><strong>3M+</strong><em>Douyin</em><p>Reached <b>3M+ engagements on Douyin</b> through short-form videos and user-generated content.</p></div>
              </div>
            </article>
          </div>
        </section>

        <section class="mizone-section mizone-reflection">
          <div class="mizone-section-index">08</div>
          <div class="mizone-section-heading reveal">
            <p>Design Reflection</p>
          </div>
          <div class="mizone-reflection-grid">
            <article class="reveal">
              <span>01</span>
              <h3>What Worked</h3>
              <p>The design preserved Mizone’s recognizable visual identity while introducing a fresh spring-inspired expression through botanical graphics, natural textures, and outdoor storytelling.</p>
            </article>
            <article class="reveal">
              <span>02</span>
              <h3>Future Opportunities</h3>
              <p>Future campaigns could extend the packaging experience through digital touchpoints such as AR activations or social media interactions, encouraging more engagement beyond the physical product.</p>
            </article>
          </div>
        </section>
      </main>
      ${renderFooter()}
      <div class="cursor" data-cursor></div>
      <div class="modal-root" data-modal-root></div>
    </div>
  `;
  attachInteractions();
  window.scrollTo({ top: 0, left: 0 });
}

function renderAbcSilkCareCaseStudy() {
  const abcImage = (path) => assetPath(`public/images/abc/${path}`);
  app.innerHTML = `
    <div class="site abc-page">
      ${renderGlobalNav()}
      <main class="abc-main">
        <section class="abc-hero">
          <div class="abc-hero-index">01</div>
          <div class="abc-hero-copy reveal">
            <p>Interbrand Shanghai · FMCG Packaging Design</p>
            <h1>ABC <span>Silk Care Packaging Redesign</span></h1>
            <p class="abc-hero-description">Reimagining feminine care packaging through softness, comfort, and refined visual expression.</p>
          </div>
          <div class="abc-hero-visual reveal">
            <img class="abc-hero-background" src="${abcImage("hero-cloud-cotton-background.png")}" alt="" aria-hidden="true" />
            <img class="abc-hero-product" src="${abcImage("series-cloud-cotton-cutout.png")}" alt="ABC Cloud Cotton packaging" />
          </div>
        </section>

        <section class="abc-section abc-overview">
          <div class="abc-section-index">02</div>
          <div class="abc-section-heading reveal">
            <p>Project Overview</p>
            <h2>A softer expression of care, built on familiar brand equity.</h2>
          </div>
          <div class="abc-editorial-copy reveal">
            <p class="abc-content-label">Overview</p>
            <div>
              <p>This project explores a packaging redesign direction for ABC’s feminine care products, focusing on creating a softer, more refined, and contemporary visual experience.</p>
              <p>The redesign balances ABC’s existing brand recognition with a premium expression centered around comfort, protection, and gentle care.</p>
            </div>
          </div>
          <div class="abc-meta-grid reveal">
            <div><span>Project Type</span><strong>Packaging Design / Brand Refresh</strong></div>
            <div><span>Brand</span><strong>ABC</strong></div>
            <div><span>Agency</span><strong>Interbrand Shanghai</strong></div>
            <div><span>Role</span><strong>Brand Design Intern</strong></div>
            <div><span>Deliverables</span><strong>Packaging System / Visual Exploration / Product Design</strong></div>
          </div>
        </section>

        <section class="abc-section abc-challenge">
          <div class="abc-section-index">03</div>
          <div class="abc-section-heading reveal">
            <p>Brand Challenge</p>
            <h2>Reinterpreting the existing brand language.</h2>
          </div>
          <div class="abc-editorial-copy reveal">
            <p class="abc-content-label">Brand Evolution</p>
            <p>ABC has established strong recognition in the feminine care category. This exploration evolves the existing packaging system toward a softer, more premium, and modern visual direction while maintaining brand familiarity.</p>
          </div>
          <div class="abc-challenge-grid reveal">
            <article><span>01</span><h3>Pain Points</h3><ul><li>Outdated packaging lacked a cohesive visual language.</li><li>The visual tone no longer aligned with a young female audience seeking clarity, modernity and vibrancy.</li><li>Five product series were difficult to distinguish at a glance.</li></ul></article>
            <article><span>02</span><h3>Key Objectives</h3><ul><li>Establish a standardized design system for brand consistency.</li><li>Introduce a youthful, bright and intuitive visual identity.</li><li>Improve functional recognition through clear visual semiotics.</li></ul></article>
          </div>
          <div class="abc-before-after reveal">
            <div class="abc-before-after-labels"><div><span>Original System</span><strong>Fragmented visual languages</strong></div><div><span>Evolved System</span><strong>Five distinct expressions, one brand</strong></div></div>
            <img src="${abcImage("comparison-old-new.png")}" alt="Old and redesigned ABC packaging systems across five product series" />
          </div>
        </section>

        <section class="abc-section abc-direction">
          <div class="abc-section-index">04</div>
          <div class="abc-section-heading reveal">
            <p>Visual Direction</p>
            <h2>Exploring softness through visual language.</h2>
          </div>
          <div class="abc-editorial-copy reveal">
            <p class="abc-content-label">Art Direction</p>
            <p>The design direction explores silk-inspired textures, natural elements, and refined compositions to communicate softness and comfort. Organic forms and delicate line expressions create a more premium and sensory product experience.</p>
          </div>
          <div class="abc-decision-grid reveal">
            <article><span>01</span><h3>Insight-Driven Direction</h3><p>Deconstructed <strong>100+ global competitors</strong> across domestic leaders and JP/EU innovators.</p><ul><li>Flat graphic systems</li><li>Low-saturation palettes</li><li>Icon-driven functionality</li></ul><p class="abc-decision-note">Circular forms became the bridge between logo integration and product differentiation.</p></article>
            <article><span>02</span><h3>AI-Augmented Ideation</h3><p>Traditional search could not resolve the combined need for a natural skincare aesthetic and circular composition.</p><ul><li><strong>300+ concepts</strong> generated and reviewed</li><li>Five-series direction aligned within <strong>72 hours</strong></li></ul><p class="abc-decision-note">The tool accelerated reference building; final selection and system logic remained designer-led.</p></article>
          </div>
          <div class="abc-system-upgrade reveal">
            <header><span>Design Execution</span><h3>Systematic Visual System Upgrade</h3><p>Circular logo + thematic graphic + functional color coding</p></header>
            <div class="abc-system-table" role="table" aria-label="ABC five-series visual system">
              <div class="abc-system-row abc-system-head" role="row"><b>Product Line</b><b>Design Language</b><b>Visual Element</b><b>Strategy</b></div>
              <div class="abc-system-row" role="row"><strong>KMS</strong><span>Modern / high-tech</span><span>Bubble + light yellow</span><span>Reduced lines into flat micro-gradients</span></div>
              <div class="abc-system-row" role="row"><strong>KMS Air-thin</strong><span>Ethereal lightness</span><span>Feather + color haze</span><span>Reduced opacity to improve transparency</span></div>
              <div class="abc-system-row" role="row"><strong>Tea Tree</strong><span>Botanical therapy</span><span>Tea tree illustration + green</span><span>Flatter, simpler botanical background</span></div>
              <div class="abc-system-row" role="row"><strong>Cloud Cotton</strong><span>Rapid absorption</span><span>Swirl + blush</span><span>Simplified swirl with softer color transitions</span></div>
              <div class="abc-system-row" role="row"><strong>SilkTouch</strong><span>Skin-soft contact</span><span>Silk + champagne wave</span><span>A new expression of quiet sophistication</span></div>
            </div>
            <div class="abc-critical-decisions"><span>Critical Design Decisions</span><ul><li><strong>Color System</strong> — ABC master palette with functional sub-palettes.</li><li><strong>Visual Reduction</strong> — One core graphic symbol retained per line.</li><li><strong>Layout Hierarchy</strong> — Information reduced from five tiers to three.</li></ul></div>
          </div>
        </section>

        <section class="abc-section abc-development">
          <div class="abc-section-index">05</div>
          <div class="abc-section-heading reveal">
            <p>Packaging System Development</p>
            <h2>From recognition to refinement.</h2>
            <p class="abc-section-description">Multiple visual directions were explored to balance product recognition, softness and premium positioning.</p>
          </div>
          <div class="abc-exploration-guide reveal"><span>Four detailed studies</span><span>Scroll horizontally →</span></div>
          <div class="abc-exploration-track reveal" aria-label="Packaging visual development studies">
            <article class="abc-exploration-slide abc-explore-silk"><header><span>01</span><div><p>SilkTouch</p><h3>Soft-contact sophistication</h3><small>Silk · Champagne wave</small></div></header><img src="${abcImage("exploration-silktouch.png")}" alt="SilkTouch visual exploration with silk-inspired orbital forms" /></article>
            <article class="abc-exploration-slide abc-explore-cloud"><header><span>02</span><div><p>Cloud Cotton</p><h3>Absorption made intuitive</h3><small>Swirl · Blush</small></div></header><img src="${abcImage("exploration-cloud-cotton.png")}" alt="Cloud Cotton circular motif exploration" /></article>
            <article class="abc-exploration-slide abc-explore-tea"><header><span>03</span><div><p>Tea Tree</p><h3>A gentler botanical language</h3><small>Botanical illustration · Soft green</small></div></header><img src="${abcImage("exploration-tea-tree.png")}" alt="Tea Tree botanical background exploration" /></article>
            <article class="abc-exploration-slide abc-explore-air"><header><span>04</span><div><p>KMS Air-thin</p><h3>Ethereal lightweight protection</h3><small>Feather · Color haze</small></div></header><img src="${abcImage("exploration-kms-air-thin.png")}" alt="KMS Air-thin packaging detail comparison" /></article>
          </div>
        </section>

        <section class="abc-section abc-final-system">
          <div class="abc-section-index">06</div>
          <div class="abc-section-heading reveal">
            <p>Final Packaging System</p>
            <h2>One brand system, five distinct care experiences.</h2>
            <p class="abc-section-description">A refined packaging system that balances product differentiation with a unified ABC brand identity.</p>
          </div>
          <div class="abc-series-guide reveal"><span>Five final series</span><span>Scroll horizontally →</span></div>
          <div class="abc-series-grid" aria-label="Five final ABC packaging series">
            <article class="abc-series abc-series-silk reveal">
              <header><span>Series 01</span><h3>SilkTouch</h3><p>Softness · Premium · Comfort</p></header>
              <img src="${abcImage("series-silktouch-cutout.png")}" alt="ABC SilkTouch packaging with transparent background" />
            </article>
            <article class="abc-series abc-series-cloud reveal">
              <header><span>Series 02</span><h3>Cloud Cotton</h3><p>Soft · Absorbent · Airy</p></header>
              <img src="${abcImage("series-cloud-cotton-cutout.png")}" alt="ABC Cloud Cotton packaging with transparent background" />
            </article>
            <article class="abc-series abc-series-natural reveal">
              <header><span>Series 03</span><h3>Tea Tree</h3><p>Natural · Gentle · Botanical</p></header>
              <img src="${abcImage("series-tea-tree-cutout.png")}" alt="ABC Tea Tree packaging with transparent background" />
            </article>
            <article class="abc-series abc-series-premium reveal">
              <header><span>Series 04</span><h3>KMS</h3><p>Modern · Clear · High-tech</p></header>
              <img src="${abcImage("series-kms-cutout.png")}" alt="ABC KMS packaging with transparent background" />
            </article>
            <article class="abc-series abc-series-air reveal">
              <header><span>Series 05</span><h3>KMS Air-thin</h3><p>Lightweight · Transparent · Protective</p></header>
              <img src="${abcImage("series-kms-air-thin-cutout.png")}" alt="ABC KMS Air-thin packaging with transparent background" />
            </article>
          </div>
        </section>

        <section class="abc-section abc-reflection">
          <div class="abc-section-index">07</div>
          <div class="abc-section-heading reveal">
            <p>Design Reflection</p>
            <h2>Commercial clarity, delivered with care.</h2>
          </div>
          <div class="abc-reflection-grid">
            <article class="reveal"><span>01</span><h3>Successes</h3><p>This project strengthened my understanding of FMCG packaging design and how visual systems can influence product perception and consumer connection.</p></article>
            <article class="reveal"><span>02</span><h3>Future Opportunities</h3><p>Further development could expand the packaging system into retail environments, campaign visuals and broader brand touchpoints.</p></article>
          </div>
        </section>
      </main>
      ${renderFooter()}
      <div class="cursor" data-cursor></div>
      <div class="modal-root" data-modal-root></div>
    </div>
  `;
  attachInteractions();
  window.scrollTo({ top: 0, left: 0 });
}

function renderRisoThaiboyCaseStudy() {
  const risoImage = (path) => assetPath(`public/images/riso-thaiboy/${path}`);
  app.innerHTML = `
    <div class="site riso-page">
      ${renderGlobalNav()}
      <main class="riso-main">
        <section class="riso-hero">
          <div class="riso-hero-copy reveal">
            <span>01 / Print Design</span>
            <h1>Thaiboy Digital</h1>
            <p>Risograph Print Exploration</p>
          </div>
          <figure class="riso-hero-visual reveal">
            <img src="${risoImage("hero-hands.png")}" alt="Hands holding the finished Thaiboy Digital Risograph poster" />
          </figure>
          <div class="riso-hero-note" aria-hidden="true">Two-color<br />RISO</div>
        </section>

        <section class="riso-section riso-overview">
          <span class="riso-section-index">02</span>
          <header class="riso-section-heading reveal">
            <p>Project Overview</p>
            <h2>Two colors, built through imperfection.</h2>
          </header>
          <div class="riso-overview-copy reveal">
            <p>This project explores the visual possibilities of two-color Risograph printing through typography, image layering, and ink registration.</p>
            <p>Working within a limited palette, ink texture, printing variation, and color overprinting create rich visual depth—treating RISO’s imperfections as an intentional part of the graphic language.</p>
          </div>
          <dl class="riso-meta reveal">
            <div><dt>Project Type</dt><dd>Poster Design</dd></div>
            <div><dt>Medium</dt><dd>Risograph Printing</dd></div>
            <div><dt>Course</dt><dd>Poster Design</dd></div>
            <div><dt>Printing Method</dt><dd>Two-color RISO</dd></div>
          </dl>
        </section>

        <section class="riso-section riso-process">
          <span class="riso-section-index">03</span>
          <header class="riso-section-heading reveal">
            <p>Printing Process</p>
            <h2>Two separations, one final image.</h2>
          </header>
          <div class="riso-process-track">
            <article class="reveal"><span>01</span><figure><img src="${risoImage("process-separation.png")}" alt="Blue color separation prepared for Risograph printing" /><figcaption>Blue Color Separation</figcaption></figure></article>
            <article class="reveal"><span>02</span><figure><img src="${risoImage("process-red-separation.png")}" alt="Red color separation prepared for Risograph printing" /><figcaption>Red Color Separation</figcaption></figure></article>
          </div>
        </section>

        <section class="riso-section riso-outcome">
          <span class="riso-section-index">04</span>
          <header class="riso-section-heading reveal">
            <p>Final Outcome</p>
            <h2>The poster as a physical object.</h2>
          </header>
          <div class="riso-outcome-grid">
            <figure class="riso-outcome-wall reveal"><img src="${risoImage("final-wall.png")}" alt="Thaiboy Digital Risograph poster displayed on a wall" /></figure>
            <figure class="riso-outcome-flat reveal"><img src="${risoImage("final-flatlay.png")}" alt="Thaiboy Digital Risograph poster photographed in natural light" /></figure>
            <figure class="riso-outcome-zine reveal"><img src="${risoImage("final-zine.png")}" alt="Thaiboy Digital poster presented as an editorial spread" /></figure>
            <figure class="riso-outcome-poster reveal"><img src="${risoImage("final-poster.png")}" alt="Full Thaiboy Digital two-color Risograph poster" /></figure>
          </div>
        </section>

        <section class="riso-section riso-details">
          <span class="riso-section-index">05</span>
          <header class="riso-section-heading reveal">
            <p>Print Details</p>
            <h2>Texture becomes the image.</h2>
            <p class="riso-section-description">RISO’s distinctive ink texture, subtle registration shifts, and color-overprinting effects become essential parts of the final visual language.</p>
          </header>
          <div class="riso-detail-grid">
            <figure class="riso-detail-macro reveal"><img src="${risoImage("detail-macro.png")}" alt="Macro view of red and blue Risograph ink texture" /></figure>
            <figure class="riso-detail-close reveal"><img src="${risoImage("detail-close.png")}" alt="Close-up of Risograph overprinting and halftone detail" /></figure>
            <figure class="riso-detail-sheet reveal"><img src="${risoImage("detail-sheet.png")}" alt="Print detail sheet documenting Risograph grain, type, and registration" /></figure>
          </div>
        </section>
      </main>
      ${renderFooter()}
      <div class="cursor" data-cursor></div>
      <div class="modal-root" data-modal-root></div>
    </div>
  `;
  attachInteractions();
  window.scrollTo({ top: 0, left: 0 });
}


function renderBalenciagaNoirCaseStudy() {
  const noirImage = (path) => assetPath(`public/images/balenciaga-noir/${path}`);
  app.innerHTML = `
    <div class="site noir-page">
      ${renderGlobalNav()}
      <main class="noir-main">
        <section class="noir-hero">
          <img src="${noirImage("hero-lookbook.png")}" alt="Monochrome Balenciaga Noir Salon dining table and sculptural cuisine" />
          <div class="noir-hero-shade"></div>
          <div class="noir-hero-copy reveal">
            <span>01 / Brand Extension</span>
            <h1>Balenciaga Noir Salon</h1>
            <p>A luxury dining experience that extends Balenciaga’s fashion identity into hospitality.</p>
          </div>
          <div class="noir-scroll-cue" aria-hidden="true">Explore</div>
        </section>

        <section class="noir-overview">
          <div class="noir-overview-copy reveal">
            <p class="noir-label">Project Overview</p>
            <div>
              <p>Balenciaga Noir Salon is a brand extension concept that transforms Balenciaga’s distinctive visual language into an immersive dining experience.</p>
              <p>Inspired by Balenciaga’s monochromatic aesthetic, architectural silhouettes, and experimental approach, the project explores how fashion can expand beyond garments into lifestyle and hospitality.</p>
            </div>
          </div>
          <dl class="noir-meta reveal">
            <div><dt>Project Type</dt><dd>Brand Extension / Experiential Design</dd></div>
            <div><dt>Brand</dt><dd>Balenciaga</dd></div>
            <div><dt>Role</dt><dd>Brand Designer</dd></div>
            <div><dt>Deliverables</dt><dd>Visual Identity, Spatial Concept, Menu & Experience Design</dd></div>
          </dl>
        </section>

        <section class="noir-section noir-brand">
          <span class="noir-section-number">02</span>
          <header class="noir-section-heading reveal"><p>Brand Interpretation</p><h2>Translating Fashion Into Experience</h2></header>
          <div class="noir-content-row reveal"><p class="noir-label">Brand Perspective</p><p>Balenciaga’s identity is built around contrast — minimal yet disruptive, refined yet unconventional. This project translates these characteristics into a dining environment through a dark visual language, experimental presentation, and a carefully curated guest experience.</p></div>
          <div class="noir-brand-grid">
            <figure class="noir-brand-portrait reveal"><img src="${noirImage("fashion-reference-portrait.jpg")}" alt="Balenciaga black fashion reference" /></figure>
            <figure class="reveal"><img src="${noirImage("fashion-reference-01.jpg")}" alt="Dark Balenciaga runway reference" /></figure>
            <figure class="reveal"><img src="${noirImage("fashion-reference-02.jpg")}" alt="Monochrome Balenciaga campaign reference" /></figure>
            <figure class="noir-brand-tone reveal"><img src="${noirImage("color-tone.png")}" alt="Monochrome material and atmosphere references" /></figure>
          </div>
        </section>

        <section class="noir-section noir-concept">
          <span class="noir-section-number">03</span>
          <header class="noir-section-heading reveal"><p>Concept Development</p><h2>From Runway to Dining</h2></header>
          <div class="noir-content-row reveal"><p class="noir-label">Experience Direction</p><div><p>The concept reimagines Balenciaga’s fashion world as an intimate salon experience.</p><p>The design direction combines monochromatic visuals, sculptural forms, and unexpected culinary presentation to create a dining environment that feels both luxurious and experimental.</p></div></div>
          <figure class="noir-concept-hero reveal"><img src="${noirImage("runway-to-dining-v2.jpg")}" alt="Balenciaga runway presentation translating fashion into the Noir Salon experience" /></figure>
          <div class="noir-concept-words reveal"><span>Monochromatic Visuals</span><span>Sculptural Forms</span><span>Unexpected Presentation</span></div>
        </section>

        <section class="noir-section noir-identity">
          <span class="noir-section-number">04</span>
          <header class="noir-section-heading reveal"><p>Identity System</p><h2>Building the Noir Salon Identity</h2></header>
          <div class="noir-content-row reveal"><p class="noir-label">Visual Language</p><p>The identity system extends Balenciaga’s recognizable simplicity into a hospitality context. Refined typography, minimal composition, and strong black-and-white contrast create a cohesive expression across touchpoints.</p></div>
          <div class="noir-identity-editorial reveal">
            <div class="noir-identity-mark">
              <div class="noir-identity-versions">
                <figure>
                  <img src="${noirImage("noir-symbol-transparent.png")}" alt="Balenciaga Noir Salon abstract B and teacup symbol in black" />
                  <figcaption>01 / Core Black</figcaption>
                </figure>
                <figure>
                  <img src="${noirImage("noir-symbol-silver-transparent.png")}" alt="Balenciaga Noir Salon abstract B and teacup symbol in brushed silver" />
                  <figcaption>02 / Brushed Silver</figcaption>
                </figure>
              </div>
              <p>B + Teacup</p>
            </div>
            <div class="noir-identity-notes">
              <article>
                <span>01 / Negative Shape</span>
                <h3>The letter B becomes the visual anchor.</h3>
                <p>The hollow outline forms a deconstructed B, connecting the mark directly to Balenciaga while expressing the house’s unconventional spirit.</p>
              </article>
              <article>
                <span>02 / Regular Shape</span>
                <h3>A teacup completes the salon narrative.</h3>
                <p>The solid contour abstracts a curved cup body and handle, translating the fashion identity into a distinctive hospitality symbol.</p>
              </article>
            </div>
          </div>
        </section>

        <section class="noir-section noir-spatial">
          <span class="noir-section-number">05</span>
          <header class="noir-section-heading reveal"><p>Spatial Experience</p><h2>Designing an Immersive Dining Environment</h2></header>
          <div class="noir-content-row reveal"><p class="noir-label">Environment</p><p>The salon environment translates Balenciaga’s architectural and fashion language into physical space. Every detail — from tableware to interior atmosphere — contributes to a unified luxury experience.</p></div>
          <figure class="noir-spatial-hero reveal"><img src="${noirImage("interior-crop.png")}" alt="Balenciaga Noir Salon interior with projected runway visuals" /></figure>
          <figure class="noir-spatial-detail reveal"><img src="${noirImage("tableware-crop.png")}" alt="Sculptural black tableware and illuminated dining display" /></figure>
        </section>

        <section class="noir-section noir-culinary">
          <span class="noir-section-number">06</span>
          <header class="noir-section-heading reveal"><p>Culinary Experience</p><h2>A Dark Culinary Expression</h2></header>
          <div class="noir-content-row reveal"><p class="noir-label">Dining Journey</p><p>The menu experience reflects Balenciaga’s experimental spirit through unconventional compositions, refined plating, and a minimal visual approach. The dining journey becomes an extension of the brand’s identity.</p></div>
          <div class="noir-dish-grid">
            <figure class="reveal"><img src="${noirImage("culinary-course-01.png")}" alt="Refined seafood course served on Balenciaga black tableware" /></figure>
            <figure class="reveal"><img src="${noirImage("culinary-course-02.png")}" alt="Chocolate dessert course served on Balenciaga black tableware" /></figure>
            <figure class="reveal"><img src="${noirImage("culinary-course-03.png")}" alt="Sculptural black pearl course served on Balenciaga tableware" /></figure>
            <figure class="reveal"><img src="${noirImage("culinary-course-04.png")}" alt="Experimental plated course in the Balenciaga Noir Salon setting" /></figure>
          </div>
          <figure class="noir-food-lookbook reveal"><img src="${noirImage("food-lookbook.png")}" alt="Balenciaga Noir Salon food lookbook and experimental menu imagery" /></figure>
          <div class="noir-culinary-grid">
            <figure class="reveal"><img src="${noirImage("menu.png")}" alt="Balenciaga Noir Salon menu design" /><figcaption>Menu Experience</figcaption></figure>
            <figure class="reveal"><img src="${noirImage("takeaway-packaging.png")}" alt="Balenciaga Noir Salon takeaway packaging" /><figcaption>Hospitality Extension</figcaption></figure>
          </div>
        </section>

        <section class="noir-section noir-reflection">
          <span class="noir-section-number">07</span>
          <header class="noir-section-heading reveal"><p>Reflection</p><h2>Design Reflection</h2></header>
          <div class="noir-reflection-grid">
            <article class="reveal"><span>01</span><h3>Successes</h3><p>This project challenged me to think beyond traditional branding and explore how a fashion identity can be translated into a complete lifestyle experience.</p></article>
            <article class="reveal"><span>02</span><h3>Future Opportunities</h3><p>Future development could expand the concept through digital booking experiences, seasonal collections, and immersive brand activations.</p></article>
          </div>
        </section>
      </main>
      ${renderFooter()}
      <div class="cursor" data-cursor></div>
      <div class="modal-root" data-modal-root></div>
    </div>
  `;
  attachInteractions();
  window.scrollTo({ top: 0, left: 0 });
}

function renderFizzCaseStudy() {
  const fizzImage = (path) => assetPath(`public/images/fizz/${path}`);
  app.innerHTML = `
    <div class="site fizz-page">
      ${renderGlobalNav()}
      <main class="fizz-main">
        <section class="fizz-hero">
          <div class="fizz-hero-copy reveal">
            <span class="fizz-hero-number">01</span>
            <p class="fizz-kicker">Brand Identity</p>
            <h1>FIZZ</h1>
            <p class="fizz-hero-type">Sparkling Water Packaging Design</p>
            <p class="fizz-hero-tagline">A playful sparkling water identity built around flavor, color, and freshness.</p>
          </div>
          <figure class="fizz-hero-visual reveal">
            <img src="${fizzImage("hero-four-cans.png")}" alt="Four colorful FIZZ sparkling water cans representing lemon, lime, raspberry, and grapefruit flavors" />
          </figure>
        </section>

        <section class="fizz-section fizz-overview">
          <span class="fizz-section-number">02</span>
          <header class="fizz-section-header reveal">
            <p>Project Overview</p>
            <h2>A cohesive beverage identity shaped by flavor.</h2>
          </header>
          <div class="fizz-content-row reveal">
            <p class="fizz-content-label">Project Summary</p>
            <p class="fizz-content-body">Fizz is a sparkling water packaging concept exploring how flavor differentiation and visual storytelling can create a cohesive beverage identity.</p>
          </div>
          <dl class="fizz-meta reveal">
            <div><dt>Project Type</dt><dd>Packaging Design</dd></div>
            <div><dt>Role</dt><dd>Graphic Designer</dd></div>
            <div><dt>Timeline</dt><dd>2025</dd></div>
            <div><dt>Tools</dt><dd>Illustrator / Photoshop / Figma</dd></div>
            <div><dt>Deliverables</dt><dd>Packaging System, Brand Identity, Product Mockups</dd></div>
          </dl>
        </section>

        <section class="fizz-section fizz-concept">
          <span class="fizz-section-number">03</span>
          <header class="fizz-section-header reveal">
            <p>Brand Concept</p>
            <h2>Building a playful flavor-driven identity</h2>
          </header>
          <div class="fizz-content-row reveal">
            <p class="fizz-content-label">Concept Statement</p>
            <p class="fizz-content-body">Fizz creates a refreshing beverage experience through bold typography, vibrant colors, and a flexible packaging system.</p>
          </div>
          <figure class="fizz-board reveal">
            <img src="${fizzImage("brand-presentation-board.png")}" alt="FIZZ brand presentation board showing logo, typography, colors, audience, and visual strategy" />
          </figure>
        </section>

        <section class="fizz-section fizz-packaging">
          <span class="fizz-section-number">04</span>
          <header class="fizz-section-header reveal">
            <p>Packaging System</p>
            <h2>Flavor Differentiation</h2>
          </header>
          <div class="fizz-content-row reveal">
            <p class="fizz-content-label">System Principle</p>
            <p class="fizz-content-body">Each flavor is defined by its own color palette and graphic language while maintaining a consistent brand system.</p>
          </div>
          <div class="fizz-flavor-grid">
            <figure class="reveal fizz-flavor-lemon"><figcaption><span>01</span>Lemon</figcaption><img src="${fizzImage("lemon-final.png")}" alt="FIZZ lemon sparkling water packaging layout" /></figure>
            <figure class="reveal fizz-flavor-lime"><figcaption><span>02</span>Lime</figcaption><img src="${fizzImage("lime-final.png")}" alt="FIZZ lime sparkling water packaging layout" /></figure>
            <figure class="reveal fizz-flavor-raspberry"><figcaption><span>03</span>Raspberry</figcaption><img src="${fizzImage("raspberry-final.png")}" alt="FIZZ raspberry sparkling water packaging layout" /></figure>
            <figure class="reveal fizz-flavor-grapefruit"><figcaption><span>04</span>Grapefruit</figcaption><img src="${fizzImage("grapefruit-final.png")}" alt="FIZZ grapefruit sparkling water packaging layout" /></figure>
          </div>
        </section>

        <section class="fizz-section fizz-applications">
          <span class="fizz-section-number">05</span>
          <header class="fizz-section-header reveal">
            <p>Final Applications</p>
            <h2>Bringing the brand into real environments</h2>
          </header>
          <div class="fizz-content-row reveal">
            <p class="fizz-content-label">Application Direction</p>
            <p class="fizz-content-body">The packaging system was extended into lifestyle visuals to create a more energetic and approachable consumer experience.</p>
          </div>
          <div class="fizz-application-grid">
            <figure class="reveal"><img src="${fizzImage("lemon-lifestyle.jpg")}" alt="FIZZ lemon can surrounded by water splashes and fresh lemon slices" /><figcaption>Lemon — Refreshing Energy</figcaption></figure>
            <figure class="reveal"><img src="${fizzImage("raspberry-lifestyle.png")}" alt="FIZZ raspberry can surrounded by floating raspberries" /><figcaption>Raspberry — Social Energy</figcaption></figure>
          </div>
        </section>

        <section class="fizz-section fizz-motion">
          <span class="fizz-section-number">06</span>
          <header class="fizz-section-header reveal">
            <p>Motion Extension</p>
            <h2>Freshness in motion</h2>
          </header>
          <div class="fizz-content-row reveal">
            <p class="fizz-content-label">Motion Direction</p>
            <p class="fizz-content-body">The visual identity was further explored through motion to enhance the refreshing and playful personality of the brand.</p>
          </div>
          <div class="fizz-motion-frame reveal">
            <video poster="${fizzImage("raspberry-lifestyle.png")}" autoplay muted loop playsinline preload="auto" aria-label="Animated FIZZ raspberry sparkling water advertisement">
              <source src="${fizzImage("fizz-motion-web.mp4")}" type="video/mp4" />
            </video>
          </div>
        </section>

        <section class="fizz-section fizz-reflection">
          <span class="fizz-section-number">07</span>
          <header class="fizz-section-header reveal">
            <p>Design Reflection</p>
            <h2>A flexible identity with room to grow.</h2>
          </header>
          <div class="fizz-reflection-grid">
            <article class="reveal">
              <span>01</span>
              <h3>Successes</h3>
              <p>Created a flexible packaging system that balances strong flavor recognition with a unified brand identity.</p>
            </article>
            <article class="reveal">
              <span>02</span>
              <h3>Future Opportunities</h3>
              <p>Future development could explore interactive digital experiences and campaign applications to extend the brand beyond packaging.</p>
            </article>
          </div>
        </section>
      </main>
      ${renderFooter()}
      <div class="cursor" data-cursor></div>
      <div class="modal-root" data-modal-root></div>
    </div>
  `;
  attachInteractions();
  window.scrollTo({ top: 0, left: 0 });
}

function renderHome() {
  app.innerHTML = `
    <div class="site light-theme">
      ${renderGlobalNav()}
      <main>
        <section class="hero">
          <div class="hero-liquid" data-liquid-ether aria-hidden="true"></div>
          <div class="hero-inner">
            <div class="hero-logo reveal">${logoMark}</div>
            <div class="hero-grid">
              <p class="kicker reveal">Product Designer<br />Graphic Designer</p>
              <div class="hero-copy reveal">
                <h1>Designing thoughtful products<br /> and bold visual experiences.</h1>
              </div>
            </div>
          </div>
        </section>

        ${renderFeaturedWorkSection()}
        ${renderLegacyWorkList()}

      </main>

      ${renderFooter()}
      <div class="cursor" data-cursor></div>
      <div class="modal-root" data-modal-root></div>
    </div>
  `;

  attachInteractions();
}

function renderWorksPage() {
  app.innerHTML = `
    <div class="site light-theme works-page">
      ${renderGlobalNav()}
      <main class="works-page-main">
        <section class="works-page-hero">
          <p class="eyebrow reveal">WORKS</p>
          <h1 class="reveal">Works</h1>
          <p class="works-page-intro reveal">A selection of graphic, motion, and 3D projects.</p>
        </section>
        ${renderSelectedWorks()}
        ${renderLegacyWorkList()}
      </main>
      ${renderFooter()}
      <div class="cursor" data-cursor></div>
      <div class="modal-root" data-modal-root></div>
    </div>
  `;

  attachInteractions();
  window.scrollTo({ top: 0, left: 0 });
}

function renderAboutPage() {
  app.innerHTML = `
    <div class="site light-theme about-page">
      ${renderGlobalNav()}
      <main class="about-page-main">
        <div class="about-page-spacer" aria-hidden="true"></div>
        ${renderAboutSections()}
      </main>
      ${renderFooter()}
      <div class="cursor" data-cursor></div>
      <div class="modal-root" data-modal-root></div>
    </div>
  `;

  attachInteractions();
  window.scrollTo({ top: 0, left: 0 });
}

function attachInteractions() {
  const site = document.querySelector(".site");
  const modalRoot = document.querySelector("[data-modal-root]");
  const preview = document.querySelector("[data-hover-preview]");

  document.querySelectorAll("[data-open-contact]").forEach((button) => {
    button.addEventListener("click", () => openContact(modalRoot));
  });

  document.querySelectorAll("[data-project-index]").forEach((row) => {
    row.addEventListener("mouseenter", () => {
      const project = archiveProjects[Number(row.dataset.projectIndex)];
      if (!preview) return;
      preview.classList.add("visible");
      preview.style.top = `${row.offsetTop - 44}px`;
      preview.querySelector("img").src = assetPath(localImages[project.name] || project.images[0].src);
    });
    row.addEventListener("mouseleave", () => preview?.classList.remove("visible"));
    if (!row.dataset.caseStudyHref) {
      row.addEventListener("click", () => openProject(Number(row.dataset.projectIndex), modalRoot));
    }
  });

  setupSelectedWorks();
  setupExperienceTimeline();
  setupCaseProcessGallery();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.15 },
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  const darkTrigger = document.querySelector("[data-dark-trigger]");
  const updateScrollState = () => {
    site.classList.toggle("dark-theme", Boolean(darkTrigger && darkTrigger.getBoundingClientRect().top < window.innerHeight * 0.5));
    site.classList.toggle("is-scrolled", window.scrollY > 16);
  };
  window.addEventListener("scroll", updateScrollState, { passive: true });
  window.addEventListener("resize", updateScrollState);
  window.addEventListener("load", updateScrollState);
  window.addEventListener("hashchange", updateScrollState);
  updateScrollState();
  requestAnimationFrame(updateScrollState);
  window.setTimeout(updateScrollState, 120);
  window.setTimeout(updateScrollState, 500);

  setupCursor();
  setupHeroCanvas();
}

function setupCaseProcessGallery() {
  const gallery = document.querySelector("[data-case-process-gallery]");
  if (!gallery) return;

  const tabs = Array.from(gallery.querySelectorAll("[data-case-process-tab]"));
  const panels = Array.from(gallery.querySelectorAll("[data-case-process-panel]"));

  const selectPanel = (index) => {
    tabs.forEach((tab, tabIndex) => {
      const isActive = tabIndex === index;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    panels.forEach((panel, panelIndex) => {
      const isActive = panelIndex === index;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectPanel(index));
    tab.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault();
        const nextIndex = (index + 1) % tabs.length;
        tabs[nextIndex].focus();
        selectPanel(nextIndex);
      }
      if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault();
        const previousIndex = (index - 1 + tabs.length) % tabs.length;
        tabs[previousIndex].focus();
        selectPanel(previousIndex);
      }
    });
  });
}

function setupExperienceTimeline() {
  const section = document.querySelector("[data-experience]");
  if (!section) return;

  const entries = Array.from(section.querySelectorAll("[data-experience-entry]"));
  const detail = section.querySelector("[data-experience-detail]");
  const company = section.querySelector("[data-experience-company]");
  const role = section.querySelector("[data-experience-role]");
  const description = section.querySelector("[data-experience-description]");
  const activeLine = section.querySelector("[data-experience-line]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let activeIndex = 0;

  const updateActiveLine = () => {
    const activeEntry = entries[activeIndex];
    const marker = activeEntry?.querySelector(".experience-marker");
    if (!marker || !activeLine) return;

    const timelineRect = section.querySelector(".experience-timeline").getBoundingClientRect();
    const markerRect = marker.getBoundingClientRect();
    const top = markerRect.top - timelineRect.top + markerRect.height / 2;
    activeLine.style.height = `${Math.max(0, top)}px`;

    const lastMarker = entries.at(-1)?.querySelector(".experience-marker");
    if (lastMarker) {
      const lastRect = lastMarker.getBoundingClientRect();
      const lineEnd = lastRect.top - timelineRect.top + lastRect.height / 2;
      section.style.setProperty("--experience-line-end", `${Math.max(0, lineEnd)}px`);
    }
  };

  const selectEntry = (index, shouldFocus = false) => {
    activeIndex = (index + entries.length) % entries.length;
    const entry = experienceEntries[activeIndex];

    entries.forEach((button, buttonIndex) => {
      const isActive = buttonIndex === activeIndex;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    detail.classList.toggle("is-changing", !reduceMotion.matches);
    window.setTimeout(() => {
      company.textContent = entry.company;
      role.textContent = entry.role;
      description.textContent = entry.description;
      detail.classList.remove("is-changing");
      updateActiveLine();
    }, reduceMotion.matches ? 0 : 120);

    if (shouldFocus) entries[activeIndex].focus({ preventScroll: true });
  };

  entries.forEach((entry, index) => {
    entry.addEventListener("mouseenter", () => selectEntry(index));
    entry.addEventListener("focus", () => selectEntry(index));
    entry.addEventListener("click", () => selectEntry(index));
    entry.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectEntry(index);
      }
      if (event.key === "ArrowDown") {
        event.preventDefault();
        selectEntry(index + 1, true);
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        selectEntry(index - 1, true);
      }
    });
  });

  updateActiveLine();
  window.addEventListener("resize", updateActiveLine);
  window.setTimeout(updateActiveLine, 200);
}

function setupSelectedWorks() {
  const section = document.querySelector("[data-selected-works]");
  if (!section) return;

  const cards = Array.from(section.querySelectorAll("[data-selected-card]"));
  const nextButton = section.querySelector("[data-selected-next]");
  const showButton = section.querySelector("[data-selected-show]");
  const viewAllButton = section.querySelector("[data-selected-all]");
  const counter = section.querySelector("[data-selected-counter]");
  const status = section.querySelector("[data-selected-status]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let activeIndex = 0;
  let showTimer;

  const updateCounter = () => {
    counter.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(cards.length).padStart(2, "0")}`;
  };

  const setCardStates = (isFocus) => {
    section.classList.toggle("is-focus", isFocus);
    cards.forEach((card, index) => {
      const isActive = index === activeIndex;
      card.classList.toggle("is-active", isFocus && isActive);
      card.classList.toggle("is-muted", isFocus && !isActive);
      card.tabIndex = isFocus && !isActive ? -1 : 0;
      card.setAttribute("aria-pressed", String(isFocus && isActive));
    });
    updateCounter();
  };

  const openFocus = (index) => {
    activeIndex = (index + cards.length) % cards.length;
    setCardStates(true);
  };

  const animateLayout = (card, update, duration = 860) => {
    if (reduceMotion.matches || !card.animate) {
      update();
      return;
    }

    const first = card.getBoundingClientRect();
    card.classList.add("is-travelling");
    update();
    const last = card.getBoundingClientRect();
    const deltaX = first.left - last.left;
    const deltaY = first.top - last.top;
    const scaleX = first.width / last.width;
    const scaleY = first.height / last.height;

    const motion = card.animate(
      [
        {
          transform: `translate(${deltaX}px, ${deltaY}px) scale(${scaleX}, ${scaleY})`,
          offset: 0,
        },
        {
          transform: `translate(${deltaX * 0.14}px, ${deltaY * 0.14}px) scale(${1 + (scaleX - 1) * 0.14}, ${1 + (scaleY - 1) * 0.14})`,
          offset: 0.74,
        },
        {
          transform: "translate(0, 0) scale(1, 1)",
          offset: 1,
        },
      ],
      {
        duration,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    );
    motion.finished.finally(() => card.classList.remove("is-travelling"));
  };

  cards.forEach((card, index) => {
    card.addEventListener("click", () => animateLayout(card, () => openFocus(index)));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        animateLayout(card, () => openFocus(index));
      }
      if (event.key === "Escape" && section.classList.contains("is-focus")) {
        animateLayout(cards[activeIndex], () => setCardStates(false));
      }
    });
  });

  nextButton.addEventListener("click", () => {
    section.classList.add("is-switching");
    openFocus(activeIndex + 1);
    window.setTimeout(() => section.classList.remove("is-switching"), 780);
  });

  showButton.addEventListener("click", () => {
    window.clearTimeout(showTimer);
    const activeCard = cards[activeIndex];
    activeCard.classList.add("is-showing");
    activeCard.focus({ preventScroll: true });
    status.textContent = `${selectedWorks[activeIndex].title} is selected. Replace this placeholder with your project detail later.`;
    showTimer = window.setTimeout(() => activeCard.classList.remove("is-showing"), 900);
  });

  viewAllButton.addEventListener("click", () => {
    animateLayout(cards[activeIndex], () => setCardStates(false));
    cards[activeIndex].focus({ preventScroll: true });
  });

  section.addEventListener("keydown", (event) => {
    if (!section.classList.contains("is-focus")) return;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      openFocus(activeIndex + 1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      openFocus(activeIndex - 1);
    }
    if (event.key === "Escape") {
      event.preventDefault();
      animateLayout(cards[activeIndex], () => setCardStates(false));
    }
  });

  updateCounter();
}

function setupCursor() {
  const cursor = document.querySelector("[data-cursor]");
  if (!matchMedia("(pointer:fine)").matches) return;
  window.addEventListener("mousemove", (event) => {
    cursor.classList.add("active");
    cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
  });
  document.addEventListener("mouseover", (event) => {
    cursor.classList.toggle("large", Boolean(event.target.closest("a, button, .work-row, .selected-work-card, summary")));
  });
}

function setupHeroCanvas() {
  const canvas = document.querySelector("[data-hero-canvas]");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  const particles = Array.from({ length: 54 }, (_, index) => ({
    x: Math.random(),
    y: Math.random(),
    r: 18 + (index % 7) * 9,
    s: 0.00025 + (index % 6) * 0.00008,
    phase: Math.random() * Math.PI * 2,
  }));

  function resize() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.floor(width * devicePixelRatio);
    canvas.height = Math.floor(height * devicePixelRatio);
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  }

  function draw(time) {
    ctx.clearRect(0, 0, width, height);
    ctx.globalAlpha = 0.24;
    ctx.strokeStyle = "rgba(0,0,0,.22)";
    particles.forEach((p) => {
      const x = ((p.x * width + Math.sin(time * p.s + p.phase) * 90) + width) % width;
      const y = ((p.y * height + Math.cos(time * p.s * 1.4 + p.phase) * 70) + height) % height;
      ctx.beginPath();
      ctx.ellipse(x, y, p.r * 1.55, p.r, time * p.s, 0, Math.PI * 2);
      ctx.stroke();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  resize();
  addEventListener("resize", resize);
  requestAnimationFrame(draw);
}

function openContact(root) {
  root.innerHTML = `
    <div class="modal-backdrop" data-close-modal></div>
    <section class="contact-modal modal-panel" role="dialog" aria-modal="true" aria-label="Start a project request">
      <button class="close" data-close-modal aria-label="Close">×</button>
      <h2>Start a project request</h2>
      <form action="mailto:${email}" method="post" enctype="text/plain">
        <label>Name<input name="name" type="text" autocomplete="name" /></label>
        <label>Email<input name="email" type="text" autocomplete="email" /></label>
        <label>Project type<input name="project_type" type="text" placeholder="Website, app, support..." /></label>
        <label>Tell me about it<textarea name="message"></textarea></label>
        <button class="btn" type="submit">Send request</button>
      </form>
    </section>
  `;
  bindModal(root);
}

function openProject(index, root) {
  activeProject = projects[index];
  const project = activeProject;
  const detailImages = project.images.slice(0, 5);
  root.innerHTML = `
    <div class="modal-backdrop" data-close-modal></div>
    <section class="project-modal modal-panel" role="dialog" aria-modal="true" aria-label="${escapeHtml(project.name)} project details">
      <button class="close" data-close-modal aria-label="Close">×</button>
      <div class="project-hero" style="background:${project.backgroundColors.dark}">
        <img src="${assetPath(localImages[project.name] || project.images[0].src)}" alt="${escapeHtml(project.images[0].alt)}" />
      </div>
      <div class="project-body">
        <div>
          <p class="eyebrow">${escapeHtml(project.type)}</p>
          <h2>${escapeHtml(project.name)}</h2>
          <p class="project-tags">${escapeHtml(project.categoryAlt?.join(" / ") || project.category.join(" / "))}</p>
          ${project.url ? `<a class="btn btn-alt" href="${project.url}" target="_blank" rel="noreferrer">View live site</a>` : ""}
        </div>
        <div class="project-copy">
          ${project.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
        </div>
      </div>
      <div class="project-gallery">
        ${detailImages
          .map((image, imageIndex) => `<img src="${assetPath(imageIndex === 0 ? localImages[project.name] || image.src : image.src)}" alt="${escapeHtml(image.alt)}" />`)
          .join("")}
      </div>
    </section>
  `;
  bindModal(root);
}

function bindModal(root) {
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => root.classList.add("open"));
  root.querySelectorAll("[data-close-modal]").forEach((el) => {
    el.addEventListener("click", () => {
      root.classList.remove("open");
      setTimeout(() => {
        root.innerHTML = "";
        document.body.classList.remove("modal-open");
        activeProject = null;
      }, 220);
    });
  });
}

if (currentPage === "haitou") {
  renderHaitouCaseStudy();
} else if (currentPage === "mizone") {
  renderMizoneCaseStudy();
} else if (currentPage === "abc-silk-care") {
  renderAbcSilkCareCaseStudy();
} else if (currentPage === "fizz") {
  renderFizzCaseStudy();
} else if (currentPage === "balenciaga-noir") {
  renderBalenciagaNoirCaseStudy();
} else if (currentPage === "riso-thaiboy") {
  renderRisoThaiboyCaseStudy();
} else if (currentPage === "work") {
  renderWorksPage();
} else if (currentPage === "about") {
  renderAboutPage();
} else {
  renderHome();
}
