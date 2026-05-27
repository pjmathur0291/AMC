import { CareerPath, StudentQuote, StudentProject } from './types';

// Exact Career Paths organized by Course and Degree
export const CAREER_PATHS: CareerPath[] = [
  // B.Tech Paths
  { title: "Software Development & Full Stack Engineer", category: "Computer Science Engineering", degree: "B.Tech" },
  { title: "Cloud Architect & DevOps Engineer", category: "Computer Science Engineering", degree: "B.Tech" },
  { title: "Cybersecurity Analyst", category: "Computer Science Engineering", degree: "B.Tech" },
  
  { title: "AI & Machine Learning Engineer", category: "Artificial Intelligence & Machine Learning", degree: "B.Tech" },
  { title: "Generative AI Developer", category: "Artificial Intelligence & Machine Learning", degree: "B.Tech" },
  { title: "NLP Engineer", category: "Artificial Intelligence & Machine Learning", degree: "B.Tech" },
  
  { title: "AI Systems Architect", category: "CSE + AI/ML", degree: "B.Tech" },
  { title: "Machine Learning Solutions Engineer", category: "CSE + AI/ML", degree: "B.Tech" },
  { title: "AI Product Developer", category: "CSE + AI/ML", degree: "B.Tech" },
  
  { title: "Data Analytics & Business Intelligence", category: "Data Science", degree: "B.Tech" },
  { title: "Big Data Engineer", category: "Data Science", degree: "B.Tech" },
  { title: "Data Scientist", category: "Data Science", degree: "B.Tech" },
  
  { title: "Embedded Systems Developer", category: "Electronics & Communication", degree: "B.Tech" },
  { title: "VLSI Design Engineer", category: "Electronics & Communication", degree: "B.Tech" },
  { title: "IoT Solutions Architect", category: "Electronics & Communication", degree: "B.Tech" },

  { title: "Automotive & EV Engineer", category: "Mechanical Engineering", degree: "B.Tech" },
  { title: "Robotics & Automation Engineer", category: "Mechanical Engineering", degree: "B.Tech" },
  { title: "Manufacturing Systems Engineer", category: "Mechanical Engineering", degree: "B.Tech" },

  { title: "Structural Design Engineer", category: "Civil Engineering", degree: "B.Tech" },
  { title: "Smart City Infrastructure Planner", category: "Civil Engineering", degree: "B.Tech" },
  { title: "Construction Project Manager", category: "Civil Engineering", degree: "B.Tech" },

  { title: "Power Systems Engineer", category: "Electrical & Electronics", degree: "B.Tech" },
  { title: "Renewable Energy Consultant", category: "Electrical & Electronics", degree: "B.Tech" },
  { title: "Smart Grid Technologist", category: "Electrical & Electronics", degree: "B.Tech" },

  { title: "Aircraft Design Engineer", category: "Aeronautical Engineering", degree: "B.Tech" },
  { title: "Aerospace Research Scientist", category: "Aeronautical Engineering", degree: "B.Tech" },
  { title: "Avionics Systems Engineer", category: "Aeronautical Engineering", degree: "B.Tech" },

  // M.Tech Paths
  { title: "Advanced Software Architect", category: "Advance Computer Science Engineering", degree: "M.Tech" },
  { title: "System Software Researcher", category: "Advance Computer Science Engineering", degree: "M.Tech" },

  { title: "Senior VLSI Engineer", category: "VLSI & Embedded Systems", degree: "M.Tech" },
  { title: "Embedded Firmware Specialist", category: "VLSI & Embedded Systems", degree: "M.Tech" },

  { title: "Lead Data Scientist", category: "Data Science and Research Methodology", degree: "M.Tech" },
  { title: "Quantitative Analyst", category: "Data Science and Research Methodology", degree: "M.Tech" },

  { title: "Digital Signal Processing Engineer", category: "Digital Electronics", degree: "M.Tech" },
  { title: "Hardware Systems Architect", category: "Digital Electronics", degree: "M.Tech" },

  { title: "AI Research Scientist", category: "Machine Design, AI & Machine Learning", degree: "M.Tech" },
  { title: "Mechatronics Lead Engineer", category: "Machine Design, AI & Machine Learning", degree: "M.Tech" }
];

