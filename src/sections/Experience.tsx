import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Experience: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 sm:py-28 relative bg-slate-100/60 dark:bg-[#06080d]/60 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Professional Timeline"
          title="Work Experience & Applied Engineering"
          subtitle="Real-world industry experience in DevOps engineering, container orchestration, CI/CD pipeline automation, and server infrastructure management."
        />

        <ExperienceTimeline experiences={experience} />
      </div>
    </section>
  );
};