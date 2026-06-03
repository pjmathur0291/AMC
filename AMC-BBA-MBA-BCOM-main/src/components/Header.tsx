export function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto px-5 2xl:px-0 h-[80px] flex items-center justify-between w-full">
        {/* Logo area */}
        <div className="flex items-center">
          <img 
            src="https://static.wixstatic.com/media/174df9_bfc0c62f53bf48b2a6941250cfbf8a02~mv2.png/v1/fill/w_952,h_496,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/174df9_bfc0c62f53bf48b2a6941250cfbf8a02~mv2.png" 
            alt="AMC Logo" 
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-5">
          <div className="bg-brand-light text-brand-blue px-4 py-2.5 rounded-full text-[12px] font-bold tracking-widest border border-[#99c8da] shadow-sm">
            BBA | BCOM | MBA
          </div>
          <button className="bg-brand-yellow hover:bg-[#e5bd03] transition-colors text-brand-dark px-7 py-2.5 rounded-[4px] font-bold text-[13px] tracking-wide shadow-sm">
            ENQUIRE NOW
          </button>
        </div>
      </div>
    </header>
  );
}
