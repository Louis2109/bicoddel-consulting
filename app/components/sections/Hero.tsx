// app/components/sections/Hero.tsx

'use client';

import { Button } from '@/app/components/common';
import { siteContent } from '@/app/data/content';
import styles from '@/app/styles/glassmorphism.module.css';

export const Hero: React.FC = () => {
  const handleCtaClick = (targetId: string) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-100 via-white to-yellow-50 -z-10" />

      {/* Decorative blurred circles */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-yellow-300 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-yellow-200 rounded-full blur-3xl opacity-20 -z-10" />

      {/* Main content */}
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Glass container for content */}
        <div
          className={`${styles.glassContainer} p-8 md:p-12 rounded-3xl border border-white/20 backdrop-blur-xl space-y-6`}
        >
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
              {siteContent.hero.title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            {siteContent.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-4">
            {/* Primary CTA */}
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleCtaClick('#contact')}
              className="w-full md:w-auto"
            >
              {siteContent.hero.ctaPrimary}
            </Button>

            {/* Secondary CTA */}
            <Button
              variant="secondary"
              size="lg"
              onClick={() => handleCtaClick('#services')}
              className="w-full md:w-auto"
            >
              {siteContent.hero.ctaSecondary}
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pt-4 animate-bounce">
          <svg
            className="w-8 h-8 text-yellow-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
