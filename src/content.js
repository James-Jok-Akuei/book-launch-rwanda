// =============================================================
//  AFRICA WORLD BOOKS — BOOK LAUNCH  ·  CENTRAL CONTENT FILE (src/content.js)
//  Edit ONLY this file to update site content. All components read from here.
//  Most content is REAL. Items marked PLACEHOLDER need real assets/links later
//  (some book covers, book blurbs, and the video links).
// =============================================================

export const site = {
  publisher: "Africa World Books",
  publisherTagline: "Knowledge · Culture · Transformation",
  logo: "/awb-logo.png", // AWB logo (provided) — drop the file in /public
  credit: {
    builtBy: "James Jok Dut Akuei",
    email: "jokditakeerleek@gmail.com",
    website: "sudo-portfolios.com",
  },
  event: {
    kicker: "Book Launch",
    poster: "/poster.jpg", // event poster — drop in /public as poster.jpg (used as the hero backdrop)
    title: "The Unsung Heroes of the South Sudanese Struggle for Freedom",
    subtitle:
      "Celebrating Ezboni Mondiri Gwonza and the writers preserving South Sudan's story.",
    date: "27 June 2026",
    // NOTE: the poster says 10:00 AM, but the detailed program runs from ~1:00 PM to 6:35 PM.
    // Confirm whether 10:00 AM is arrival/registration and 1:00 PM the formal program.
    time: "10:00 AM",
    venue: "Hotel Chez Lando",
    city: "Kigali, Rwanda",
    partnersLine: "In Partnership for Knowledge, Culture & Transformation",
  },
};

export const about = {
  heading: "About Africa World Books",
  mission:
    "Africa World Books aims to inspire and empower the young people of South Sudan and " +
    "Africa through book reading, knowledge sharing, education, and innovation — nurturing " +
    "a generation of ethical leaders, learners, and changemakers who will build a peaceful, " +
    "prosperous, and united South Sudan and Africa at large.",
  intro: [
    "Africa World Books is an independent publisher devoted to the writers, histories, and " +
      "cultures of South Sudan and the wider African world. The house exists not only to " +
      "publish books, but to carry African stories to readers at home and across the diaspora.",
    "Alongside publishing, Africa World Books supports authors through editorial guidance, " +
      "translation, design, and print-on-demand, and gathers communities through launches, " +
      "workshops, and conferences — turning each book into an occasion.",
  ],
  community: {
    name: "Africa World Books Community Education Inc.",
    motto: "Education. Empowerment. Excellence.",
  },
  // ---- CEO (carousel + bio shown inside the About section) ----
  ceo: {
    name: "Elder Peter Lual", // PLACEHOLDER — confirm CEO's full name
    title: "Chief Executive Officer, Africa World Books",
    bio:
      "The Chief Executive Officer of Africa World Books, leading the house's mission to " +
      "gather writers, scholars, and communities around a single belief: that African stories " +
      "deserve to be published, preserved, and read at home and across the diaspora. " +
      "PLACEHOLDER — replace with the CEO's real biography.",
    // CEO / office gallery — photos in /public, listed here; they slide horizontally.
    images: [
      "/office.jpg",
      "/office1.jpg",
      "/office2.jpg",
      "/office3.jpg",
      "/office4.jpg",
      "/office5.jpg",
      "/office6.jpg",
      "/office7.jpg",
      "/office8.jpg",
      "/office9.jpg",
      "/office10.jpg",
      "/office11.jpg",
      "/office12.jpg",
      "/office13.jpg",
      "/office14.jpg",
      "/office15.jpg",
      "/office16.jpg",
      "/office17.jpg",
      "/office18.jpg",
      "/office19.jpg",
      "/office20.jpg",
      "/office21.jpg",
      "/office22.jpg",
      "/office23.jpg",
      "/office24.jpg",
      "/office25.jpg",
      "/office26.jpg",
      "/office27.jpg",
      "/office28.jpg",
      "/office29.jpg",
      "/office31.jpg",
      "/office32.jpg",
      "/office33.jpg",
      "/office34.jpg",
      "/office35.jpg",
      "/office36.jpg",
      "/office37.jpg",
      "/office38.jpg",
      "/office39.jpg",
      "/office40.jpg",
      "/office41.jpg",
      "/office42.jpg",
      "/office43.jpg",
      "/office44.jpg",
      "/office45.jpg",
      "/office46.jpg",
      "/office47.jpg",
      "/office48.jpg",
      "/office49.jpg",
      "/office50.jpg",
      "/office51.jpg",
      "/office52.jpg",
      "/office53.jpg",
      "/office54.jpg",
      "/office55.jpg",
      "/office56.jpg",
      "/office57.jpg",
      "/office58.jpg",
      "/office59.jpg",
      "/office60.jpg",
      "/office61.jpg",
      "/office62.jpg",
      "/office63.jpg",
      "/office64.jpg",
      "/office65.jpg",
      "/office66.jpg",
      "/office67.jpg",
      "/office69.jpg",
      "/office83.jpg",
      "/office84.jpg",
      "/office85.jpg",
      "/office87.jpg",
      "/office90.jpg",
      "/office92.jpg",
      "/office93.jpg",
      "/office98.jpg",
    ],
  },
};

