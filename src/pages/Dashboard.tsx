import { motion } from "framer-motion";
import {
  Activity,
  ArrowUp,
  ArrowDown,
  BarChart3,
  Bell,
  Brain,
  Globe,
  MessageSquare,
  Star,
  TrendingUp,
  Users,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
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
} from "recharts";

const trendData = [
  { name: "Jan", mentions: 2400, sentiment: 78 },
  { name: "Feb", mentions: 3200, sentiment: 82 },
  { name: "Mar", mentions: 2800, sentiment: 79 },
  { name: "Apr", mentions: 4100, sentiment: 85 },
  { name: "May", mentions: 3600, sentiment: 88 },
  { name: "Jun", mentions: 4800, sentiment: 91 },
  { name: "Jul", mentions: 5200, sentiment: 92 },
];

const channelData = [
  { name: "Instagram", value: 38 },
  { name: "Twitter/X", value: 28 },
  { name: "LinkedIn", value: 18 },
  { name: "News", value: 10 },
  { name: "Reddit", value: 6 },
];

const aiSuggestions = [
  {
    priority: "high" as const,
    title: "Increase LinkedIn Posting Frequency",
    description: "Your LinkedIn engagement is 40% below industry average. Posting 3x/week with thought leadership content could boost visibility by an estimated 60%.",
    impact: "+60% visibility",
  },
  {
    priority: "medium" as const,
    title: "Respond to Negative Reviews on Google",
    description: "You have 12 unanswered negative reviews from the past 30 days. Timely responses improve sentiment scores and show customers you care.",
    impact: "+8% sentiment",
  },
  {
    priority: "high" as const,
    title: "Capitalize on Viral Mention",
    description: "A tech influencer (450K followers) mentioned your product positively. Engage with their post and consider a collaboration to amplify reach.",
    impact: "+25K reach",
  },
  {
    priority: "low" as const,
    title: "Update Brand Bio Across Platforms",
    description: "Your bio on Twitter and Instagram doesn't include your latest product launch. Consistent messaging strengthens brand recall.",
    impact: "+5% consistency",
  },
];

const metrics = [
  { label: "Brand Score", value: "87", suffix: "/100", change: 4.2, icon: Star, positive: true },
  { label: "Total Mentions", value: "12,483", change: 18.7, icon: MessageSquare, positive: true },
  { label: "Sentiment", value: "92%", change: 2.1, icon: TrendingUp, positive: true },
  { label: "Audience Reach", value: "2.4M", change: -3.1, icon: Users, positive: false },
];

const priorityColors = {
  high: "text-destructive border-destructive/30 bg-destructive/5",
  medium: "text-warning border-warning/30 bg-warning/5",
  low: "text-primary border-primary/30 bg-primary/5",
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar-like top bar */}
      <header className="border-b border-border glass sticky top-0 z-50">
        <div className="container mx-auto px-6 flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            <span className="font-bold text-foreground">BrandPulse</span>
          </Link>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <button className="relative hover:text-foreground transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-primary" />
            </button>
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-xs">
              BP
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Greeting */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">Brand Overview</h1>
          <p className="text-muted-foreground text-sm">Here's how your brand is performing this month.</p>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-gradient-card border border-border/50 rounded-xl p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-muted-foreground">{m.label}</span>
                <m.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-3xl font-bold text-foreground">
                {m.value}
                {m.suffix && <span className="text-lg text-muted-foreground">{m.suffix}</span>}
              </p>
              <div className={`flex items-center gap-1 mt-1 text-xs ${m.positive ? "text-primary" : "text-destructive"}`}>
                {m.positive ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                {Math.abs(m.change)}% from last month
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-gradient-card border border-border/50 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold text-foreground">Mentions & Sentiment</h3>
                <p className="text-xs text-muted-foreground">7-month trend</p>
              </div>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="mentionGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(172 66% 40%)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="hsl(172 66% 40%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 20% 18%)" />
                <XAxis dataKey="name" tick={{ fill: "hsl(215 15% 55%)", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "hsl(215 15% 55%)", fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "hsl(220 25% 10%)",
                    border: "1px solid hsl(220 20% 18%)",
                    borderRadius: 8,
                    color: "hsl(210 20% 92%)",
                    fontSize: 12,
                  }}
                />
                <Area type="monotone" dataKey="mentions" stroke="hsl(172 66% 40%)" fill="url(#mentionGrad)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-card border border-border/50 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold text-foreground">By Channel</h3>
                <p className="text-xs text-muted-foreground">Mention distribution</p>
              </div>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={channelData} layout="vertical">
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="name" tick={{ fill: "hsl(215 15% 55%)", fontSize: 11 }} axisLine={false} tickLine={false} width={70} />
                <Bar dataKey="value" fill="hsl(172 66% 40%)" radius={[0, 4, 4, 0]} barSize={16} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* AI Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Brain className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">AI Suggestions</h2>
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full ml-1">
              <Sparkles className="inline h-3 w-3 mr-1" />
              {aiSuggestions.length} new
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {aiSuggestions.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="bg-gradient-card border border-border/50 rounded-xl p-5 hover:border-primary/20 transition-colors group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className={`text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full border ${priorityColors[s.priority]}`}>
                    {s.priority} priority
                  </span>
                  <span className="text-xs text-primary font-medium">{s.impact}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2 text-sm">{s.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{s.description}</p>
                <div className="flex gap-2">
                  <Button variant="hero" size="sm" className="text-xs h-7 px-3">
                    <CheckCircle2 className="h-3 w-3 mr-1" /> Apply
                  </Button>
                  <Button variant="ghost" size="sm" className="text-xs h-7 px-3 text-muted-foreground">
                    Dismiss
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;
