import { motion } from "framer-motion";
import {
  Activity,
  Bell,
  Globe,
  Star,
  MessageSquare,
  TrendingUp,
  Users,
  Search,
  Eye,
  Heart,
  ShoppingCart,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
} from "recharts";
import { type LucideIcon } from "lucide-react";
import MetricCard from "@/components/MetricCard";
import AISuggestionsPanel from "@/components/AISuggestionsPanel";
import AmbientParticles from "@/components/AmbientParticles";

// ── Existing data ───────────────────────────────────────────────────────────

const trendData = [
  { name: "Jan", mentions: 2400, sentiment: 78, reach: 180000 },
  { name: "Feb", mentions: 3200, sentiment: 82, reach: 220000 },
  { name: "Mar", mentions: 2800, sentiment: 79, reach: 195000 },
  { name: "Apr", mentions: 4100, sentiment: 85, reach: 310000 },
  { name: "May", mentions: 3600, sentiment: 88, reach: 280000 },
  { name: "Jun", mentions: 4800, sentiment: 91, reach: 420000 },
  { name: "Jul", mentions: 5200, sentiment: 92, reach: 480000 },
];

const channelData = [
  { name: "Instagram", value: 38 },
  { name: "Twitter/X", value: 28 },
  { name: "LinkedIn", value: 18 },
  { name: "News", value: 10 },
  { name: "Reddit", value: 6 },
];

const sentimentPie = [
  { name: "Positive", value: 68, color: "hsl(172, 80%, 42%)" },
  { name: "Neutral", value: 24, color: "hsl(222, 25%, 30%)" },
  { name: "Negative", value: 8, color: "hsl(0, 72%, 51%)" },
];

const recentMentions = [
  { platform: "Twitter/X", user: "@techcrunch", text: "BrandPulse is revolutionizing how companies track their online reputation...", sentiment: "positive", time: "2m ago" },
  { platform: "LinkedIn", user: "Sarah Chen", text: "Impressive results after 3 months using BrandPulse for our brand strategy.", sentiment: "positive", time: "18m ago" },
  { platform: "Reddit", user: "u/marketing_pro", text: "Has anyone compared BrandPulse with Brandwatch? Considering switching.", sentiment: "neutral", time: "1h ago" },
  { platform: "Google", user: "James K.", text: "Great tool but the pricing could be more transparent for small teams.", sentiment: "neutral", time: "3h ago" },
];

// ── Brand Awareness ─────────────────────────────────────────────────────────
// Funnel: Target Audience → Aided Recognition → Unaided Recall → Top-of-Mind

const awarenessFunnel = [
  { label: "Target Audience", value: 100, bar: "bg-secondary" },
  { label: "Aided Recognition", value: 78, bar: "bg-primary/40" },
  { label: "Unaided Recall",    value: 45, bar: "bg-primary/70" },
  { label: "Top-of-Mind",       value: 23, bar: "bg-gradient-primary" },
];

// ── Brand Sentiment & Reputation ────────────────────────────────────────────

const platformSentiment = [
  { platform: "Social Media", positive: 72, neutral: 20, negative: 8 },
  { platform: "Reviews",      positive: 65, neutral: 25, negative: 10 },
  { platform: "Surveys",      positive: 81, neutral: 15, negative: 4 },
  { platform: "News",         positive: 58, neutral: 32, negative: 10 },
];

// ── Brand Usage & Consideration ─────────────────────────────────────────────

const usageConsiderationData = [
  { segment: "18–24", usage: 42, consideration: 68 },
  { segment: "25–34", usage: 58, consideration: 74 },
  { segment: "35–44", usage: 51, consideration: 65 },
  { segment: "45–54", usage: 38, consideration: 52 },
  { segment: "55+",   usage: 24, consideration: 41 },
];

// ── Brand Associations & Positioning ────────────────────────────────────────

const associationData = [
  { attribute: "Quality",    brand: 82, competitor: 75 },
  { attribute: "Innovation", brand: 78, competitor: 65 },
  { attribute: "Trust",      brand: 71, competitor: 80 },
  { attribute: "Value",      brand: 65, competitor: 70 },
  { attribute: "Sustain.",   brand: 88, competitor: 60 },
  { attribute: "Support",    brand: 74, competitor: 72 },
];

// ── Customer Loyalty & Advocacy (NPS) ───────────────────────────────────────
// NPS = Promoters% − Detractors% = 68 − 10 = 58

