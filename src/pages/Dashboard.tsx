import { motion } from "framer-motion";
import {
  Activity,
  Bell,
  Globe,
  BarChart3,
  Star,
  MessageSquare,
  TrendingUp,
  Users,
  Search,
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
} from "recharts";
import MetricCard from "@/components/MetricCard";
import AISuggestionsPanel from "@/components/AISuggestionsPanel";
import AmbientParticles from "@/components/AmbientParticles";

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

const sentimentColors: Record<string, string> = {
  positive: "text-primary bg-primary/10",
  neutral: "text-muted-foreground bg-muted",
  negative: "text-destructive bg-destructive/10",
};

const metrics = [
  { label: "Brand Score", value: 87, suffix: "/100", change: 4.2, icon: Star },
  { label: "Total Mentions", value: 12483, change: 18.7, icon: MessageSquare, format: (n: number) => n.toLocaleString() },
  { label: "Positive Sentiment", value: 92, suffix: "%", change: 2.1, icon: TrendingUp },
  { label: "Audience Reach", value: 24, suffix: "M", change: -3.1, icon: Users, prefix: "" },
];

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

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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

        {/* Charts */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main chart */}
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
                <Tooltip
                  contentStyle={{
                    background: "hsl(222, 40%, 9%)",
                    border: "1px solid hsl(222, 25%, 18%)",
                    borderRadius: 12,
                    color: "hsl(210, 20%, 95%)",
                    fontSize: 12,
                    boxShadow: "0 8px 32px -8px rgba(0,0,0,0.5)",
                  }}
                />
                <Area type="monotone" dataKey="mentions" stroke="hsl(172, 80%, 42%)" fill="url(#mentionGrad)" strokeWidth={2.5} dot={false} />
                <Area type="monotone" dataKey="reach" stroke="hsl(260, 60%, 55%)" fill="url(#reachGrad)" strokeWidth={2} dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Sentiment + Channel */}
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

        {/* Live mentions feed */}
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