// ---- The books being launched / featured ----
export const books = [
  {
    id: "b1",
    title: "Ezboni Mondiri Gwonza",
    subtitle: "The South Sudanese Nationalist and Politician",
    author: "Prof. Peter Obadayo Tingwa",
    authorId: "a1",
    year: "2025",
    cover: "/covers/ezboni-mondiri-gwonza.jpg", // cover shown on the poster — add to /public/covers
    blurb:
      "The centerpiece of today's launch: a biography of Ezboni Mondiri Gwonza, tracing the " +
      "life and legacy of a South Sudanese nationalist and politician. PLACEHOLDER — refine blurb.",
    featured: true,
  },
  {
    id: "b2",
    title: "Nuer Nation",
    subtitle: "Socio-economic and Cultural Change",
    author: "Rev. Gabriel Gai Riam (PhD)",
    authorId: "a2",
    year: "",
    cover: "/covers/nuer-nation.jpg", // PLACEHOLDER cover — drop real file here, else shows fallback
    blurb:
      "Written from an African perspective, this book positions Nuer cultural life and its " +
      "entanglement with a globalized world — deepening understanding of the Nuer and " +
      "strengthening cross-cultural relations. PLACEHOLDER — refine blurb.",
  },
  {
    id: "b3",
    title: "Violence & Trauma",
    subtitle: "South Sudanese Manhood and Family Crisis in the Diaspora",
    author: "Dr. Akuch Akuol",
    authorId: "a3",
    year: "",
    cover: "/covers/violence-and-trauma.jpg", // PLACEHOLDER cover — drop real file here, else shows fallback
    blurb:
      "A scholarly examination of violence, trauma, manhood, and family crisis among South " +
      "Sudanese communities in the diaspora. PLACEHOLDER — refine blurb.",
  },
  {
    id: "b4",
    title: "My Life From Camp to Kigali",
    subtitle: "",
    author: "Ruot Mawich Yak Deng",
    authorId: "",
    year: "",
    cover: "/covers/camp-to-kigali.jpg", // PLACEHOLDER cover — drop real file here, else shows fallback
    blurb: "An author's journey from camp to Kigali. PLACEHOLDER — refine blurb.",
  },
];

// ---- Africa World Books catalogue (cover images shown in the animated Books shelf) ----
// Every image whose filename starts with "book" — titles are part of the artwork.
export const catalog = [
  "/book.png",
  "/book1.jpg",
  "/book2.jpg",
  "/book3.jpg",
  "/book4.jpg",
  "/book5.jpg",
  "/book6.jpg",
  "/book7.jpg",
  "/book8.jpg",
  "/book9.jpg",
  "/book12.jpg",
  "/book13.png",
  "/book14.png",
  "/book16.jpg",
  "/book17.jpg",
  "/book19.jpg",
  "/book20.png",
  "/book22.jpg",
  "/book23.jpg",
  "/book24.jpg",
  "/book25.jpg",
  "/book26.jpg",
  "/book27.jpg",
  "/book28.jpg",
  "/book29.jpg",
  "/book33.jpg",
  "/book34.jpg",
  "/book40.jpg",
  "/book43.jpg",
  "/book44.jpg",
  "/book45.jpg",
  "/book48.jpg",
  "/book54.jpg",
  "/book56.jpg",
  "/book67.jpg",
  "/book70.jpg",
  "/book76.jpg",
  "/book78.jpg",
  "/book79.jpg",
  "/book80.jpg",
  "/book81.jpg",
  "/book82.jpg",
  "/book83.jpg",
  "/book84.jpg",
  "/book85.jpg",
  "/book86.jpg",
  "/book87.jpg",
  "/book89.jpg",
  "/book90.jpg",
  "/book91.jpg",
  "/book93.jpg",
  "/book94.jpg",
  "/book95.jpg",
  "/book96.jpg",
  "/book97.jpg",
  "/book99.jpg",
  "/book100.jpg",
  "/book234.jpg",
  "/book1000.jpg",
];

