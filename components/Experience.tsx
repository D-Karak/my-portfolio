
import React from 'react';
import { EXPERIENCES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

interface ExperienceProps {
  isDark: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDark }) => {
  return (
    <section id="journey" className={`py-24 px-6 transition-colors ${isDark ? 'bg-primary' : 'bg-brandWhite'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-brandWhite' : 'bg-primary'}`}></div>
              <span className="text-secondary uppercase text-xs tracking-widest font-bold">Experiences</span>
            </div>
            <h2 className={`text-5xl md:text-6xl font-bold tracking-tighter ${isDark ? 'text-brandWhite' : 'text-primary'}`}>
              Explore My Web Development<br />Journey
            </h2>
          </div>
          <div className="max-w-md space-y-6">
            <p className="text-secondary leading-relaxed">
              Over the past 2+ years, I've had the opportunity to work on a wide range of design and developed projects, collaborating with diverse teams and clients to bring creative visions to life.
            </p>
            <a href="#" className={`flex items-center gap-1 font-bold group ${isDark ? 'text-brandWhite' : 'text-primary'}`}>
              Book A Call <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className={`group border-b border-tertiary/20 pb-12 transition-all -mx-6 px-6 rounded-2xl ${isDark ? 'hover:bg-secondary/5' : 'hover:bg-tertiary/5'}`}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-4">
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-brandWhite' : 'text-primary'}`}>{exp.company}</h3>
                  <p className="text-secondary text-sm font-medium mt-1">{exp.period}</p>
                </div>
                <div className="md:col-span-4">
                  <p className="text-secondary leading-relaxed">{exp.description}</p>
                  <p className={`font-semibold mt-2 text-sm uppercase tracking-wider ${isDark ? 'text-brandWhite' : 'text-primary'}`}>{exp.role}</p>
                </div>
                <div className="md:col-span-4 flex flex-wrap gap-2 md:justify-end">
                  {exp.tags.map((tag) => (
                    <span key={tag} className={`px-4 py-1.5 rounded-full border text-xs font-bold text-secondary uppercase tracking-widest transition-colors cursor-default ${isDark ? 'border-secondary/20 hover:bg-brandWhite hover:text-primary' : 'border-tertiary/50 hover:bg-primary hover:text-brandWhite'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
