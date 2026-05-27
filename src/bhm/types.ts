/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Lead {
  id: string;
  name: string;
  phone: string;
  courseInterest: string; // Will strictly be "BHM" or customized
  city: string;
  timestamp: string;
  notes?: string;
  status: 'New' | 'Contacted' | 'Counseling Scheduled' | 'Admitted';
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    persona: string; // Culinary, FrontOffice, FandB, Events
  }[];
}

export interface QuizResult {
  persona: string;
  title: string;
  description: string;
  skills: string[];
  careerPaths: string[];
  image: string;
}
