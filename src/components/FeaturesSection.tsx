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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need to <span className="text-gradient">Dominate</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful tools that work together to give your brand an unfair advantage online.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-gradient-card rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
