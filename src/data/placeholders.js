// ─────────────────────────────────────────────
//  PLACEHOLDER DATA
//  Replace image paths with real assets in /public/images/
//  Replace video URLs with real embeds (Vimeo / YouTube unlisted)
// ─────────────────────────────────────────────

export const FEATURED_PROJECTS = [
  {
    id: 1,
    title: "The Longest Hour",
    type: "Feature Film",
    role: "Lead — Clara",
    year: "2024",
    description: "A psychological drama exploring grief and isolation in contemporary New York.",
    // imageSrc: "/images/projects/the-longest-hour.jpg",
    imageSrc: null,
    aspect: "landscape", // landscape | portrait | square
  },
  {
    id: 2,
    title: "Bitter Residue",
    type: "Short Film",
    role: "Supporting — Nadia",
    year: "2023",
    description: "Official selection, Tribeca Film Festival 2023.",
    // imageSrc: "/images/projects/bitter-residue.jpg",
    imageSrc: null,
    aspect: "portrait",
  },
  {
    id: 3,
    title: "Everything Still",
    type: "Theatre",
    role: "Lead — Margot",
    year: "2023",
    description: "Off-Broadway production at the Atlantic Theater Company.",
    // imageSrc: "/images/projects/everything-still.jpg",
    imageSrc: null,
    aspect: "landscape",
  },
  {
    id: 4,
    title: "Undertow",
    type: "TV — Pilot",
    role: "Recurring — Detective Reeves",
    year: "2022",
    description: "Crime drama pilot optioned by HBO.",
    // imageSrc: "/images/projects/undertow.jpg",
    imageSrc: null,
    aspect: "square",
  },
  {
    id: 5,
    title: "A Quiet Violence",
    type: "Short Film",
    role: "Lead — Anna",
    year: "2022",
    description: "Winner, Best Actress — Brooklyn Horror Film Festival.",
    // imageSrc: "/images/projects/a-quiet-violence.jpg",
    imageSrc: null,
    aspect: "portrait",
  },
  {
    id: 6,
    title: "Glass Animals",
    type: "Web Series",
    role: "Lead — Elise",
    year: "2021",
    description: "4-episode psychological thriller series.",
    // imageSrc: "/images/projects/glass-animals.jpg",
    imageSrc: null,
    aspect: "landscape",
  },
]

export const GALLERY_ITEMS = [
  // Headshots
  { id: 1,  category: "Headshots",   imageSrc: null, alt: "Headshot — Studio, 2024",    height: "tall" },
  { id: 2,  category: "Headshots",   imageSrc: null, alt: "Headshot — Outdoor, 2024",   height: "medium" },
  { id: 3,  category: "Headshots",   imageSrc: null, alt: "Headshot — Profile, 2023",   height: "tall" },
  // Film Stills
  { id: 4,  category: "Film Stills", imageSrc: null, alt: "The Longest Hour, 2024",      height: "medium" },
  { id: 5,  category: "Film Stills", imageSrc: null, alt: "A Quiet Violence, 2022",      height: "tall" },
  { id: 6,  category: "Film Stills", imageSrc: null, alt: "Bitter Residue, 2023",        height: "medium" },
  // Stage
  { id: 7,  category: "Stage",       imageSrc: null, alt: "Everything Still, ATCo 2023", height: "tall" },
  { id: 8,  category: "Stage",       imageSrc: null, alt: "Workshop Reading, 2022",      height: "medium" },
  // BTS
  { id: 9,  category: "BTS",         imageSrc: null, alt: "On set — The Longest Hour",   height: "medium" },
  { id: 10, category: "BTS",         imageSrc: null, alt: "Rehearsal — Everything Still",height: "tall" },
  // Video
  { id: 11, category: "Video",       imageSrc: null, alt: "Scene — Undertow Pilot",      height: "medium" },
  { id: 12, category: "Video",       imageSrc: null, alt: "Scene — Glass Animals Ep. 2", height: "medium" },
]

export const GALLERY_CATEGORIES = ["All", "Headshots", "Film Stills", "Stage", "BTS", "Video"]

export const RECENT_ITEMS = [
  {
    id: 1,
    date: "Apr 2025",
    type: "Festival",
    title: "Bitter Residue screens at Tribeca",
    detail: "Official selection, short film program",
  },
  {
    id: 2,
    date: "Mar 2025",
    type: "Performance",
    title: "Everything Still — final performances",
    detail: "Atlantic Theater Company, New York",
  },
  {
    id: 3,
    date: "Jan 2025",
    type: "Film",
    title: "Wrapped production on The Longest Hour",
    detail: "Feature film, post-production",
  },
  {
    id: 4,
    date: "Oct 2024",
    type: "Award",
    title: "Best Actress nomination — BFF",
    detail: "Brooklyn Horror Film Festival, A Quiet Violence",
  },
  {
    id: 5,
    date: "Aug 2024",
    type: "Press",
    title: "\"One to watch\" — The Interval",
    detail: "Featured in emerging performers roundup",
  },
  {
    id: 6,
    date: "Jun 2024",
    type: "Workshop",
    title: "Steppenwolf New Plays workshop",
    detail: "Residency participant, Chicago",
  },
]

export const CONTACT_LINKS = [
  {
    label: "Email",
    value: "representation@example.com",  // Replace with real email or agent contact
    href: "mailto:representation@example.com",
    external: false,
  },
  {
    label: "IMDb",
    value: "imdb.com/name/kristiana-priscantelli",
    href: "https://www.imdb.com/name/nm0000000/", // Replace with real IMDb ID
    external: true,
  },
  {
    label: "Instagram",
    value: "@kristianapriscantelli",
    href: "https://www.instagram.com/kristianapriscantelli/",
    external: true,
  },
  {
    label: "Actors Access",
    value: "Actors Access Profile",
    href: "https://actorsaccess.com/",  // Replace with real profile URL
    external: true,
  },
  {
    label: "Backstage",
    value: "Backstage Profile",
    href: "https://www.backstage.com/",  // Replace with real profile URL
    external: true,
  },
  {
    label: "Casting Networks",
    value: "Casting Networks Profile",
    href: "https://app.castingnetworks.com/",  // Replace with real profile URL
    external: true,
  },
]

// Main reel — replace src with real Vimeo/YouTube unlisted URL
export const REEL = {
  title: "Demo Reel",
  year: "2024–2025",
  // embedSrc: "https://player.vimeo.com/video/YOUR_VIMEO_ID?background=0&autoplay=0",
  embedSrc: null,
}

export const SCENE_CLIPS = [
  { id: 1, title: "Dramatic Scene — The Longest Hour", embedSrc: null },
  { id: 2, title: "Comedy Scene — Glass Animals",      embedSrc: null },
  { id: 3, title: "Physical Scene — Everything Still", embedSrc: null },
]