// ---- Featured authors (bio[] drives each /authors/:id detail page) ----
export const authors = [
  {
    id: "a1",
    name: "Prof. Peter Obadayo Tingwa",
    role: "Author — Ezboni Mondiri Gwonza: The South Sudanese Nationalist and Politician",
    photo: "/authors/peter-tingwa.jpg", // from the poster — add to /public/authors
    short:
      "Distinguished South Sudanese academic, author, and veteran international civil servant.",
    bio: [
      "Born in Lui in 1939, Professor Peter Obadayo Tingwa is among South Sudan's most " +
        "distinguished scholars. He holds a doctorate in Plant Physiology from the University " +
        "of California, Riverside, following a master's in Horticulture from the University of " +
        "Khartoum.",
      "He served the University of Juba as Dean of the College of Natural Resources and " +
        "Environmental Studies, as Acting Principal, and as Dean of the Graduate College, and " +
        "later chaired the Council of the University of Upper Nile.",
      "Across more than a decade with the United Nations, he held senior posts in Somalia, " +
        "Liberia, and Sierra Leone — including Chief Political Affairs Officer and Chief Civil " +
        "Affairs Officer — working in humanitarian affairs, demobilization, and peacebuilding.",
      "A prolific author and historian of South Sudan, his books include History of the Moru " +
        "Church of the Sudan, Women in Moru Society, and his latest work, Ezboni Mondiri " +
        "Gwonza: The South Sudanese Nationalist and Politician (2025), the centerpiece of " +
        "today's launch.",
    ],
  },
  {
    id: "a2",
    name: "Rev. Gabriel Gai Riam (PhD)",
    role: "Author — Nuer Nation: Socio-economic and Cultural Change",
    photo: "/authors/gabriel-riam.jpg", // from the poster — add to /public/authors
    short:
      "Scholar, pastor, and public servant shaped by indigenous Nuer life, Sudan, and the " +
      "Christian tradition.",
    bio: [
      "Rev. Dr. Gabriel Gai Riam is a scholar shaped by three worlds — indigenous Nuer life, " +
        "Arab Sudan, and the Western Christian tradition. He came to formal education as an " +
        "adult, having spent his childhood immersed in Nuer custom and tending livestock, and " +
        "rose to the highest levels of learning.",
      "His career has spanned executive and administrative service across the public and " +
        "private sectors: a long-serving local-government civil servant in Sudan and South " +
        "Sudan, a relief worker, a Pastor of the Presbyterian Church of South Sudan, a " +
        "Commissioner at Jonglei State headquarters, and Minister for Parliamentary and " +
        "Cabinet Affairs. He currently serves as Secretary General of the Nuer Leadership " +
        "Peace Forum.",
      "His earlier works include Christian–Muslim Relations in Sudan (2022) and his doctoral " +
        "thesis on the contribution of religious leaders to conflict resolution in Jonglei " +
        "State (2017). His new book, Nuer Nation: Socio-economic and Cultural Change, writes " +
        "the Nuer world from an African perspective.",
    ],
  },
  {
    id: "a3",
    name: "Dr. Akuch Akuol",
    role: "Author — Violence & Trauma: South Sudanese Manhood and Family Crisis in the Diaspora",
    photo: "/authors/akuch-akuol.jpg", // graduation portrait supplied — add to /public/authors
    short:
      "South Sudanese academic and writer working at the intersection of violence, trauma, " +
      "and repair; researcher and lecturer at Stellenbosch University.",
    bio: [
      "Dr. Akuch Kuol Anyieth is a South Sudanese academic and writer whose work lives at the " +
        "intersection of violence, trauma, reconciliation, and repair. She is a researcher and " +
        "lecturer at Stellenbosch University, where she studies how communities carry the " +
        "social, psychological, and political weight of conflict.",
      "Her research explores inter-communal violence in South Sudan and how histories of " +
        "conflict shape family life, belonging, and survival. She has published widely on " +
        "family and gendered violence, wartime violence, and the meeting points of law, " +
        "culture, and justice — at home and across the diaspora.",
      "Her work has been honored with the Excellence in Justice Award (Australia), the " +
        "Stellenbosch University Research Innovation Excellence Award (South Africa), and the " +
        "Humanitarian Leadership Award (South Sudan). Her book, Violence & Trauma: South " +
        "Sudanese Manhood and Family Crisis in the Diaspora, anchors her contribution to " +
        "today's launch.",
    ],
  },
];