const npsScore = 58;
const npsBreakdown = [
  { name: "Promoters",  value: 68, color: "hsl(172, 80%, 42%)" },
  { name: "Passives",   value: 22, color: "hsl(222, 25%, 38%)" },
  { name: "Detractors", value: 10, color: "hsl(0, 72%, 51%)" },
];

// ── Top-level KPI cards (one per health category) ───────────────────────────

type MetricConfig = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  change: number;
  icon: LucideIcon;
  format?: (n: number) => string;
};

const metrics: MetricConfig[] = [
  { label: "Brand Score",       value: 87, suffix: "/100", change:  4.2, icon: Star },
  { label: "Brand Awareness",   value: 78, suffix: "%",    change:  6.3, icon: Eye },
  { label: "NPS Score",         value: 58,                 change:  5.8, icon: Heart },
  { label: "Positive Sentiment",value: 92, suffix: "%",    change:  2.1, icon: TrendingUp },
  { label: "Audience Reach",    value: 24, suffix: "M",    change: -3.1, icon: Users },
];

const sentimentColors: Record<string, string> = {
  positive: "text-primary bg-primary/10",
  neutral: "text-muted-foreground bg-muted",
  negative: "text-destructive bg-destructive/10",
};

const tooltipStyle = {
  background: "hsl(222, 40%, 9%)",
  border: "1px solid hsl(222, 25%, 18%)",
  borderRadius: 12,
  color: "hsl(210, 20%, 95%)",
  fontSize: 12,
  boxShadow: "0 8px 32px -8px rgba(0,0,0,0.5)",
};

