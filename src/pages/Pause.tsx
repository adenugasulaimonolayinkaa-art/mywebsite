import { useEffect, useState } from 'react';

export function Pause() {
  const [isVisible, setIsVisible] = useState(false);
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');

  useEffect(() => {
    setIsVisible(true);

    // Simple breathing animation cycle
    const breathCycle = () => {
      setBreathPhase('inhale');
      setTimeout(() => {
        setBreathPhase('hold');
        setTimeout(() => {
          setBreathPhase('exhale');
        }, 2000);
      }, 4000);
    };

    breathCycle();
    const interval = setInterval(breathCycle, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/still-water.jpg"
          alt="Still water"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]" />
      </div>

      {/* Breathing Indicator */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2">
        <div 
          className={`w-2 h-2 rounded-full bg-[#444] transition-all duration-[4000ms] ${
            breathPhase === 'inhale' ? 'scale-150 opacity-100' : 
            breathPhase === 'hold' ? 'scale-150 opacity-100' : 
            'scale-100 opacity-50'
          }`}
        />
      </div>

      {/* Main Content */}
      <div 
        className={`relative z-10 text-center px-6 max-w-3xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* The Message */}
        <div className="space-y-12">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight transition-all duration-[4000ms] ${
              breathPhase === 'inhale' ? 'opacity-100 scale-105' : 
              breathPhase === 'hold' ? 'opacity-100 scale-105' : 
              'opacity-90 scale-100'
            }`}
          >
            Stop.
          </h1>
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight transition-all duration-[4000ms] delay-500 ${
              breathPhase === 'inhale' ? 'opacity-100 scale-105' : 
              breathPhase === 'hold' ? 'opacity-100 scale-105' : 
              'opacity-90 scale-100'
            }`}
          >
            Breathe.
          </h1>
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight transition-all duration-[4000ms] delay-1000 ${
              breathPhase === 'inhale' ? 'opacity-100 scale-105' : 
              breathPhase === 'hold' ? 'opacity-100 scale-105' : 
              'opacity-90 scale-100'
            }`}
          >
            Observe your thoughts.
          </h1>
        </div>

        {/* Subtle Divider */}
        <div className="my-16 flex justify-center">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#333] to-transparent" />
        </div>

        {/* Additional Guidance */}
        <div 
          className={`space-y-6 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-lg md:text-xl text-[#777] leading-relaxed">
            You don't need to change anything.
          </p>
          <p className="text-lg md:text-xl text-[#777] leading-relaxed">
            You don't need to achieve anything.
          </p>
          <p className="text-lg md:text-xl text-[#666] leading-relaxed">
            Simply be here, now, with what is.
          </p>
        </div>

        {/* Breath Guidance */}
        <div 
          className={`mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#444]">
            {breathPhase === 'inhale' && 'Breathe in...'}
            {breathPhase === 'hold' && 'Hold...'}
            {breathPhase === 'exhale' && 'Breathe out...'}
          </p>
        </div>
      </div>

      {/* Bottom Quote */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center">
        <p 
          className={`text-xs text-[#444] tracking-[0.2em] uppercase transition-all duration-1000 delay-1500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Return to this page whenever you need silence
        </p>
      </div>
    </div>
  );
}
