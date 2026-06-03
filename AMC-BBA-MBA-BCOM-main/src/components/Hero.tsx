import { Sparkles } from 'lucide-react';
import { LeadForm } from './LeadForm';

export function Hero() {
  return (
    <main className="relative w-full flex items-center bg-brand-blue overflow-hidden">
      {/* Background image & gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.postimg.cc/wMRgcJvn/hero-imgg.webp"
          alt="AMC College Campus"
          className="w-full h-full object-cover object-center opacity-60"
        />
        {/* Deep blue gradient mapping tailored to the reference */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/70 to-transparent"></div>
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-60 mix-blend-overlay"></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 2xl:px-0 relative z-10 py-[120px] lg:grid lg:grid-cols-12 lg:gap-5 items-center w-full">
        {/* Content Column */}
        <div className="lg:col-span-7 flex flex-col justify-center lg:pr-5">
          <div className="inline-flex items-center gap-2 bg-brand-yellow text-brand-dark px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-8 shadow-md w-fit">
            <Sparkles className="w-3.5 h-3.5" />
            Leading Degree College • Bangalore
          </div>

          <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] mb-6 tracking-tight">
            Build Your Future <br />
            at{' '}
            <span className="inline-block bg-brand-yellow text-brand-dark px-4 py-1 transform -skew-x-3 shadow-lg select-none mb-2 md:mb-0">
              AMC
            </span>
            <br />
            Leading Degree <br />
            College in Bangalore
          </h1>

          <p className="text-lg md:text-xl text-gray-300/90 max-w-2xl leading-relaxed">
            Start your BBA, BCom, or MBA journey at AMC Degree College with industry-aligned programs, practical learning, and strong career-focused training.
          </p>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-5 mt-16 lg:mt-0 relative pt-6 lg:pt-0 pb-12 lg:pb-0">
          {/* Decorative dots behind form */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4yNSIvPjwvc3ZnPg==')] z-0 hidden lg:block rounded-full"></div>
          <LeadForm />
        </div>
      </div>
    </main>
  );
}