// ---- Full event program / agenda (times as per the official program) ----
// Times are taken from the program sheet; some overlap slightly in the source.
export const program = [
  { time: "1:00 PM", title: "Arrival & Welcome", detail: "Welcoming of guests and students — reception & protocol team", section: "Opening" },
  { time: "1:25 PM", title: "Prayers & National Anthem", detail: "Opening prayers and the South Sudan National Anthem", section: "Opening" },
  { time: "1:40 PM", title: "Welcoming Remarks", detail: "Head of the Program Organizing Committee", section: "Opening" },
  { time: "1:45 PM", title: "Entertainment Interlude", detail: "DJ, MCs and singer", section: "Opening" },

  { time: "1:55 PM", title: "Greeting — Jieng Community in Rwanda", detail: "Simon Mabordit", section: "Representatives" },
  { time: "2:01 PM", title: "Greeting — Nuer Student Association in Rwanda", detail: "Rep. Chuol", section: "Representatives" },
  { time: "2:04 PM", title: "Greeting — Greater Equatoria Student Union in Rwanda", detail: "Tr. Martin Daniel", section: "Representatives" },

  { time: "2:10 PM", title: "Cultural Dance — Twic Mayardit Cultural Group", detail: "Dancers & DJ", section: "Cultural Performances" },
  { time: "2:20 PM", title: "Cultural Dance — Pojulu Cultural Group", detail: "Dancers & DJ", section: "Cultural Performances" },
  { time: "2:30 PM", title: "Cultural Dance — Ruweng Cultural Group", detail: "Dancers & DJ", section: "Cultural Performances" },

  { time: "2:40 PM", title: "Author Address — My Life From Camp to Kigali", detail: "Ruot Mawich Yak Deng", section: "Authors" },
  { time: "2:50 PM", title: "Cultural Dance — Nuer Cultural Group", detail: "Dancers & DJ", section: "Cultural Performances" },
  { time: "3:00 PM", title: "Author Address — Nuer Nation: Socio-economic and Cultural Change", detail: "Rev. Gabriel Gai Riam (PhD)", section: "Authors" },

  { time: "3:15 PM", title: "Greeting — Fashoda Student Association in Rwanda", detail: "Stephen", section: "Representatives" },
  { time: "3:25 PM", title: "Cultural Dance — Fashoda Cultural Group", detail: "Dancers & DJ", section: "Cultural Performances" },
  { time: "3:35 PM", title: "Cultural Dance — Bor Cultural Group", detail: "Dancers & DJ", section: "Cultural Performances" },

  { time: "3:45 PM", title: "Author Address — Violence & Trauma in the Diaspora", detail: "Dr. Akuch Akuol", section: "Authors" },
  { time: "4:00 PM", title: "Guest Address", detail: "Hon. Angok Akuien Chol", section: "Guests" },
  { time: "4:05 PM", title: "Cultural Dance — Moru Cultural Group", detail: "Dancers & DJ", section: "Cultural Performances" },

  { time: "4:15 PM", title: "Book Launch Session — Biography Reading", detail: "Reading of Prof. Peter Tingwa's biography (surprise speaker)", section: "Book Launch" },
  { time: "4:20 PM", title: "Acknowledgement & Author's Remarks", detail: "Prof. Peter Obadayo Tingwa — Author of Ezboni Mondiri Gwonza", section: "Book Launch" },
  { time: "4:50 PM", title: "Cultural Dance — Wau Cultural Group", detail: "Dancers & DJ", section: "Cultural Performances" },

  { time: "5:00 PM", title: "Short Break — Dinner & Refreshment", detail: "Cultural dance — Otuho Cultural Group", section: "Break" },
  { time: "5:00 PM", title: "One-on-One Panel Discussion", detail: "With Prof. Peter Obadayo Tingwa — moderated by Adut Loi Akok", section: "Book Launch" },
  { time: "5:20 PM", title: "Reflection — Daughter of Prof. Peter", detail: "Riya Peter Tingwa (Ms)", section: "Book Launch" },

  { time: "5:30 PM", title: "Cultural Dance — Bari Cultural Group", detail: "Dancers & DJ", section: "Cultural Performances" },
  { time: "5:40 PM", title: "Guest Address", detail: "Eng. Jacob Manyoun", section: "Guests" },
  { time: "5:45 PM", title: "Remarks — Veteran Journalist", detail: "Atem Simon", section: "Guests" },
  { time: "5:50 PM", title: "Cultural Dance — RAM", detail: "Dancers & DJ", section: "Cultural Performances" },

  { time: "6:05 PM", title: "Address — SSSAR", detail: "Deng Philip Biar", section: "Representatives" },
  { time: "6:10 PM", title: "Closing Remarks", detail: "Elder Peter Lual — CEO, Africa World Books", section: "Closing" },
  { time: "6:20 PM", title: "Guest Remarks", detail: "Dr. Lual A. Deng", section: "Closing" },
  { time: "6:30 PM", title: "Closing Prayers", detail: "Student / MCs", section: "Closing" },
  { time: "6:35 PM", title: "Book Signing & Photographs", detail: "Signing of books and group photographs — then departure", section: "Closing" },
];

