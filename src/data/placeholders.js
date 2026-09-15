// ─────────────────────────────────────────────
//  PLACEHOLDER DATA
//  Replace image paths with real assets in /public/images/
//  Replace video URLs with real embeds (Vimeo / YouTube unlisted)
// ─────────────────────────────────────────────

// `section` drives the Film / Theater split — single source of data for both sections.
// Other fields (role, year, description, type) are preserved for future restoration
// even though the current editorial design only surfaces image + title.
export const FEATURED_PROJECTS = [
  {
    id: 1,
    title: "Mishpucha",
    section: "Film",
    type: "Film",
    role: "Lead",
    year: "2024",
    description: "A story of family, loyalty, and what we carry without choosing to.",
    imageSrc: "/images/mishpucha.jpg",
    aspect: "landscape",
  },
  {
    id: 2,
    title: "Being Here",
    section: "Film",
    type: "Film",
    role: "Lead",
    year: "2023",
    description: "An intimate portrait of presence and the cost of staying.",
    imageSrc: "/images/being-here.jpg",
    aspect: "landscape",
  },
  {
    id: 3,
    title: "Warm Canto",
    section: "Film",
    type: "Film",
    role: "Lead",
    year: "2023",
    description: "Sun-soaked and searching — a quiet summer film about connection.",
    imageSrc: "/images/warmcanto.jpg",
    aspect: "landscape",
  },
  {
    id: 4,
    title: "The Longest Hour",
    section: "Film",
    type: "Feature Film",
    role: "Lead — Clara",
    year: "2024–25",
    description: "A psychological drama exploring grief and isolation. Currently in post-production.",
    imageSrc: null,
    aspect: "square",
  },
  {
    id: 5,
    title: "Everything Still",
    section: "Theater",
    type: "Theatre",
    role: "Lead — Margot",
    year: "2023",
    description: "Off-Broadway at the Atlantic Theater Company.",
    imageSrc: null,
    aspect: "portrait",
  },
  {
    id: 6,
    title: "A Quiet Violence",
    section: "Film",
    type: "Short Film",
    role: "Lead — Anna",
    year: "2022",
    description: "Winner, Best Actress — Brooklyn Horror Film Festival.",
    imageSrc: null,
    aspect: "landscape",
  },
]

export const GALLERY_ITEMS = [
  // Headshots
  { id: 1,  category: "Headshots",   imageSrc: "/images/hero.jpg",       alt: "Portrait, 2024",             height: "tall" },
  { id: 2,  category: "Headshots",   imageSrc: null,                     alt: "Headshot — Outdoor, 2024",   height: "medium" },
  { id: 3,  category: "Headshots",   imageSrc: null,                     alt: "Headshot — Profile, 2023",   height: "tall" },
  // Film Stills
  { id: 4,  category: "Film Stills", imageSrc: "/images/mishpucha.jpg",  alt: "Mishpucha, 2024",            height: "medium" },
  { id: 5,  category: "Film Stills", imageSrc: "/images/being-here.jpg", alt: "Being Here, 2023",           height: "tall" },
  { id: 6,  category: "Film Stills", imageSrc: null,                     alt: "A Quiet Violence, 2022",     height: "medium" },
  // Stage
  { id: 7,  category: "Stage",       imageSrc: null,                     alt: "Everything Still, ATCo 2023", height: "tall" },
  { id: 8,  category: "Stage",       imageSrc: null,                     alt: "Workshop Reading, 2022",     height: "medium" },
  // BTS
  { id: 9,  category: "BTS",         imageSrc: "/images/warmcanto.jpg",  alt: "On set — Warm Canto",        height: "medium" },
  { id: 10, category: "BTS",         imageSrc: null,                     alt: "Rehearsal — Everything Still",height: "tall" },
  // Video
  { id: 11, category: "Video",       imageSrc: null,                     alt: "Scene — The Longest Hour",   height: "medium" },
  { id: 12, category: "Video",       imageSrc: null,                     alt: "Scene — Being Here",         height: "medium" },
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
    value: "kristiana.priscantelli@gmail.com",
    href: "mailto:kristiana.priscantelli@gmail.com",
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

export const TICKER_CREDITS = [
  "TRIBECA FILM FESTIVAL — 2025",
  "ATLANTIC THEATER COMPANY",
  "BROOKLYN HORROR FILM FESTIVAL — BEST ACTRESS NOM.",
  "OFF-BROADWAY",
  "STEPPENWOLF THEATRE — RESIDENCY",
  "NEW YORK · FILM · TELEVISION · THEATRE",
]

export const PRESS_QUOTE = {
  quote: "One to watch.",
  source: "The Interval",
  context: "Featured in emerging performers roundup, 2024",
}

export const RESUME_PDF_URL = "/Kristiana-Priscantelli-Resume.pdf"
export const RESUME_STATUS = "SAG-Eligible"

// Structured as a list so additional testimonials can be added later without
// changing the component.
export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Kristiana's performance brings out the irrationality of a woman who will stop at nothing. She's brash and in your face and trusts her instincts more than any objective truth. Every feeling seems like a fact.",
    attribution: "Travis Frick",
    context: "director of 7734 Sunset Place",
  },
]

