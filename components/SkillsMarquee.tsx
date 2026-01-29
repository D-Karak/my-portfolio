
import React from 'react';
import { SKILLS } from '../constants';

const SkillsMarquee: React.FC = () => {
  return (
    <div className="py-20 border-y border-tertiary/10 overflow-hidden relative group bg-brandWhite dark:bg-primary">
      <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
        {[...SKILLS, ...SKILLS].map((skill, idx) => (
          <div key={idx} className="flex items-center gap-4 mx-8">
            <span className="text-4xl md:text-6xl font-bold transition-colors cursor-default text-primary/10 hover:text-primary dark:text-brandWhite/10 dark:hover:text-brandWhite">
              {skill.name}
            </span>
            <div className="w-3 h-3 bg-secondary rounded-full opacity-30"></div>
          </div>
        ))}
      </div>

      {/* Overlay gradient for smooth edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r to-transparent z-10 from-brandWhite dark:from-primary"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l to-transparent z-10 from-brandWhite dark:from-primary"></div>
    </div>
  );
};

export default SkillsMarquee;
