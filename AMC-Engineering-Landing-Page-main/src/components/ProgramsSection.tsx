import { useState } from 'react';
import { BookOpen, CheckCircle, GraduationCap, ChevronRight } from 'lucide-react';
import { 
  BTECH_COURSES, BTECH_WHAT_YOU_LEARN, BTECH_CAREER_PATHS,
  MTECH_COURSES, MTECH_WHAT_YOU_LEARN, COURSE_LEARNING_OUTCOMES
} from '../data';

export default function ProgramsSection() {
  const [degreeType, setDegreeType] = useState<'BTech' | 'MTech'>('BTech');
  const [selectedCourse, setSelectedCourse] = useState<string>('Computer Science Engineering');

  // Helper map for icons corresponding to course names to make details look exquisite
  const getCourseBg = (course: string) => {
    if (course.includes('Computer') || course.includes('Intelligence') || course.includes('Data') || course.includes('CSE')) {
      return 'bg-gradient-to-tr from-[#161D4A]/5 to-[#ADDDF1]/20 border-[#161D4A]/10';
    }
    if (course.includes('Electronics') || course.includes('VLSI') || course.includes('Embedded')) {
      return 'bg-gradient-to-tr from-[#161D4A]/5 to-[#FED304]/10 border-[#161D4A]/10';
    }
    return 'bg-gradient-to-tr from-[#161D4A]/5 to-[#161D4A]/5 border-[#161D4A]/5';
  };

  return (
    <section id="programs" className="py-20 md:py-28 bg-[#ADDDF1]/5 text-[#161D4A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#161D4A] border-b-2 border-[#FED304] pb-1">
            Academic Programs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-[#161D4A]">
            Choose the Right BTech & MTech Course in Bangalore
          </h2>
          <p className="text-base sm:text-lg text-[#161D4A]/70 leading-relaxed">
            AMC Engineering College provides modern research facilities and industry-connected curricula designed to accelerate technical capabilities.
          </p>
        </div>

        {/* Degree Selection Switch Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#161D4A]/10 p-1.5 rounded-2xl flex space-x-1 border border-[#ADDDF1]/30">
            <button
              onClick={() => {
                setDegreeType('BTech');
                setSelectedCourse('Computer Science Engineering');
              }}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center space-x-2 ${
                degreeType === 'BTech' 
                  ? 'bg-[#161D4A] text-[#FFFFFF] shadow-lg' 
                  : 'text-[#161D4A]/80 hover:text-[#161D4A]'
              }`}
            >
              <GraduationCap className="w-4.5 h-4.5" />
              <span>BTech (Bachelor of Engineering)</span>
            </button>
            <button
              onClick={() => {
                setDegreeType('MTech');
                setSelectedCourse('Advance Computer Science Engineering');
              }}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center space-x-2 ${
                degreeType === 'MTech' 
                  ? 'bg-[#161D4A] text-[#FFFFFF] shadow-lg' 
                  : 'text-[#161D4A]/80 hover:text-[#161D4A]'
              }`}
            >
              <BookOpen className="w-4.5 h-4.5" />
              <span>MTech (Master of Technology)</span>
            </button>
          </div>
        </div>

        {/* Dynamic Details Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* List of courses (Left Column) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-left">
              <div className="flex items-center justify-between border-b border-[#ADDDF1]/30 pb-3 mb-6">
                <h3 className="text-lg sm:text-xl font-bold font-display text-[#161D4A]">
                  Available Streams & Focus Areas
                </h3>
                <span className="text-xs font-mono font-bold uppercase text-[#161D4A]/50 bg-[#ADDDF1]/20 px-2.5 py-1 rounded">
                  {degreeType === 'BTech' 
                    ? `${BTECH_COURSES.length} Specialties` 
                    : `${MTECH_COURSES.length} Specialties`
                  }
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(degreeType === 'BTech' ? BTECH_COURSES : MTECH_COURSES).map((course, idx) => {
                  const isSelected = selectedCourse === course;
                  return (
                    <div
                      key={course}
                      onClick={() => setSelectedCourse(course)}
                      className={`p-4.5 rounded-xl border-[0.5px] text-left transition-all duration-250 cursor-pointer flex items-center justify-between ${
                        isSelected 
                          ? 'border-[#161D4A] bg-[#FFFFFF] shadow-md -translate-y-0.5' 
                          : 'border-[#161D4A]/30 sm:border-transparent bg-[#FFFFFF] sm:border-b-[#ADDDF1]/30 hover:border-[#161D4A] hover:shadow-xs'
                      }`}
                      id={`course-card-${idx}`}
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#161D4A]/50 font-mono">
                          {degreeType} Specialty
                        </span>
                        <h4 className="text-sm sm:text-base font-extrabold text-[#161D4A] leading-snug">
                          {course}
                        </h4>
                      </div>
                      <ChevronRight className={`w-4 h-4 text-[#161D4A]/40 transition-transform ${isSelected ? 'translate-x-1 text-[#FED304]' : ''}`} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Curriculum "What you learn" (Right Column) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="bg-[#FFFFFF] border border-[#ADDDF1]/30 rounded-2xl p-6 sm:p-8 space-y-6 w-full text-left flex-1 flex flex-col justify-between shadow-sm">
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-xs uppercase font-mono font-black text-[#161D4A]/50 tracking-widest block">
                    Educational Output {selectedCourse ? `• ${selectedCourse}` : ''}
                  </span>
                  <h3 className="text-xl font-bold font-display text-[#161D4A]">
                    What You Learn
                  </h3>
                </div>

                <div className="space-y-4">
                  {((selectedCourse && COURSE_LEARNING_OUTCOMES[selectedCourse]) || 
                    (degreeType === 'BTech' ? BTECH_WHAT_YOU_LEARN : MTECH_WHAT_YOU_LEARN)
                  ).map((point, index) => (
                    <div 
                      key={index} 
                      className="flex items-start space-x-3.5 group"
                      id={`curriculum-point-${index}`}
                    >
                      <div className="mt-0.5 w-6 h-6 rounded-full bg-[#ADDDF1]/20 flex items-center justify-center shrink-0 border border-[#ADDDF1]/30 group-hover:bg-[#FED304] transition-colors duration-200">
                        <CheckCircle className="w-4 h-4 text-[#161D4A]" />
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-[#161D4A]/85 leading-relaxed group-hover:text-[#161D4A] transition-colors">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Counseling quick action shortcut inside cards */}
              <div className="border-t border-[#ADDDF1]/30 pt-6 mt-6 space-y-4">
                <p className="text-xs text-[#161D4A]/60 leading-normal font-sans">
                  Need personalized advice? Receive counseling tailored for <strong className="text-[#161D4A] font-semibold">{degreeType} Courses</strong>.
                </p>
                <button
                  onClick={() => {
                    const el = document.getElementById('cta-form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full flex items-center justify-center px-4 py-3.5 text-xs font-bold uppercase tracking-widest bg-[#FED304] text-[#161D4A] hover:bg-[#FED304]/90 rounded-xl transition-all cursor-pointer shadow-sm"
                >
                  Apply & Get counseling
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
