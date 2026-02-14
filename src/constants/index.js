const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "", label: "Years of Experience" },
  { value: 30, suffix: "+", label: "Completed Projects" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Throughout my 13 years of being an NCO, I never throught I'd actually see an enlisted soldier go out this far to create systems to improve the workflow of a Battalion...",
    imgPath: "/images/roksb_logo.png",
    logoPath: "/images/roksb_logo.png",
    title: "Independent Software Development Contribution 1",
    date: "November 2025 - January 2026",
    responsibilities: [
      "Built a fullstack application using Next.js, Appwrite, MongoDB, and CryptoJS to automate visitor clearance procedures.",
      "Used Server-Sent Events (SSE) to deliver real-time dashboard updates to authorized personnel.",
      "Reduced clearance communication time over radio by 80%, improving operational efficiency.",
    ],
  },
  {
    review: "SGT Kim's contribution to S-3 will not go unnoticed. His application greatly reduced the work for our department and for other officers and NCOs.",
    imgPath: "/images/roksb_logo.png",
    logoPath: "/images/roksb_logo.png",
    title: "Independent Software Development Contribution 2",
    date: "October 2024 - March 2025",
    responsibilities: [
      "Built a secure, real-time collaborative document editing system to replace outdated manual file transfers.",
      "Implemented multi-user synced editing, improving communication speed and reducing document handling delays across teams.",
      "Used modern fullstack technologies to improve reliability and reduce human error in mission-critical workflows.",
    ],
  },
  {
    review: "Kim showed great commitment to his job and studied independently in order to deliver precise and accruate interpretations. He bridged the gap between the US and the ROK Battalion. He not only translated well, but he went out to improve the relationship between the two leaderships. He brought us closer to the 'Ironclad ROKUS Alliance.'",
    imgPath: "/images/uncsb_logo.png",
    logoPath: "/images/uncsb_logo.png",
    title: "UN Command Security Battalion - JSA: Translator Enlisted",
    date: "August 2024 - February 2026",
    responsibilities: [
      "Served as communication link between ROK and US Battalions at UNCSB-JSA and the Neutral Nations Supervisory Commissions, translating, documenting, and relaying critical operational information between international command units.",
      "Coordinated cross-national collaboration for joint operations and high-level briefings in high-pressure, time-sensitive environments",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "MAJ Lee - ROKSB XO",
    // mentions: "@estherhoward",
    review:
      "Kim identified a major coordination bottleneck in our unit and independently built a real-time document system to resolve it. He designed the architecture, access controls, and deployment end-to-end. The solution eliminated hours of daily manual work and improved information accuracy across 40–50 personnel.",
    imgPath: "/images/roksb_logo.png",
  },
  {
    name: "MAJ Lee, ROKSB S3 OIC",
    // mentions: "@wadewarren",
    review:
      "In a resource-constrained military environment, Kim delivered a production-ready system that replaced a fragile manual workflow. He implemented structured permissions and centralized updates, significantly reducing errors and operational risk. His execution was both practical and scalable.",
    imgPath: "/images/roksb_logo.png",
  },
  {
    name: "CPT Bruce - UNCSB S3 Officer",
    // mentions: "@guyhawkins",
    review:
      "During briefings and operational coordination, Luy remained composed while interpreting complex discussions in real time. Even under urgency, he maintained clarity and professionalism. His presence helped facilitate smooth communication across ranks and responsibilities.",
    imgPath: "/images/uncsb_logo.png",
  },
  {
    name: "MAJ Terry - UNCSB S3 OIC",
    // mentions: "@marvinmckinney",
    review:
      "Beyond literal translation, Kim demonstrated strong cultural awareness and contextual judgment. He ensured that tone, intent, and hierarchy were properly conveyed, which was essential in a structured military environment. His interpretations reflected both linguistic and situational understanding.",
    imgPath: "/images/uncsb_logo.png",
  },
  {
    name: "MSG Woo - ROKSB Security Platoon Sergeant",
    // mentions: "@floydmiles",
    review:
      "Rather than accept inefficiency, Kim redesigned the whole entry clearance system. He identified the patterns in the clearance method and completely systematized it. The time savings and workflow improvements were immediate.",
    imgPath: "/images/roksb_logo.png",
  },
  {
    name: "LCDR Creen - UNCMAC JDO",
    // mentions: "@albertflores",
    review:
      "In environments where miscommunication could have real consequences, Luy consistently performed with discipline and accountability. He prepared thoroughly, listened attentively, and ensured that all parties were aligned. He was a dependable bridge between language and action.",
    imgPath: "/images/uncmac_logo.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/luykim427/",
    imgPath: "/images/insta.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/luy-geonhwi-kim-963868203/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};