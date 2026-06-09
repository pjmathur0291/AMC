export interface Program {
  id: string;
  title: string;
  desc: string;
  bullets: string[];
  action: string;
  category: "UG" | "PG" | "UG-PG";
}

export interface Testimony {
  id: string;
  text: string;
  author: string;
  role: string;
  avatarSeed: string;
}

export interface BentoPillar {
  title: string;
  content: string;
  iconName: string;
  tag: string;
  badge: string;
}

export const HERO_DATA = {
  subtitle: "AMC Group Bangalore",
  title: "Bengaluru's Top College",
  description: "Study at AMC Bangalore — where expert faculty, a 50+ acre campus, holds NAAC A+ and NBA accreditation and 100% placement assistance come together to shape the careers of tomorrow's leaders.",
  courses: "MBA | M.Tech | MCA | B.E. / B.Tech | BCOM | BBA | BCA | BHM",
  cta: "Explore UG & PG Courses"
};

export const OUR_INSTITUTIONS = {
  subtitle: "Our Institutions",
  title: "Top College In Bangalore.",
  institutions: [
    {
      id: "amcec",
      name: "AMC Engineering College (AMCEC)",
      desc: "One of the top engineering colleges in Bangalore, AMCEC is affiliated to VTU and holds NAAC A+ and NBA accreditation. It offers a wide range of industry-ready B.E., M.Tech, MBA and Ph.D. programmes, taught by expert faculty in state-of-the-art labs.",
      action: "Explore Engineering Programs →"
    },
    {
      id: "amc-mgmt",
      name: "Administrative Management College (AMC)",
      desc: "One of the best BBA and BCom colleges in Bangalore since 1993. Affiliated to Bangalore University and NAAC accredited, AMC College offers career-focused UG and PG programmes across management, commerce, hospitality, and computer applications.",
      action: "Explore Management Programs →"
    }
  ]
};

export const PROGRAMS_HEADER = {
  subtitle: "Career Ready Programs.",
  title: "Built for the Industry.",
  description: "Explore UG & PG courses at AMC Group Bangalore"
};

export const PROGRAMS: Program[] = [
  {
    id: "be-btech",
    title: "B.E. / B.Tech — Engineering",
    desc: "4-year NBA-accredited engineering degree affiliated to VTU. Hands-on labs, expert faculty, 100% placement assistance.",
    bullets: [
      "Computer Science & Engineering",
      "CSE with Data Science",
      "CSE with Artificial Intelligence & Machine Learning",
      "AI & Machine Learning",
      "Electronics & Communication Engineering",
      "Aeronautical Engineering",
      "Electrical & Electronics Engineering",
      "Mechanical Engineering",
      "Civil Engineering"
    ],
    action: "Limited Seats | Apply Now →",
    category: "UG"
  },
  {
    id: "bba",
    title: "BBA — Business Administration",
    desc: "One of the top BBA colleges in Bangalore — 3-year industry-ready programme in business administration.",
    bullets: [
      "Finance & Accounting",
      "Marketing Management",
      "Human Resource Management",
      "International Business",
      "BBA with Business Analytics",
      "BBA with Aviation Management"
    ],
    action: "Limited Seats | Apply Now →",
    category: "UG"
  },
  {
    id: "bcom",
    title: "B.Com — Commerce",
    desc: "AMC is one of the best BCom colleges in Bangalore — rigorous 3-year programme in commerce and finance.",
    bullets: [
      "Financial Accounting",
      "Business Economics",
      "Taxation & Auditing",
      "Corporate Law",
      "B.Com with ACCA"
    ],
    action: "Limited Seats | Apply Now →",
    category: "UG"
  },
  {
    id: "bca",
    title: "BCA — Computer Applications",
    desc: "3-year career-focused BCA programme at AMC Bangalore preparing students for the tech industry.",
    bullets: [
      "Programming & Data Structures",
      "Web Development",
      "Database Management",
      "Cloud Computing",
      "AI/ML",
      "Data Science",
      "Cyber Security"
    ],
    action: "Limited Seats | Apply Now →",
    category: "UG"
  },
  {
    id: "bhm",
    title: "BHM — Hotel Management",
    desc: "Industry-ready Hotel Management programme with practical training in hospitality and front office operations.",
    bullets: [
      "Food & Beverage Production",
      "Front Office Management",
      "Housekeeping Operations",
      "Hospitality Marketing"
    ],
    action: "Limited Seats | Apply Now →",
    category: "UG"
  },
  {
    id: "bsc-biotech",
    title: "B.Sc. — Biotechnology",
    desc: "Industry-ready science programme focused on emerging disciplines.",
    bullets: [
      "Biotechnology"
    ],
    action: "Limited Seats | Apply Now →",
    category: "UG"
  },
  {
    id: "msc-biotech",
    title: "M.Sc. — Biotechnology",
    desc: "Industry-ready master's science programme focused on advanced global research disciplines.",
    bullets: [
      "Biotechnology"
    ],
    action: "Limited Seats | Apply Now →",
    category: "PG"
  },
  {
    id: "pg-courses",
    title: "MBA / M.Tech / MCA — Postgraduate Courses",
    desc: "Postgraduate programmes in management, engineering, and computer applications — with expert faculty and strong industry linkages.",
    bullets: [
      "MBA — Finance / HR / Marketing / Operations",
      "M.Tech. Computer Science & Engineering",
      "M.Tech. VLSI & Embedded Systems",
      "M.Tech. Machine Design",
      "M.Tech. Data Science",
      "M.Tech. Digital Electronics and Communication Engineering",
      "MCA — Master of Computer Applications"
    ],
    action: "Limited Seats | Apply Now →",
    category: "PG"
  }
];

