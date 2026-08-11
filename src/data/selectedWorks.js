function posterSvg({ title, category, year, accentColor, index }) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 700" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="paper-${index}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#f8f3ff"/>
          <stop offset="0.52" stop-color="#d7bbfc"/>
          <stop offset="1" stop-color="#0b0118"/>
        </linearGradient>
        <radialGradient id="light-${index}" cx="26%" cy="18%" r="70%">
          <stop offset="0" stop-color="${accentColor}" stop-opacity="0.82"/>
          <stop offset="0.42" stop-color="${accentColor}" stop-opacity="0.16"/>
          <stop offset="1" stop-color="${accentColor}" stop-opacity="0"/>
        </radialGradient>
        <filter id="soft-${index}" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="26"/>
        </filter>
      </defs>
      <rect width="500" height="700" fill="url(#paper-${index})"/>
      <rect width="500" height="700" fill="url(#light-${index})"/>
      <circle cx="${90 + index * 9}" cy="${130 + index * 7}" r="${86 + index * 5}" fill="${accentColor}" opacity="0.28" filter="url(#soft-${index})"/>
      <path d="M56 504 C146 406 236 622 444 438" fill="none" stroke="#f1e7fe" stroke-opacity="0.58" stroke-width="2"/>
      <path d="M74 538 C180 462 250 596 418 512" fill="none" stroke="${accentColor}" stroke-opacity="0.74" stroke-width="1.4"/>
      <rect x="44" y="44" width="412" height="612" rx="34" fill="none" stroke="#f1e7fe" stroke-opacity="0.38"/>
      <text x="54" y="92" fill="#0b0118" font-family="Arial, sans-serif" font-size="16" letter-spacing="3">${String(index).padStart(2, "0")}</text>
      <text x="54" y="590" fill="#f1e7fe" font-family="Arial, sans-serif" font-size="34" font-weight="700">${title}</text>
      <text x="54" y="626" fill="#d7bbfc" font-family="Arial, sans-serif" font-size="15" letter-spacing="3">${category.toUpperCase()} / ${year}</text>
    </svg>
  `;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const selectedWorks = [
  {
    id: "placeholder-01",
    title: "Placeholder 01",
    category: "Digital Product",
    year: "2026",
    accentColor: "#BD8FFA",
  },
  {
    id: "placeholder-02",
    title: "Placeholder 02",
    category: "Brand System",
    year: "2026",
    accentColor: "#A363F8",
  },
  {
    id: "placeholder-03",
    title: "Placeholder 03",
    category: "Editorial Web",
    year: "2026",
    accentColor: "#8027F5",
  },
  {
    id: "placeholder-04",
    title: "Placeholder 04",
    category: "Visual Identity",
    year: "2025",
    accentColor: "#700BF4",
  },
  {
    id: "placeholder-05",
    title: "Placeholder 05",
    category: "Interaction",
    year: "2025",
    accentColor: "#5C09C8",
  },
  {
    id: "placeholder-06",
    title: "Placeholder 06",
    category: "Campaign",
    year: "2025",
    accentColor: "#48079C",
  },
  {
    id: "placeholder-07",
    title: "Placeholder 07",
    category: "Experience",
    year: "2024",
    accentColor: "#D7BBFC",
  },
  {
    id: "placeholder-08",
    title: "Placeholder 08",
    category: "Art Direction",
    year: "2024",
    accentColor: "#A363F8",
  },
  {
    id: "placeholder-09",
    title: "Placeholder 09",
    category: "Prototype",
    year: "2024",
    accentColor: "#BD8FFA",
  },
].map((project, index) => ({
  ...project,
  poster: posterSvg({ ...project, index: index + 1 }),
}));

export default selectedWorks;
