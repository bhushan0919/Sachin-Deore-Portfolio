import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  CheckCircle2, FileText, ArrowRight, Cloud, Server, Shield, Activity
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const { personal, education, certifications } = PORTFOLIO_DATA;
  const primaryEdu = education[0]; // B.E. Computer Engineering (CGPA 9.25)

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Profile & Core Principles"
          title="Automating scale, reliability, and security."
          subtitle="Building resilient cloud architectures, continuous delivery pipelines, and comprehensive observability stacks."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Narrative grounded strictly in resume */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            <p>
              I am a <strong className="text-slate-900 dark:text-white">DevOps Engineer</strong> and Computer Engineering student at <strong className="text-slate-900 dark:text-white">Sinhgad Institute of Technology (9.25 CGPA)</strong> with hands-on professional experience in CI/CD automation, cloud infrastructure (AWS), Docker containerization, Kubernetes orchestration, and Infrastructure as Code (Terraform).
            </p>

            <p>
              Currently serving as <strong className="text-blue-600 dark:text-blue-400 font-semibold">Jr. DevOps Engineer at Hisan Labs Pvt. Ltd. (Pune)</strong>, I collaborate with development teams for smooth releases, manage Docker containers, orchestrate workloads on Kubernetes clusters, provision immutable infrastructure via Terraform, and automate configuration tasks using Ansible.
            </p>

            <p>
              My philosophy centers on building repeatable, automated release cycles with embedded DevSecOps quality gates (SonarQube, Trivy) and full-stack observability with Prometheus, Node Exporter, and Grafana dashboards for proactive issue detection and reduced downtime.
            </p>

            {/* Core Pillars Bullet Grid */}
            <div className="pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Core Engineering Pillars
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-2.5">
                  <Cloud size={16} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-slate-100 block">Cloud & Containers</strong>
                    <span className="text-slate-500 dark:text-slate-400 text-xs">AWS (EKS, EC2, S3, VPC), Docker & Kubernetes</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-2.5">
                  <Server size={16} className="text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-slate-100 block">CI/CD & IaC Automation</strong>
                    <span className="text-slate-500 dark:text-slate-400 text-xs">Jenkins, Terraform (IaC), Ansible, Bash scripting</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-2.5">
                  <Shield size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-slate-100 block">DevSecOps & Quality</strong>
                    <span className="text-slate-500 dark:text-slate-400 text-xs">SonarQube code gates, Trivy container security scans</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-2.5">
                  <Activity size={16} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-slate-100 block">Observability & SRE</strong>
                    <span className="text-slate-500 dark:text-slate-400 text-xs">Prometheus metrics, Grafana dashboards, Alertmanager</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenResume}
                type="button"
                className="inline-flex items-center gap-2 text-xs font-mono font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <FileText size={14} />
                <span>Inspect full resume & verified credentials</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Factual Highlights Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Professional Portrait Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden relative group">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-600 rounded-2xl blur-sm opacity-70 group-hover:opacity-100 transition duration-300" />
                  <img
                    src={personal.avatarUrl}
                    alt={personal.name}
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-top border-2 border-white dark:border-slate-800 shadow-md"
                  />
                  <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 bg-emerald-500 text-[10px] font-mono text-white rounded font-bold shadow-sm">
                    ACTIVE
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 block font-semibold">
                    DevOps Professional
                  </span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white truncate">
                    {personal.name}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    {personal.role} · Hisan Labs
                  </p>
                  <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Open for DevOps & Cloud Roles</span>
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2 text-center text-xs font-mono">
                <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-400 text-[10px] block">SPECIALTY</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">AWS & K8s</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-400 text-[10px] block">LOCATION</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Pune, MH</span>
                </div>
              </div>
            </div>

            {/* Primary Academic Card */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50/80 via-white to-blue-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/40 border border-blue-200 dark:border-blue-500/30 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-blue-600 dark:text-blue-400 flex items-center gap-1.5 uppercase tracking-wider">
                  <GraduationCap size={15} /> Primary Degree
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 font-mono text-xs font-bold border border-blue-200 dark:border-blue-500/20">
                  {primaryEdu.grade}
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">{primaryEdu.degree}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{primaryEdu.institution}, {primaryEdu.location}</p>
              <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>{primaryEdu.period}</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">9.25 CGPA Aggregate</span>
              </div>
            </div>

            {/* Factual Stack Snapshot */}
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                DevOps Toolkit At A Glance
              </span>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-slate-100 dark:border-slate-800/80">
                  <span className="text-slate-500 dark:text-slate-400">Cloud Infrastructure:</span>
                  <span className="font-mono text-slate-800 dark:text-slate-200 font-medium">AWS (EKS, EC2, S3, VPC), Azure</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-100 dark:border-slate-800/80">
                  <span className="text-slate-500 dark:text-slate-400">Containers & K8s:</span>
                  <span className="font-mono text-slate-800 dark:text-slate-200 font-medium">Docker, Kubernetes, Helm</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-100 dark:border-slate-800/80">
                  <span className="text-slate-500 dark:text-slate-400">IaC & Automation:</span>
                  <span className="font-mono text-slate-800 dark:text-slate-200 font-medium">Terraform, Ansible, Jenkins CI/CD</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 dark:text-slate-400">Monitoring & DevSecOps:</span>
                  <span className="font-mono text-slate-800 dark:text-slate-200 font-medium">Prometheus, Grafana, SonarQube, Trivy</span>
                </div>
              </div>
            </div>

            {/* Certifications Badge Card */}
            <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800/80 shadow-sm">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                Industry-Verified Credentials
              </span>
              <div className="space-y-2 text-xs">
                {certifications.map(c => (
                  <div key={c.id} className="flex items-center justify-between gap-2">
                    <span className="text-slate-800 dark:text-slate-300 font-medium truncate">{c.title}</span>
                    <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400 shrink-0 font-medium">{c.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};