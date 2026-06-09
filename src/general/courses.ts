export type ProgramLevel = 'UG' | 'PG';

export interface CourseOption {
  label: string;
  courseId: string;
  level: ProgramLevel;
}

export const COURSE_OPTIONS: CourseOption[] = [
  { label: 'B.E. CSE', courseId: '3', level: 'UG' },
  { label: 'B.E. CSE-AIML', courseId: '5', level: 'UG' },
  { label: 'B.E. CSE-DS', courseId: '4', level: 'UG' },
  { label: 'B.E. AIML', courseId: '6', level: 'UG' },
  { label: 'B.E. ECE', courseId: '7', level: 'UG' },
  { label: 'B.E. AERO', courseId: '9', level: 'UG' },
  { label: 'B.E. EEE', courseId: '8', level: 'UG' },
  { label: 'B.E. CIVIL', courseId: '11', level: 'UG' },
  { label: 'B.E. MECH', courseId: '12', level: 'UG' },
  { label: 'BHM', courseId: '33', level: 'UG' },
  { label: 'B.Com', courseId: '34', level: 'UG' },
  { label: 'BBA', courseId: '37', level: 'UG' },
  { label: 'BBA Aviation', courseId: '38', level: 'UG' },
  { label: 'BCA', courseId: '41', level: 'UG' },
  { label: 'BSc Biotech', courseId: '40', level: 'UG' },
  { label: 'MBA', courseId: '29', level: 'PG' },
  { label: 'MCA', courseId: '30', level: 'PG' },
  { label: 'M.TECH-CSE', courseId: '24', level: 'PG' },
  { label: 'M.TECH-DS', courseId: '27', level: 'PG' },
  { label: 'M.TECH-VLSI', courseId: '25', level: 'PG' },
  { label: 'M.TECH-DEC', courseId: '28', level: 'PG' },
  { label: 'M.TECH-MD', courseId: '26', level: 'PG' },
  { label: 'MSc Biotech', courseId: '45', level: 'PG' },
];

export function getCoursesForLevel(level: ProgramLevel) {
  return COURSE_OPTIONS.filter((course) => course.level === level);
}

const PROGRAM_DEFAULTS: Record<string, { level: ProgramLevel; courseId: string }> = {
  'be-btech': { level: 'UG', courseId: '3' },
  bba: { level: 'UG', courseId: '37' },
  bcom: { level: 'UG', courseId: '34' },
  bca: { level: 'UG', courseId: '41' },
  bhm: { level: 'UG', courseId: '33' },
  'bsc-biotech': { level: 'UG', courseId: '40' },
  'msc-biotech': { level: 'PG', courseId: '45' },
  'pg-courses': { level: 'PG', courseId: '29' },
  mba: { level: 'PG', courseId: '29' },
  mtech: { level: 'PG', courseId: '24' },
  mca: { level: 'PG', courseId: '30' },
};

export function getDefaultsForProgram(programId?: string) {
  if (!programId) {
    return { level: 'UG' as ProgramLevel, courseId: '' };
  }

  return PROGRAM_DEFAULTS[programId] ?? { level: 'UG' as ProgramLevel, courseId: '' };
}
