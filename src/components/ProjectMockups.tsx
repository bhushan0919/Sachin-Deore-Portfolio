import React, { useState } from 'react';
import { 
  Server, Shield, Activity, Terminal, Cloud, 
  CheckCircle2, RefreshCw, Cpu, HardDrive
} from 'lucide-react';

/* -------------------------------------------------------------
   PROJECT 01: THREE-TIER AWS EKS & DEVSECOPS MOCKUP
   AWS EKS, Jenkins CI/CD, Terraform, Ansible, SonarQube, Trivy, Helm
------------------------------------------------------------- */
export const ThreeTierEksMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'architecture' | 'security'>('pipeline');

  const pipelineStages = [
    { name: 'Git Checkout', status: 'Passed', duration: '4s', tool: 'GitHub Webhook' },
    { name: 'SonarQube Quality Gate', status: 'Passed (0 Bugs)', duration: '28s', tool: 'SAST Scan' },
    { name: 'Docker Build & Tag', status: 'Passed', duration: '45s', tool: 'Docker Multi-stage' },
    { name: 'Trivy Image Scan', status: 'Passed (0 Critical)', duration: '18s', tool: 'Vulnerability Scan' },
    { name: 'Terraform Plan / Apply', status: 'Passed', duration: '32s', tool: 'IaC Cloud' },
    { name: 'Deploy to AWS EKS', status: 'Healthy', duration: '22s', tool: 'Helm & Ingress' },
  ];

  return (
    <div className="w-full bg-[#0a0f18] rounded-xl border border-slate-800/90 overflow-hidden shadow-2xl">
      {/* App Bar / Header */}
      <div className="px-4 py-3 bg-[#0d1524] border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="ml-2 text-xs font-mono text-cyan-400 flex items-center gap-1.5">
            <Cloud size={13} /> aws-eks-cluster.internal // us-east-1
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-slate-900/90 p-0.5 rounded-lg border border-slate-700/60 text-xs">
          <button
            onClick={() => setActiveTab('pipeline')}
            className={`px-2.5 py-1 rounded-md transition-all font-medium ${
              activeTab === 'pipeline' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Jenkins Pipeline
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-2.5 py-1 rounded-md transition-all font-medium ${
              activeTab === 'architecture' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            3-Tier Cluster
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`px-2.5 py-1 rounded-md transition-all font-medium ${
              activeTab === 'security' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            DevSecOps Gates
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-5 min-h-[310px] text-xs">
        {activeTab === 'pipeline' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-200 font-semibold font-mono">
                  Pipeline #142 · branch: master
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30 font-mono">
                  SUCCESS (2m 29s)
                </span>
              </div>
              <span className="text-slate-400 font-mono text-[11px] flex items-center gap-1">
                <RefreshCw size={11} className="text-blue-400" /> Automated Trigger: git push
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {pipelineStages.map((stage, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono text-slate-500">Stage {idx + 1}</span>
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 size={11} /> {stage.duration}
                    </span>
                  </div>
                  <h4 className="font-semibold text-slate-200 text-xs truncate">{stage.name}</h4>
                  <div className="mt-2 pt-1.5 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>{stage.tool}</span>
                    <span className="text-emerald-400">Passed</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-2.5 bg-slate-950/70 rounded-lg border border-slate-800/80 font-mono text-[11px] text-slate-300 flex items-center justify-between">
              <span className="text-blue-400 flex items-center gap-1.5">
                <Terminal size={13} /> Helm upgrade --install three-tier-app ./helm-chart -n production
              </span>
              <span className="text-emerald-400 font-semibold text-[10px]">100% Zero-Downtime</span>
            </div>
          </div>
        )}

        {activeTab === 'architecture' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-mono text-cyan-400 font-semibold">
                Kubernetes Pod Topology & Ingress Controller
              </span>
              <span className="text-[10px] font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
                AWS EKS Managed Control Plane
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Tier 1: Frontend */}
              <div className="p-3 bg-slate-900/70 rounded-lg border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    Presentation Tier
                  </span>
                  <span className="text-emerald-400 font-mono text-[10px]">3/3 Running</span>
                </div>
                <h5 className="font-bold text-slate-100 text-xs">Nginx & React UI</h5>
                <p className="text-[11px] text-slate-400 mt-1">Ingress Controller route: /</p>
                <div className="mt-2.5 pt-2 border-t border-slate-800 text-[10px] text-slate-500 font-mono">
                  Port: 80 · Auto-scaled HPA
                </div>
              </div>

              {/* Tier 2: Backend */}
              <div className="p-3 bg-slate-900/70 rounded-lg border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                    Application Tier
                  </span>
                  <span className="text-emerald-400 font-mono text-[10px]">4/4 Running</span>
                </div>
                <h5 className="font-bold text-slate-100 text-xs">Node / REST API Services</h5>
                <p className="text-[11px] text-slate-400 mt-1">Ingress route: /api/v1/*</p>
                <div className="mt-2.5 pt-2 border-t border-slate-800 text-[10px] text-slate-500 font-mono">
                  ClusterIP · Health checks /live
                </div>
              </div>

              {/* Tier 3: Database */}
              <div className="p-3 bg-slate-900/70 rounded-lg border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Database Tier
                  </span>
                  <span className="text-emerald-400 font-mono text-[10px]">StatefulSet</span>
                </div>
                <h5 className="font-bold text-slate-100 text-xs">PostgreSQL / MongoDB</h5>
                <p className="text-[11px] text-slate-400 mt-1">AWS EBS Persistent Volumes</p>
                <div className="mt-2.5 pt-2 border-t border-slate-800 text-[10px] text-slate-500 font-mono">
                  Encrypted PVCs · Subnet Private
                </div>
              </div>
            </div>

            <div className="p-2.5 bg-blue-950/20 rounded-lg border border-blue-500/20 text-[11px] text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Server size={13} className="text-cyan-400" /> Infrastructure as Code: Terraform automated VPC, Subnets & NodeGroups
              </span>
              <span className="font-mono text-cyan-300">Terraform v1.7+</span>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                <Shield size={14} /> DevSecOps Automated Verification Gates
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Security Threshold: PASS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-slate-100">SonarQube Code Quality</span>
                  <span className="text-emerald-400 font-mono text-xs font-bold">Grade A</span>
                </div>
                <div className="space-y-1 text-[11px] text-slate-400 mt-2 font-mono">
                  <div className="flex justify-between"><span>Bugs:</span><span className="text-emerald-400">0</span></div>
                  <div className="flex justify-between"><span>Vulnerabilities:</span><span className="text-emerald-400">0</span></div>
                  <div className="flex justify-between"><span>Security Hotspots:</span><span className="text-emerald-400">100% Reviewed</span></div>
                  <div className="flex justify-between"><span>Code Smells:</span><span className="text-slate-300">0 critical</span></div>
                </div>
              </div>

              <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-slate-100">Trivy Container Scanner</span>
                  <span className="text-emerald-400 font-mono text-xs font-bold">PASS</span>
                </div>
                <div className="space-y-1 text-[11px] text-slate-400 mt-2 font-mono">
                  <div className="flex justify-between"><span>Critical CVEs:</span><span className="text-emerald-400">0</span></div>
                  <div className="flex justify-between"><span>High CVEs:</span><span className="text-emerald-400">0</span></div>
                  <div className="flex justify-between"><span>Base Image:</span><span className="text-slate-300">alpine:3.19 (Minimal)</span></div>
                  <div className="flex justify-between"><span>SBOM Generated:</span><span className="text-blue-400">CycloneDX</span></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer bar */}
      <div className="px-4 py-2 bg-[#080d15] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span className="font-mono text-blue-400">AWS EKS • Terraform • Jenkins • Docker • Helm</span>
        <span className="text-slate-500 font-mono">Cluster: eks-prod-cluster</span>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
   PROJECT 02: KUBERNETES & GRAFANA MONITORING MOCKUP
   Prometheus, Grafana, Node Exporter, kube-state-metrics, Alertmanager
------------------------------------------------------------- */
export const KubernetesGrafanaMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'metrics' | 'alerts' | 'nodes'>('metrics');

  return (
    <div className="w-full bg-[#0a0f18] rounded-xl border border-slate-800/90 overflow-hidden shadow-2xl">
      {/* Top Window Bar */}
      <div className="px-4 py-3 bg-[#0d1524] border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="ml-2 text-xs font-mono text-amber-400 flex items-center gap-1.5">
            <Activity size={13} /> grafana.k8s.internal // Cluster Health Dashboard
          </span>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-1 bg-slate-900/90 p-0.5 rounded-lg border border-slate-700/60 text-xs">
          <button
            onClick={() => setActiveTab('metrics')}
            className={`px-2.5 py-1 rounded-md transition-all font-medium ${
              activeTab === 'metrics' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Live Metrics
          </button>
          <button
            onClick={() => setActiveTab('nodes')}
            className={`px-2.5 py-1 rounded-md transition-all font-medium ${
              activeTab === 'nodes' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Node Utilization
          </button>
          <button
            onClick={() => setActiveTab('alerts')}
            className={`px-2.5 py-1 rounded-md transition-all font-medium ${
              activeTab === 'alerts' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Alertmanager (0 Firing)
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-5 min-h-[310px] text-xs">
        {activeTab === 'metrics' && (
          <div className="space-y-3.5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-amber-400 font-mono font-semibold flex items-center gap-1.5">
                <Activity size={13} /> Prometheus Real-time Metrics Stream
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                15s Scrape Interval · Up
              </span>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
              <div className="p-2.5 bg-slate-900/80 rounded-lg border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 block mb-1">Cluster CPU</span>
                <span className="font-mono text-lg font-bold text-emerald-400">28.4%</span>
                <span className="text-[10px] text-slate-500 block">16 vCPUs total</span>
              </div>
              <div className="p-2.5 bg-slate-900/80 rounded-lg border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 block mb-1">Memory Usage</span>
                <span className="font-mono text-lg font-bold text-blue-400">41.8%</span>
                <span className="text-[10px] text-slate-500 block">26.7 GB / 64 GB</span>
              </div>
              <div className="p-2.5 bg-slate-900/80 rounded-lg border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 block mb-1">Active Pods</span>
                <span className="font-mono text-lg font-bold text-cyan-400">38</span>
                <span className="text-[10px] text-emerald-400 block">0 Pending · 0 Failed</span>
              </div>
              <div className="p-2.5 bg-slate-900/80 rounded-lg border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 block mb-1">Network I/O</span>
                <span className="font-mono text-lg font-bold text-amber-400">142 MB/s</span>
                <span className="text-[10px] text-slate-500 block">Ingress Latency: 4ms</span>
              </div>
            </div>

            {/* Visual Bar representation */}
            <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800/80 space-y-2">
              <div className="flex justify-between items-center text-[11px] font-mono text-slate-400">
                <span>PromQL: sum(rate(container_cpu_usage_seconds_total[5m])) by (namespace)</span>
                <span className="text-emerald-400">Normal Range</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden flex">
                <div className="bg-blue-500 h-full" style={{ width: '45%' }} title="production" />
                <div className="bg-cyan-400 h-full" style={{ width: '25%' }} title="monitoring" />
                <div className="bg-amber-400 h-full" style={{ width: '15%' }} title="ingress-nginx" />
                <div className="bg-slate-600 h-full" style={{ width: '15%' }} title="kube-system" />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-slate-400 pt-1">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-blue-500 inline-block" /> prod (45%)</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-cyan-400 inline-block" /> monitoring (25%)</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-amber-400 inline-block" /> ingress (15%)</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-slate-600 inline-block" /> kube-system (15%)</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'nodes' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-mono text-slate-300">
                Node Exporter DaemonSet Metrics
              </span>
              <span className="text-[10px] font-mono text-emerald-400">3 Worker Nodes Ready</span>
            </div>

            <div className="space-y-2">
              {[
                { name: 'ip-10-0-1-14.ec2.internal', cpu: '24%', mem: '4.2GB / 16GB', disk: '18%', status: 'Ready' },
                { name: 'ip-10-0-1-29.ec2.internal', cpu: '31%', mem: '5.8GB / 16GB', disk: '22%', status: 'Ready' },
                { name: 'ip-10-0-2-88.ec2.internal', cpu: '19%', mem: '3.9GB / 16GB', disk: '15%', status: 'Ready' },
              ].map((node, i) => (
                <div key={i} className="p-2.5 bg-slate-900/80 rounded-lg border border-slate-800 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Cpu size={14} className="text-cyan-400" />
                    <div>
                      <span className="font-mono text-slate-200 font-semibold block text-xs">{node.name}</span>
                      <span className="text-[10px] text-slate-400 font-mono">Linux 5.15.0-aws · t3.xlarge</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-[11px]">
                    <span className="text-slate-400">CPU: <strong className="text-emerald-400">{node.cpu}</strong></span>
                    <span className="text-slate-400">Mem: <strong className="text-blue-400">{node.mem}</strong></span>
                    <span className="text-slate-400 flex items-center gap-1"><HardDrive size={11} /> {node.disk}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                      {node.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'alerts' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-mono text-slate-300">
                Alertmanager Active Routing & Receivers
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                0 Critical Alerts Firing
              </span>
            </div>

            <div className="space-y-2">
              <div className="p-2.5 bg-slate-900/70 rounded-lg border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-slate-200 block text-xs">HighNodeCPUThreshold ({'>'}85% for 5m)</span>
                  <span className="text-[10px] text-slate-400 font-mono">Severity: Warning · Slack Webhook (#devops-alerts)</span>
                </div>
                <span className="text-emerald-400 font-mono text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Healthy (28%)
                </span>
              </div>
              <div className="p-2.5 bg-slate-900/70 rounded-lg border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-slate-200 block text-xs">KubePodCrashLooping (restart count {'>'} 5)</span>
                  <span className="text-[10px] text-slate-400 font-mono">Severity: Critical · PagerDuty + Email trigger</span>
                </div>
                <span className="text-emerald-400 font-mono text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  0 Restarts
                </span>
              </div>
              <div className="p-2.5 bg-slate-900/70 rounded-lg border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-slate-200 block text-xs">KubeDiskSpaceFillingUp ({'<'}15% free)</span>
                  <span className="text-[10px] text-slate-400 font-mono">Severity: Warning · Node Exporter metric</span>
                </div>
                <span className="text-emerald-400 font-mono text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  80%+ Free
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="px-4 py-2 bg-[#080d15] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span className="font-mono text-amber-400">Prometheus • Grafana • Alertmanager • Node Exporter</span>
        <span className="text-slate-500 font-mono">Uptime: 99.98%</span>
      </div>
    </div>
  );
};