// Top Recruiters from Page 3 of PDF
export const TOP_RECRUITERS = [
  "Infosys",
  "Unisys",
  "Flipkart",
  "Indiabulls",
  "iGate"
];

// Accreditations from Page 3 of PDF
export const ACCREDITATIONS = [
  "All India Council for Technical Education (AICTE)",
  "Visvesvaraya Technological University (VTU)",
  "Bangalore University (BU)",
  "National Assessment and Accreditation Council (NAAC)",
  "National Board of Accreditation (NBA)"
];

// BTech Courses from Page 4 of PDF
export const BTECH_COURSES = [
  "Computer Science Engineering",
  "Electronics & Communication",
  "Mechanical Engineering",
  "Civil Engineering",
  "Electrical & Electronics",
  "Aeronautical Engineering",
  "Artificial Intelligence & Machine Learning",
  "Data Science",
  "CSE + AI/ML"
];

// BTech What You Learn
export const BTECH_WHAT_YOU_LEARN = [
  "Programming and core engineering fundamentals",
  "Practical lab work and projects",
  "Industry-relevant tools and skills"
];

// BTech Career Paths
export const BTECH_CAREER_PATHS = [
  "Software Engineer",
  "Data Analyst",
  "Core Engineer"
];

// MTech Courses from Page 4 of PDF
export const MTECH_COURSES = [
  "Advance Computer Science Engineering",
  "VLSI & Embedded Systems",
  "Data Science and Research Methodology",
  "Digital Electronics",
  "Machine Design, AI & Machine Learning"
];

// MTech What You Learn
export const MTECH_WHAT_YOU_LEARN = [
  "Advanced programming, system design, and domain specialization",
  "Research-oriented problem solving and technical analysis",
  "Hands-on work with industry tools, simulations, and real-world applications",
  "In-depth knowledge of chosen specialization"
];

// Social Proof Student Quotes from Page 6 of PDF
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

// Interactive Student Projects for Labs / Project Gallery (Page 5)
export const STUDENT_PROJECTS: StudentProject[] = [
  {
    title: "Autonomous Warehouse Sorting Robot",
    category: "Final-year engineering projects",
    desc: "A fully functional autonomous mobile robot using LiDAR and SLAM algorithms to map, navigate, and sort industrial goods in a simulated warehouse floor environment.",
    techs: ["ROS2", "Python", "LiDAR", "SLAM", "Raspberry Pi 4", "SolidWorks"],
    features: ["Dynamic obstacle avoidance", "Real-time 2D grid mapping", "98.4% package sorting accuracy"]
  },
  {
    title: "EcoSmart: IoT Home Grid Optimizer",
    category: "Hardware and core engineering builds",
    desc: "An intelligent physical microgrid controller which dynamically balances solar energy storage, local battery state of charge, and utility grid feed-in using precision telemetry sensors.",
    techs: ["ESP32", "C++", "MQTT", "Solar MPPT", "Inverter Circuits", "Grafana"],
    features: ["40% peak load reduction", "Instant power routing (<50ms)", "Live Wi-Fi sensor telemetry"]
  },
  {
    title: "AMC EduSphere: Virtual Collaboration Hub",
    category: "Coding applications and systems",
    desc: "A web-based interactive classroom portal built by CSE students to enable synchronized student screen sharing, integrated custom compiler sandboxes, and cloud lab file management.",
    techs: ["React", "Express", "Docker Sandboxes", "WebRTC", "TailwindCSS"],
    features: ["Zero-config containerized workspaces", "Full-duplex low-latency video streaming", "Real-time peer assessments"]
  },
  {
    title: "BioHybrid Composite Mechanical Stress Analyzer",
    category: "Research and innovation work",
    desc: "A scientific inquiry paper and physical testing machine exploring the tensile and flexural properties of natural flax fiber composites reinforced with eco-resins for light aerospace applications.",
    techs: ["Ansys Mechanical", "Instron Tester", "MATLAB Stress Plotter", "SEM Analysis"],
    features: ["Validated 15% weight reduction", "2000+ material cycle fatigue data points", "Published in regional design journal"]
  }
];