// ── Component ────────────────────────────────────────────────────────────────

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background ambient */}
      <div className="fixed inset-0 bg-gradient-mesh pointer-events-none" />
      <div className="fixed inset-0 pointer-events-none">
        <AmbientParticles count={35} />
      </div>

      {/* Top bar */}
      <header className="sticky top-0 z-50 glass-strong">
        <div className="container mx-auto px-6 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
              <Activity className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-foreground tracking-tight">BrandPulse</span>
          </Link>

          <div className="hidden md:flex items-center gap-1 bg-secondary/50 rounded-lg px-3 py-1.5">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search mentions, channels..."
              className="bg-transparent border-none text-sm text-foreground placeholder:text-muted-foreground focus:outline-none w-64"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="relative hover:text-foreground text-muted-foreground transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-gradient-primary ring-2 ring-background" />
            </button>
            <div className="h-9 w-9 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm shadow-glow">
              BP
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 space-y-8 relative z-10">

        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-foreground tracking-tight">
            Good morning, <span className="text-gradient">Alex</span>
          </h1>
          <p className="text-muted-foreground mt-1">Your brand is performing above average. Here's the latest.</p>
        </motion.div>

        {/* ── KPI Cards — one per health category ────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          {metrics.map((m, i) => (
            <MetricCard
              key={m.label}
              label={m.label}
              value={m.value}
              suffix={m.suffix}
              prefix={m.prefix}
              change={m.change}
              icon={m.icon}
              delay={i * 0.1}
              format={m.format}
            />
          ))}
        </div>

        {/* ── Mentions & Reach Trend + Channel Distribution ───────────────── */}
        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:col-span-2 bg-gradient-card rounded-xl border border-border/40 p-6 glow-border"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold text-foreground">Mentions & Reach Trend</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Last 7 months • Updated live</p>
              </div>
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-primary" /> Mentions</span>
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-accent" /> Reach</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="mentionGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(172, 80%, 42%)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="hsl(172, 80%, 42%)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="reachGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(260, 60%, 55%)" stopOpacity={0.2} />
                    <stop offset="100%" stopColor="hsl(260, 60%, 55%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 25%, 15%)" />
                <XAxis dataKey="name" tick={{ fill: "hsl(215, 15%, 50%)", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "hsl(215, 15%, 50%)", fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Area type="monotone" dataKey="mentions" stroke="hsl(172, 80%, 42%)" fill="url(#mentionGrad)" strokeWidth={2.5} dot={false} />
                <Area type="monotone" dataKey="reach" stroke="hsl(260, 60%, 55%)" fill="url(#reachGrad)" strokeWidth={2} dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-card rounded-xl border border-border/40 p-6 glow-border"
            >
              <h3 className="font-semibold text-foreground mb-1">Sentiment Breakdown</h3>
              <p className="text-xs text-muted-foreground mb-4">Overall tone of mentions</p>
              <ResponsiveContainer width="100%" height={140}>
                <PieChart>
                  <Pie data={sentimentPie} cx="50%" cy="50%" innerRadius={40} outerRadius={60} dataKey="value" strokeWidth={0}>
                    {sentimentPie.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 text-xs">
                {sentimentPie.map((s) => (
                  <span key={s.name} className="flex items-center gap-1.5 text-muted-foreground">
                    <span className="h-2 w-2 rounded-full" style={{ background: s.color }} />
                    {s.name} {s.value}%
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-card rounded-xl border border-border/40 p-6 glow-border"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-foreground">By Channel</h3>
                  <p className="text-xs text-muted-foreground">Mention distribution</p>
                </div>
                <Globe className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="space-y-3">
                {channelData.map((ch) => (
                  <div key={ch.name} className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-16 shrink-0">{ch.name}</span>
                    <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${ch.value}%` }}
                        transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-primary"
                      />
                    </div>
                    <span className="text-xs font-medium text-foreground w-8 text-right">{ch.value}%</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── 1. Brand Awareness ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="bg-gradient-card rounded-xl border border-border/40 p-6 glow-border"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <Eye className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Brand Awareness</h3>
              <p className="text-xs text-muted-foreground">Recognition & recall across the awareness funnel</p>
            </div>
          </div>

          {/* Funnel bars */}
          <div className="space-y-3 mb-6">
            {awarenessFunnel.map((level, i) => (
              <div key={level.label} className="flex items-center gap-4">
                <span className="text-xs text-muted-foreground w-36 shrink-0 text-right">{level.label}</span>
                <div className="flex-1 h-9 bg-secondary/30 rounded-lg overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${level.value}%` }}
                    transition={{ delay: 0.6 + i * 0.15, duration: 1.2, ease: "easeOut" }}
                    className={`h-full rounded-lg ${level.bar} flex items-center justify-end px-3`}
                  >
                    <span className="text-sm font-bold text-foreground">{level.value}%</span>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary stats */}
          <div className="pt-5 border-t border-border/30 grid grid-cols-3 gap-4 text-center">
            {[
              { label: "Aided Recognition", value: "78%", sub: "know brand when prompted" },
              { label: "Unaided Recall",     value: "45%", sub: "recall brand spontaneously" },
              { label: "Top-of-Mind",        value: "23%", sub: "first brand recalled" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                <p className="text-xs font-medium text-foreground mt-0.5">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.sub}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── 2. Brand Sentiment & Reputation + 3. Brand Usage & Consideration */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Sentiment & Reputation — by source */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-gradient-card rounded-xl border border-border/40 p-6 glow-border"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Brand Sentiment & Reputation</h3>
                <p className="text-xs text-muted-foreground">Positive / neutral / negative by source</p>
              </div>
            </div>

            <div className="space-y-4 mb-5">
              {platformSentiment.map((row) => (
                <div key={row.platform} className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground w-20 shrink-0">{row.platform}</span>
                  <div className="flex-1 h-3 rounded-full overflow-hidden flex">
                    <div className="h-full bg-primary"         style={{ width: `${row.positive}%` }} />
                    <div className="h-full bg-secondary"       style={{ width: `${row.neutral}%` }} />
                    <div className="h-full bg-destructive/70"  style={{ width: `${row.negative}%` }} />
                  </div>
                  <span className="text-xs text-primary font-medium w-8 text-right">{row.positive}%</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-5 text-xs pt-4 border-t border-border/30">
              {[
                { label: "Positive", cls: "bg-primary" },
                { label: "Neutral",  cls: "bg-secondary" },
                { label: "Negative", cls: "bg-destructive/70" },
              ].map((l) => (
                <span key={l.label} className="flex items-center gap-1.5 text-muted-foreground">
                  <span className={`h-2 w-2 rounded-full ${l.cls}`} />
                  {l.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Usage & Consideration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="bg-gradient-card rounded-xl border border-border/40 p-6 glow-border"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <ShoppingCart className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Brand Usage & Consideration</h3>
                <p className="text-xs text-muted-foreground">Current usage vs. purchase intent by age group</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={230}>
              <BarChart data={usageConsiderationData} barCategoryGap="30%">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 25%, 15%)" vertical={false} />
                <XAxis dataKey="segment" tick={{ fill: "hsl(215, 15%, 50%)", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "hsl(215, 15%, 50%)", fontSize: 12 }} axisLine={false} tickLine={false} domain={[0, 100]} unit="%" />
                <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => `${v}%`} />
                <Bar dataKey="usage"         name="Current Usage"    fill="hsl(172, 80%, 42%)"  radius={[4, 4, 0, 0]} />
                <Bar dataKey="consideration" name="Would Consider"   fill="hsl(260, 60%, 55%)"  radius={[4, 4, 0, 0]} opacity={0.75} />
                <Legend wrapperStyle={{ fontSize: 12, color: "hsl(215, 15%, 50%)" }} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* ── 4. Brand Associations & Positioning + 5. Customer Loyalty & NPS */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Brand Associations & Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-gradient-card rounded-xl border border-border/40 p-6 glow-border"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Brand Associations & Positioning</h3>
                <p className="text-xs text-muted-foreground">Your brand vs. top competitor on key attributes</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={290}>
              <RadarChart data={associationData}>
                <PolarGrid stroke="hsl(222, 25%, 18%)" />
                <PolarAngleAxis dataKey="attribute" tick={{ fill: "hsl(215, 15%, 55%)", fontSize: 11 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: "hsl(215, 15%, 40%)", fontSize: 9 }} />
                <Radar name="BrandPulse" dataKey="brand"      stroke="hsl(172, 80%, 42%)" fill="hsl(172, 80%, 42%)" fillOpacity={0.2} strokeWidth={2} />
                <Radar name="Competitor" dataKey="competitor" stroke="hsl(260, 60%, 55%)" fill="hsl(260, 60%, 55%)" fillOpacity={0.1} strokeWidth={2} />
                <Legend wrapperStyle={{ fontSize: 12, color: "hsl(215, 15%, 50%)" }} />
                <Tooltip contentStyle={tooltipStyle} />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Customer Loyalty & Advocacy — NPS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="bg-gradient-card rounded-xl border border-border/40 p-6 glow-border"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Heart className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Customer Loyalty & Advocacy</h3>
                <p className="text-xs text-muted-foreground">Net Promoter Score & recommendation likelihood</p>
              </div>
            </div>

            {/* NPS score */}
            <div className="flex flex-col items-center mb-6">
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 180 }}
                className="text-8xl font-bold text-gradient leading-none"
              >
                {npsScore}
              </motion.p>
              <p className="text-sm text-muted-foreground mt-2">Net Promoter Score</p>
              <span className="mt-3 text-xs bg-primary/15 text-primary px-3 py-1 rounded-full font-medium">
                Excellent — industry avg: 32
              </span>
            </div>

            {/* Stacked bar */}
            <div className="h-4 rounded-full overflow-hidden flex mb-4">
              {npsBreakdown.map((seg) => (
                <div
                  key={seg.name}
                  className="h-full"
                  style={{ width: `${seg.value}%`, backgroundColor: seg.color }}
                />
              ))}
            </div>

            {/* Breakdown */}
            <div className="grid grid-cols-3 gap-3">
              {npsBreakdown.map((seg) => (
                <div key={seg.name} className="text-center p-3 rounded-lg bg-secondary/30">
                  <p className="text-2xl font-bold text-foreground">{seg.value}%</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{seg.name}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Based on 3,241 survey responses · Updated monthly
            </p>
          </motion.div>
        </div>

        {/* ── Live Mentions Feed ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="bg-gradient-card rounded-xl border border-border/40 p-6 glow-border"
        >
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                Live Mentions
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
              </h3>
              <p className="text-xs text-muted-foreground">Real-time brand mentions across the web</p>
            </div>
          </div>
          <div className="space-y-3">
            {recentMentions.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="flex items-start gap-4 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <div className="shrink-0 h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-muted-foreground">
                  {m.platform[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium text-foreground">{m.user}</span>
                    <span className="text-xs text-muted-foreground">• {m.platform}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${sentimentColors[m.sentiment]}`}>
                      {m.sentiment}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5 truncate">{m.text}</p>
                </div>
                <span className="text-xs text-muted-foreground shrink-0">{m.time}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Suggestions */}
        <AISuggestionsPanel />
      </main>
    </div>
  );
};

export default Dashboard;
