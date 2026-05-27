export default function ThankYou() {
  return (
    <main className="min-h-screen bg-white text-[#161D4A]">
      <div className="max-w-6xl mx-auto px-6 py-10 sm:py-14">
        {/* Logo */}
        <div className="flex items-start">
          <img
            src="/images/institute-png-01-1.webp"
            alt="AMC Group of Institutions"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </div>

        {/* Center content */}
        <div className="mt-10 sm:mt-16 flex flex-col items-center text-center">
          <img
            src="/images/TraSuccess.webp"
            alt="Submission successful"
            className="w-[150px] sm:w-[180px] md:w-[210px] h-auto object-contain"
          />

          <h1 className="mt-8 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#161D4A]">
            Thank You for Reaching Out!
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl">
            We’ve received your information and are excited to connect with you. Our team will contact you shortly to
            discuss your needs and how we can help.
          </p>
        </div>
      </div>
    </main>
  );
}