export const COURSE_LEARNING_OUTCOMES: Record<string, string[]> = {
  // B.Tech Outcomes
  "Computer Science Engineering": [
    "Full-stack development, software engineering, and system design principles",
    "Database management systems, cloud computing, and big data architectures",
    "Data structures, algorithms, and computational complexity theory"
  ],
  "Electronics & Communication": [
    "VLSI design, semiconductor devices, and high-frequency circuit analysis",
    "Digital signal processing, wireless communication, and telemetry networks",
    "Embedded systems programming and microcontrollers interfacing"
  ],
  "Mechanical Engineering": [
    "Thermodynamics, fluid mechanics, and heat transfer principles",
    "CAD/CAM modeling, finite element analysis (FEA), and industrial design",
    "Robotics, automation control systems, and modern manufacturing setups"
  ],
  "Civil Engineering": [
    "Structural analysis, concrete technology, and steel structure designs",
    "Geotechnical engineering, environmental analysis, and soil mechanics",
    "Transportation planning, surveying, and smart city infrastructure designs"
  ],
  "Electrical & Electronics": [
    "Power systems analysis, transmission grid control, and distribution systems",
    "Analog and digital control systems, electrical machinery, and power converters",
    "Renewable energy systems integration (solar, wind) and battery storage tech"
  ],
  "Aeronautical Engineering": [
    "Aerodynamics, wind tunnel fluid dynamics, and flight performance mechanics",
    "Aircraft structures, structural health monitoring, and aerospace composites",
    "Aircraft propulsion systems, gas turbine engines, and space mechanics"
  ],
  "Artificial Intelligence & Machine Learning": [
    "Supervised, unsupervised, and deep learning neural networks algorithms",
    "Natural language processing, computer vision, and cognitive systems design",
    "AI ethics, model safety, predictive modeling, and AI pipeline deployment"
  ],
  "Data Science": [
    "Statistical inference, exploratory data analysis, and data visualization",
    "Big data engineering pipelines using Hadoop, Spark, and SQL/NoSQL systems",
    "Predictive analytics, advanced data mining, and machine learning models"
  ],
  "CSE + AI/ML": [
    "Core computer science principles integrated with advanced AI architectures",
    "Deployment of automated intelligence pipelines and real-time ML systems",
    "Advanced software development practices leveraging AI-assistant tooling"
  ],

  // M.Tech Outcomes
  "Advance Computer Science Engineering": [
    "Advanced research methodologies, complexity analysis, and algorithms design",
    "High-performance computing clusters and distributed databases at scale",
    "Advanced network security protocols, system vulnerabilities, and cryptography"
  ],
  "VLSI & Embedded Systems": [
    "Analog & digital CMOS VLSI circuit layout and design optimization",
    "Real-time operating systems (RTOS) design and specialized firmware dev",
    "Hardware description languages (Verilog/VHDL) and FPGA prototyping boards"
  ],
  "Data Science and Research Methodology": [
    "Advanced regression models, statistical hypothesis testing, and analytics",
    "Deep learning implementations for giant datasets and streaming telemetry",
    "Scientific research writing, thesis development, and peer-reviewed journals"
  ],
  "Digital Electronics": [
    "Advanced DSP processor architectures and digital logic circuit design",
    "Digital image processing, pattern classification, and custom filtering systems",
    "Microcontroller systems programming and industrial IoT sensor integration"
  ],
  "Machine Design, AI & Machine Learning": [
    "Advanced materials mechanics, stress limits, and finite element modeling",
    "AI/ML sensor integration for real-time structural health monitoring",
    "Robotic kinematics, multi-axis arm design, and automated control logic"
  ]
};
