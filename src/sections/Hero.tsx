import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, FileText, Check, Copy, Terminal, ShieldCheck,
  Server, Cloud, Activity, CheckCircle2
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { SocialLinks } from '../components/SocialLinks';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { personal, heroCodeSnippet, techStrip } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<'profile' | 'k8sOutput'>('profile');
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(heroCodeSnippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      {/* Background glow & subtle DevOps grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-60 dark:opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Introduction & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Professional Profile Avatar & Status Badge */}
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="relative group shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 rounded-2xl blur-sm opacity-70 group-hover:opacity-100 transition duration-300" />
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-white dark:border-slate-800 shadow-lg bg-slate-900">
                  <img
                    src={personal.avatarUrl}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span
                  className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full shadow-sm ring-2 ring-emerald-400/30 animate-pulse"
                  title="Available for DevOps & Cloud engineering opportunities"
                />
              </div>

              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-mono text-blue-600 dark:text-blue-400 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse" />
                  <span>{personal.statusBadge}</span>
                  <span className="text-slate-400 dark:text-slate-600">•</span>
                  <span className="text-slate-600 dark:text-slate-400 font-semibold">CGPA 9.25</span>
                </div>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{personal.name}</span>
                  <span>•</span>
                  <span>{personal.location.split(',')[0]}, India</span>
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Automating resilient{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 dark:from-blue-400 dark:via-cyan-300 dark:to-indigo-400">
                cloud infrastructure
              </span>{' '}
              and CI/CD pipelines.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              Hi, I'm <strong className="text-slate-900 dark:text-white font-semibold">{personal.name}</strong>, a <span className="text-blue-600 dark:text-blue-400 font-medium">DevOps Engineer</span> with hands-on experience in AWS cloud infrastructure, Docker containerization, Kubernetes orchestration, and Infrastructure as Code (Terraform). I automate zero-downtime CI/CD workflows, enforce DevSecOps quality gates, and deliver real-time observability with Prometheus and Grafana.
            </p>

            {/* Live Metrics Quick Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30">
                <CheckCircle2 size={13} className="text-emerald-500" />
                <span>AWS EKS & Terraform Certified</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30">
                <ShieldCheck size={13} className="text-blue-500" />
                <span>AZ-900 & OCI AI 2025</span>
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-600/30 border border-blue-500/50 group"
              >
                <span>Explore DevOps Projects</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium bg-white dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 border border-slate-200 dark:border-slate-700/80 shadow-sm"
              >
                <span>Get In Touch</span>
              </a>

              {personal.resumeConfigured && (
                <button
                  onClick={onOpenResume}
                  type="button"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-slate-100 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-300 hover:bg-slate-200/80 dark:hover:bg-slate-800/80 transition-all duration-200 border border-slate-200 dark:border-slate-800 shadow-sm"
                >
                  <FileText size={16} className="text-blue-600 dark:text-blue-400" />
                  <span>Resume</span>
                </button>
              )}
            </div>

            {/* Social Links & Availability indicator */}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <SocialLinks size="sm" showLabels={true} />
              <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                <span>{personal.availability}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Custom Workstation / Cloud & DevOps Console Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient decorative blur behind workstation */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-indigo-600/20 rounded-2xl blur-lg opacity-70" />

            <div className="relative rounded-2xl bg-[#090d16] border border-slate-800 shadow-2xl overflow-hidden">
              {/* Window Title Bar */}
              <div className="px-4 py-3 bg-[#0c1220] border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/70 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/70 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/70 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 ml-2">devops-terminal // sachin</span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-slate-900/90 p-0.5 rounded-md border border-slate-800 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'profile' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    devops.ts
                  </button>
                  <button
                    onClick={() => setActiveTab('k8sOutput')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'k8sOutput' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    kubectl-get-pods.sh
                  </button>
                </div>
              </div>

              {/* Code Panel */}
              <div className="p-4 sm:p-5 font-mono text-xs text-slate-300 overflow-x-auto min-h-[290px] relative">
                <button
                  onClick={handleCopyCode}
                  aria-label="Copy snippet"
                  className="absolute top-4 right-4 p-1.5 rounded bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700 transition-colors"
                >
                  {copiedSnippet ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                </button>

                {activeTab === 'profile' ? (
                  <pre className="leading-relaxed">
                    <code>
                      <span className="text-slate-500">// Sachin Santosh Deore — DevOps Profile</span>{'\n'}
                      <span className="text-cyan-400">const</span>{' '}
                      <span className="text-blue-300">devopsEngineer</span> = {'{'}{'\n'}
                      {'  '}<span className="text-slate-400">name:</span>{' '}
                      <span className="text-emerald-300">"Sachin Santosh Deore"</span>,{'\n'}
                      {'  '}<span className="text-slate-400">role:</span>{' '}
                      <span className="text-emerald-300">"DevOps Engineer"</span>,{'\n'}
                      {'  '}<span className="text-slate-400">education:</span>{' '}
                      <span className="text-emerald-300">"B.E. Computer Engineering"</span>,{'\n'}
                      {'  '}<span className="text-slate-400">cgpa:</span>{' '}
                      <span className="text-amber-300">9.25</span> <span className="text-slate-500">/* Sinhgad SIT */</span>,{'\n'}
                      {'  '}<span className="text-slate-400">cloud:</span> [{'\n'}
                      {'    '}<span className="text-emerald-300">"AWS (EKS, EC2, S3, VPC)"</span>,{'\n'}
                      {'    '}<span className="text-emerald-300">"Azure (AZ-900 Certified)"</span>{'\n'}
                      {'  '}],{'\n'}
                      {'  '}<span className="text-slate-400">iacAndCiCd:</span> [{'\n'}
                      {'    '}<span className="text-emerald-300">"Terraform"</span>, <span className="text-emerald-300">"Ansible"</span>, <span className="text-emerald-300">"Jenkins"</span>{'\n'}
                      {'  '}],{'\n'}
                      {'  '}<span className="text-slate-400">orchestration:</span> [{'\n'}
                      {'    '}<span className="text-emerald-300">"Docker"</span>, <span className="text-emerald-300">"Kubernetes"</span>, <span className="text-emerald-300">"Helm"</span>{'\n'}
                      {'  '}],{'\n'}
                      {'  '}<span className="text-slate-400">observability:</span> [{'\n'}
                      {'    '}<span className="text-emerald-300">"Prometheus"</span>, <span className="text-emerald-300">"Grafana"</span>{'\n'}
                      {'  '}],{'\n'}
                      {'  '}<span className="text-slate-400">readyToDeploy:</span>{' '}
                      <span className="text-blue-400">true</span>{'\n'}
                      {'}'};{'\n\n'}
                      <span className="text-cyan-400">export default</span> devopsEngineer;
                    </code>
                  </pre>
                ) : (
                  <pre className="leading-relaxed">
                    <code>
                      <span className="text-slate-500"># kubectl get pods -n production -o wide</span>{'\n'}
                      <span className="text-slate-400">NAME                                  READY   STATUS    RESTARTS   AGE</span>{'\n'}
                      <span className="text-cyan-300">three-tier-frontend-7f98b67f8-m4p9q</span>  <span className="text-emerald-300">1/1</span>     <span className="text-emerald-400">Running</span>   0          18d{'\n'}
                      <span className="text-cyan-300">three-tier-frontend-7f98b67f8-xk89l</span>  <span className="text-emerald-300">1/1</span>     <span className="text-emerald-400">Running</span>   0          18d{'\n'}
                      <span className="text-blue-300">three-tier-api-5c74f57c6b-28jdx</span>      <span className="text-emerald-300">1/1</span>     <span className="text-emerald-400">Running</span>   0          18d{'\n'}
                      <span className="text-blue-300">three-tier-api-5c74f57c6b-rqw5z</span>      <span className="text-emerald-300">1/1</span>     <span className="text-emerald-400">Running</span>   0          18d{'\n'}
                      <span className="text-amber-300">prometheus-server-0</span>                  <span className="text-emerald-300">2/2</span>     <span className="text-emerald-400">Running</span>   0          42d{'\n'}
                      <span className="text-amber-300">grafana-core-6d8b9487c5-h29pk</span>        <span className="text-emerald-300">1/1</span>     <span className="text-emerald-400">Running</span>   0          42d{'\n'}
                      <span className="text-indigo-300">ingress-nginx-controller-6f4b6d47</span>     <span className="text-emerald-300">1/1</span>     <span className="text-emerald-400">Running</span>   0          42d{'\n\n'}
                      <span className="text-emerald-400">✓ All 7 pods healthy & passing readiness probes</span>
                    </code>
                  </pre>
                )}
              </div>

              {/* Status bar */}
              <div className="px-4 py-2 bg-[#070b14] border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-slate-400">AWS EKS Cluster • Healthy</span>
                </div>
                <span>Jenkins CI/CD • Prometheus</span>
              </div>
            </div>

            {/* Floating Tech Badges (AWS, Kubernetes, Terraform, Docker) */}
            <div className="hidden sm:flex items-center justify-between gap-2 mt-4 px-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs text-amber-600 dark:text-amber-300 font-mono shadow-sm">
                <Cloud size={13} className="text-amber-500 dark:text-amber-400" />
                <span>AWS EKS</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs text-cyan-700 dark:text-cyan-300 font-mono shadow-sm">
                <Server size={13} className="text-cyan-500 dark:text-cyan-400" />
                <span>Kubernetes</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs text-indigo-700 dark:text-indigo-300 font-mono shadow-sm">
                <Terminal size={13} className="text-indigo-500 dark:text-indigo-400" />
                <span>Terraform</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs text-emerald-700 dark:text-emerald-400 font-mono shadow-sm">
                <Activity size={13} className="text-emerald-600 dark:text-emerald-500" />
                <span>Grafana</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Slim Technology Strip Below Hero */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-200 dark:border-slate-800/60">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 shrink-0">
              Core DevOps Competencies:
            </span>
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {techStrip.map((item) => (
                <span
                  key={item.name}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/30 transition-colors shadow-sm"
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};