// ---- Distinguished guests & speakers ----
// To show a photo, drop the file in /public/guests using the `photo` filename
// below (a JPG). If the file isn't there yet, a tidy initials placeholder shows.
export const guests = [
  { id: "g1", name: "Elder Peter Lual", title: "CEO, Africa World Books", photo: "/guests/peter-lual.jpg" },
  { id: "g2", name: "Dr. Lual A. Deng", title: "Distinguished Guest", photo: "/guests/lual-deng.jpg" },
  { id: "g3", name: "Hon. Angok Akuien Chol", title: "Distinguished Guest", photo: "/guests/angok-akuien-chol.jpg" },
  { id: "g4", name: "Eng. Jacob Manyoun", title: "Guest", photo: "/guests/jacob-manyoun.jpg" },
  { id: "g5", name: "Atem Simon", title: "Veteran Journalist", photo: "/guests/atem-simon.jpg" },
  { id: "g6", name: "Ruot Mawich Yak Deng", title: "Author — My Life From Camp to Kigali", photo: "/guests/ruot-mawich-yak-deng.jpg" },
  { id: "g7", name: "Riya Peter Tingwa (Ms)", title: "Daughter of Prof. Peter Tingwa", photo: "/guests/riya-peter-tingwa.jpg" },
  { id: "g8", name: "Adut Loi Akok", title: "Panel Moderator", photo: "/guests/adut-loi-akok.jpg" },
  { id: "g9", name: "Tr. Martin Daniel", title: "Greater Equatoria Student Union in Rwanda", photo: "/guests/martin-daniel.jpg" },
  { id: "g10", name: "Simon Mabordit", title: "Jieng Community in Rwanda", photo: "/guests/simon-mabordit.jpg" },
  { id: "g11", name: "Deng Philip Biar", title: "South Sudanese Student Association in Rwanda (SSSAR)", photo: "/guests/deng-philip-biar.jpg" },
];

// ---- Participating cultural groups (typographic listing) ----
export const culturalGroups = [
  "Twic Mayardit",
  "Pojulu",
  "Ruweng",
  "Nuer",
  "Fashoda",
  "Bor",
  "Moru",
  "Wau",
  "Otuho",
  "Bari",
  "RAM",
];

// ---- Videos (PLACEHOLDER — replace youtubeId with real links; add/remove freely) ----
export const videos = [
  { id: "v1", title: "PLACEHOLDER — video title", youtubeId: "dQw4w9WgXcQ" },
  { id: "v2", title: "PLACEHOLDER — video title", youtubeId: "dQw4w9WgXcQ" },
  { id: "v3", title: "PLACEHOLDER — video title", youtubeId: "dQw4w9WgXcQ" },
  { id: "v4", title: "PLACEHOLDER — video title", youtubeId: "dQw4w9WgXcQ" },
];

// ---- Partners ----
export const partners = [
  { name: "Africa World Books Community Education Inc.", note: "Education. Empowerment. Excellence." },
  { name: "RIAL Investment Enterprise and Tourism Ltd", note: "Investment · Enterprise · Tourism" },
  { name: "South Sudanese Student Association in Rwanda (SSSAR)", note: "The future lies in our hands" },
];

// ---- Contact / closing ----
export const contact = {
  closingLine: "Join us as we celebrate the storytellers preserving South Sudan's history.",
  signingNote: "Books will be available for signing and purchase following the program.",
  publisher: "Africa World Books",
  email: "PLACEHOLDER — contact email",
  phone: "PLACEHOLDER — contact phone",
};
