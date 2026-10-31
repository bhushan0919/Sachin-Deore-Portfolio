import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { SkillCategory } from '../components/SkillCategory';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Skills: React.FC = () => {
  const { skillGroups } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-20 sm:py-28 relative bg-slate-100/60 dark:bg-[#06080d]/60 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Technical Toolkit"
          title="Skills & Technologies"
          subtitle="A comprehensive overview of DevOps automation tools, cloud architectures, networking fundamentals, and behavioral leadership skills."
        />

        {/* 4 Categorized Skill Cards in a clean, balanced grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => (
            <SkillCategory
              key={group.category}
              group={group}
              index={index}
            />
          ))}
        </div>

        {/* Note on DevOps Engineering Standards */}
        <div className="mt-12 p-4 rounded-xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800/80 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
            <span>
              All competencies reflect hands-on experience at Hisan Labs Pvt. Ltd. and verified AWS/Kubernetes deployments.
            </span>
          </div>
          <span className="font-mono text-slate-400 dark:text-slate-500">
            No subjective percentages • Factual stack overview
          </span>
        </div>
      </div>
    </section>
  );
};