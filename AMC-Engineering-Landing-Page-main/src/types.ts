export interface CareerPath {
  title: string;
  category: string;
  degree: 'B.Tech' | 'M.Tech';
}

export interface Course {
  name: string;
  specialization?: string;
}

export interface StudentQuote {
  quote: string;
  author: string;
  course: string;
  year: string;
  avatarSeed: string;
}

export interface StudentProject {
  title: string;
  category: 'Final-year engineering projects' | 'Coding applications and systems' | 'Hardware and core engineering builds' | 'Research and innovation work';
  desc: string;
  techs: string[];
  features: string[];
}
