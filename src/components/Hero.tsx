import React from 'react';

export function Hero() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a1128] to-[#040914] text-white">
      {/* Subtle Glow Spots */}
      <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Container - Flexbox approach with precise gap */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start justify-center gap-[40px]">
        
        {/* LEFT COLUMN (30% Width) */}
        <div className="w-full md:w-[30%] flex flex-col items-start text-left z-20 pt-[2rem] md:pt-[6rem]">
          <h1 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-bold font-serif leading-none tracking-wide text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] hover:drop-shadow-[0_0_25px_rgba(255,255,255,1)] transition-all duration-300 transform md:-translate-x-4">
            BUSINESS
          </h1>
          <div className="mt-[20px] lg:mt-[24px] max-w-[400px] w-full text-gray-200 text-sm lg:text-base leading-relaxed opacity-0 animate-[fadeIn_1s_ease-out_forwards_0.3s]">
            <p>
              Defining my professional identity through three words: 
              <strong className="text-white font-semibold glow-text-sm"> Analytical</strong>, 
              <strong className="text-white font-semibold glow-text-sm"> Systematic</strong>, and 
              <strong className="text-white font-semibold glow-text-sm"> Versatile</strong>. 
              My mission is to engineer efficiency by refining business processes 
              and architecting data systems that drive measurable impact.
            </p>
          </div>
        </div>

        {/* CENTER COLUMN (40% Width) - Explicit overlap via margin */}
        <div className="w-full md:w-[40%] flex justify-center items-center relative z-10 md:-mx-[5%]">
          <div className="relative animate-[float_4s_ease-in-out_infinite]">
            <img 
              src="/images/avt.png" 
              alt="Thu Janis - Technical Business Analyst" 
              // Precise height control per spec: ~300-380px 
              className="h-[300px] md:h-[350px] lg:h-[380px] w-auto object-contain rounded-2xl drop-shadow-[0_15px_35px_rgba(255,255,255,0.15)] filter brightness-105"
            />
            {/* Soft inner glow behind image to emphasize it without breaking strict clipping */}
            <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full -z-10" />
          </div>
        </div>

        {/* RIGHT COLUMN (30% Width) */}
        <div className="w-full md:w-[30%] flex flex-col items-start text-left z-20 pt-[1rem] md:pt-[6rem]">
          <h1 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-bold font-serif leading-none tracking-wide text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] hover:drop-shadow-[0_0_25px_rgba(255,255,255,1)] transition-all duration-300 transform md:translate-x-4">
            ANALYST
          </h1>
          <div className="mt-[20px] lg:mt-[24px] max-w-[400px] w-full text-gray-200 text-sm lg:text-base leading-relaxed flex flex-col gap-2 opacity-0 animate-[fadeIn_1s_ease-out_forwards_0.5s]">
            <p><span className="text-white font-medium">I&apos;m Thu (Janis)</span> | Technical Business Analyst</p>
            <p className="text-white/80">UEH University | Technology and Innovation</p>
            <p className="text-white/80">Status: <span className="text-blue-200 font-medium">Open for Internships (May 2026)</span></p>
            <p className="text-white/80">Location: Ho Chi Minh City, VN</p>
          </div>
        </div>

      </div>

      {/* Internal Custom Keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .glow-text-sm {
          text-shadow: 0 0 5px rgba(255,255,255,0.4);
        }
      `}</style>
    </section>
  );
}
