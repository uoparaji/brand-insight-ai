import { motion } from "framer-motion";
import { BarChart3, Brain, Globe, Shield, TrendingUp, Zap } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Multi-Channel Monitoring",
    description: "Track mentions, reviews, and sentiment across social media, news, blogs, and forums in real-time.",
  },
  {
    icon: Brain,
    title: "AI Recommendations",
    description: "Get personalized, actionable suggestions powered by AI to improve your brand's online presence.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep-dive into your brand metrics with comprehensive dashboards and custom reports.",
  },
  {
    icon: TrendingUp,
    title: "Competitor Analysis",
    description: "Benchmark your performance against competitors and identify opportunities to outperform.",
  },
  {
    icon: Zap,
    title: "Real-Time Alerts",
    description: "Instant notifications for brand mentions, sentiment shifts, and emerging trends.",
  },
  {
    icon: Shield,
    title: "Reputation Management",
    description: "Proactively manage crises with early detection and AI-guided response strategies.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-28 bg-background relative">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-5 tracking-tight">
            Everything You Need to{" "}
            <span className="text-gradient">Dominate</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful tools that work together to give your brand an unfair advantage online.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative bg-gradient-card rounded-xl p-6 border border-border/30 glow-border hover:shadow-glow transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