export const CREDITS = [
  // Film
  { category: "Film", title: "7734 Sunset Place",        tier: "Lead",       format: "Feature",                        director: "Travis Frick" },
  { category: "Film", title: "A Basket of Apples",       tier: "Supporting", format: "Feature — NYU MFA Thesis",       director: "Yeung Tung" },
  { category: "Film", title: "www.RachelOrmont.com",     tier: "Day Player", format: "Feature",                        director: "Peter Vack" },
  { category: "Film", title: "Americatronic",            tier: "Day Player", format: "Feature",                        director: "Melanie de Souza" },
  { category: "Film", title: "Dark World Children",      tier: "Supporting", format: "Short — NYU MFA Thesis",         director: "Reuben Hamlyn" },
  { category: "Film", title: "Gestations",               tier: "Supporting", format: "Short — NYU MFA Thesis",         director: "Chris Del Rio" },
  { category: "Film", title: "The Wrong Idea",           tier: "Supporting", format: "Short — NYU MFA Thesis",         director: "Sophia B. Holmes" },
  { category: "Film", title: "Bag Lady",                 tier: "Lead",       format: "Short",                          director: "Caitie Karasik" },
  { category: "Film", title: "Being Here",                tier: "Lead",       format: "Short",                          director: "Katie Colwell" },
  { category: "Film", title: "Brace Yourself",           tier: "Lead",       format: "Short",                          director: "Archit Upadhyay" },
  { category: "Film", title: "Fruitless in the Farmland", tier: "Lead",       format: "Short",                          director: "Lindsey Formes" },
  { category: "Film", title: "Immeasurable Hyperdontia", tier: "Lead",       format: "Short",                          director: "Paul DeSilva" },
  { category: "Film", title: "Warm Canto",                tier: "Lead",       format: "Short",                          director: "Leonardo Gastel" },
  { category: "Film", title: "When the Night Falls",     tier: "Lead",       format: "Short",                          director: "Yue Ma" },
  { category: "Film", title: "Blue Cardinals",           tier: "Supporting", format: "Short",                          director: "Bilal Hefner" },
  { category: "Film", title: "Mishpucha",                 tier: "Supporting", format: "Short",                          director: "Andi Avery" },
  // Theater
  { category: "Theater", title: "Cimino's Defeat", role: "Cindy Lee / Penny", format: "Adult Film Theater Company" },
  { category: "Theater", title: "Action",          role: "Lupe",              format: "Madame George Ensemble Works" },
  { category: "Theater", title: "The Do-Gooders",  role: "Beth",              format: "Murmuration Thtr Co." },
  { category: "Theater", title: "Hamlet",          role: "Ophelia",           format: "North Corner Thtr Co." },
  // Voiceover
  { category: "Voiceover", title: "Netflix Queue Social", role: "Narrator",     format: "Netflix" },
  { category: "Voiceover", title: "Rimowa",               role: "Photo Agent", format: "Alto Visuals" },
  // Commercial
  { category: "Commercial", title: "Society 6", format: "Mellow Mako", note: "Conflicts available upon request" },
  // Music Video
  { category: "Music Video", title: "John Maus", format: "Gummy Films" },
]

export const CREDIT_CATEGORIES = ["All", "Film", "Theater", "Voiceover", "Commercial", "Music Video"]

export const EDUCATION = "NYU Gallatin BA — Acting and the Creative Process"

export const TRAINING = [
  { discipline: "Conservatory", detail: "Terry Knickerbocker Conservatory — Terry Knickerbocker, Julia Crockett (movement)" },
  { discipline: "Scene Study",  detail: "Pamela Scott, Peter Vack, Nathan Flower" },
  { discipline: "On-Camera",    detail: "Eric Reis, Jon Shear, David Garelik (ongoing), Kathleen Baggott, John Wills Martin" },
  { discipline: "Improv",       detail: "The PIT — Levels 1 & 2, with Patrick McCartney" },
]

export const SKILLS = [
  "RYT Yoga Instructor", "Tennis", "Competitive Swimming", "Diving",
  "Volleyball", "Biking", "US Passport", "Driver's License",
]

export const DIALECTS = ["Australian", "British", "French", "Irish", "Italian", "Russian", "Southern U.S."]

// Main reel — Vimeo player embed URL (not the public vimeo.com share page URL).
// The `h` param is the video's privacy hash, required because it's an unlisted video —
// taken from the twitter:player meta tag on the public vimeo.com/1147457236 page.
// Vimeo also restricts embedding to domains the client allowlists in the video's
// privacy settings, so this will show a "can't be played here" error on any domain
// (including localhost) that hasn't been added there — see report for details.
export const REEL = {
  title: "Reel",
  year: "2024–2025",
  embedSrc: "https://player.vimeo.com/video/1147457236?h=b58b50dbf4",
}