export const WHY_STUDY = {
  title: "Why Study At AMC Bangalore",
  subtitles: [
    "Learn From Expert Faculty.",
    "Launch a Real Career."
  ],
  pillars: [
    {
      title: "Learn From Expert Faculty",
      content: "Highly qualified, industry-experienced faculty members delivering outcome-based education across all AMC UG & PG courses.",
      iconName: "GraduationCap",
      tag: "Expert Pedagogy",
      badge: "50+ Domain Specs"
    },
    {
      title: "100% Placement Assistance",
      content: "Dedicated placement cell, year-round training, mock interviews, and campus drives with 140+ top recruiting companies.",
      iconName: "Briefcase",
      tag: "Hiring Success",
      badge: "140+ Recruiters"
    },
    {
      title: "Featured among Top 5 Engineering Colleges",
      content: "A testament to our relentless pursuit of scholastic rigor representing premium pedagogy frameworks.",
      iconName: "Award",
      tag: "Recognized Ranking",
      badge: "Accredited A+"
    },
    {
      title: "50+ Acre Campus Hub",
      content: "Smart classrooms, research labs, digital library, hostel, sports complex, TCS iON centre — all on one green campus in Bangalore.",
      iconName: "MapPin",
      tag: "Lush Infrastructure",
      badge: "State-of-the-art"
    }
  ]
};

export const PLACEMENTS_SECTION = {
  subtitle: "Placements — 100% Placement Assistance",
  title: "Your Career Starts at AMC Bangalore.",
  body: "AMC Group Bangalore's dedicated placement cell bridges the gap between academics and industry — ensuring every student who studies at AMC Bangalore is job-ready on graduation day.",
  stats: [
    { label: "Placement Rate", value: "95%" },
    { label: "Hiring Companies", value: "140+" },
    { label: "Highest Package", value: "₹33 LPA" },
    { label: "Average Package", value: "₹5–6 LPA" }
  ],
  recruiters: [
    { name: "Recruiter 1", logo: "https://i.postimg.cc/cJzG0DQC/image-8.png" },
    { name: "Recruiter 2", logo: "https://i.postimg.cc/pdSMR0Dm/image-8-3.png" },
    { name: "Recruiter 3", logo: "https://i.postimg.cc/QMCrLLWZ/image-8-6.png" },
    { name: "Recruiter 4", logo: "https://i.postimg.cc/wBrYgWhJ/image-8-5.png" },
    { name: "Recruiter 5", logo: "https://i.postimg.cc/TPsvfkrp/image-8-1.png" },
    { name: "Recruiter 6", logo: "https://i.postimg.cc/YSPBMX14/image-8-4.png" },
    { name: "Recruiter 7", logo: "https://i.postimg.cc/Pq7nT6mp/image-8-2.png" }
  ]
};

export const ADMISSIONS_SECTION = {
  title: "Admissions — AMC Admissions Open 2026",
  steps: [
    {
      number: 1,
      title: "Register Online",
      desc: "Visit apply.amcgroup.edu.in/register & create your account"
    },
    {
      number: 2,
      title: "Fill Application Form",
      desc: "Enter academic & personal details and submit"
    },
    {
      number: 3,
      title: "Document Verification",
      desc: "Submit academic documents at AMC admissions office"
    },
    {
      number: 4,
      title: "Confirm Your Seat",
      desc: "Pay fee & confirm admission. Scholarships available for merit students"
    },
    {
      number: 5,
      title: "Begin Your Journey",
      desc: "Attend orientation & start at AMC — Bengaluru's top college"
    }
  ]
};

export const STUDENT_VOICES = {
  title: "Student Voices",
  subtitle: "What Students Say About AMC Group Bangalore",
  testimonials: [
    {
      id: "test-1",
      text: "AMC gave me the practical exposure I needed to enter the tech industry.",
      author: "Aditya Hegde",
      role: "BTECH IN COMPUTER SCIENCE ENGINEERING",
      batch: "Batch of 2024"
    },
    {
      id: "test-2",
      text: "The projects and labs helped me understand engineering beyond textbooks.",
      author: "Meghana R.",
      role: "BTECH IN ARTIFICIAL INTELLIGENCE & MACHINE LEARNING",
      batch: "Batch of 2023"
    },
    {
      id: "test-3",
      text: "The environment supports both learning and growth.",
      author: "Rohan Kumar",
      role: "MTECH IN VLSI & EMBEDDED SYSTEMS",
      batch: "Batch of 2024"
    }
  ]
};

export const OUTRO_SECTION = {
  title1: "AMC Admissions Open 2026.",
  title2: "Don't Miss Your Seat.",
  desc: "Study at AMC Bangalore — one of the top colleges in Bangalore for UG & PG courses. Limited seats remaining for 2026–27.",
  actions: {
    apply: "Apply Now – AMC Admissions 2026",
    explore: "Explore UG & PG Courses"
  }
};

export interface StudentQuote {
  quote: string;
  author: string;
  course: string;
  year: string;
  avatarSeed?: string;
}

export const STUDENT_QUOTES: StudentQuote[] = [
  {
    quote: "“AMC gave me the practical exposure I needed to enter the tech industry.”",
    author: "Aditya Hegde",
    course: "BTech in Computer Science Engineering",
    year: "Batch of 2024",
    avatarSeed: "aditya"
  },
  {
    quote: "“The projects and labs helped me understand engineering beyond textbooks.”",
    author: "Meghana R.",
    course: "BTech in Artificial Intelligence & Machine Learning",
    year: "Batch of 2023",
    avatarSeed: "meghana"
  },
  {
    quote: "“The environment supports both learning and growth.”",
    author: "Rohan Kumar",
    course: "MTech in VLSI & Embedded Systems",
    year: "Batch of 2024",
    avatarSeed: "rohan"
  }
];

