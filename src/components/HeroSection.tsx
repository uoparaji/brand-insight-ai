import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-16">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[120px] animate-pulse-glow" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm mb-8"
          >
            <Sparkles className="h-4 w-4" />
            AI-Powered Brand Intelligence
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
            Track Your Brand.
            <br />
            <span className="text-gradient">Grow Smarter.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Monitor your online presence across every channel. Get AI-driven insights 
            and actionable recommendations to strengthen your brand.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="text-base px-8" asChild>
              <Link to="/dashboard">
                Start Free Trial <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-8" asChild>
              <Link to="/">Watch Demo</Link>
            </Button>
          </div>
        </motion.div>

        {/* Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="glass rounded-xl p-1 shadow-glow">
            <div className="bg-card rounded-lg p-6">
              <DashboardPreview />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const DashboardPreview = () => (
  <div className="grid grid-cols-3 gap-4">
    {[
      { label: "Brand Score", value: "87/100", change: "+4.2%" },
      { label: "Mentions", value: "12,483", change: "+18.7%" },
      { label: "Sentiment", value: "92%", change: "+2.1%" },
    ].map((m) => (
      <div key={m.label} className="bg-secondary/50 rounded-lg p-4">
        <p className="text-xs text-muted-foreground mb-1">{m.label}</p>
        <p className="text-2xl font-bold text-foreground">{m.value}</p>
        <p className="text-xs text-primary">{m.change}</p>
      </div>
    ))}
    <div className="col-span-2 bg-secondary/50 rounded-lg p-4 h-32 flex items-end gap-1">
      {[40, 55, 35, 70, 60, 80, 75, 90, 85, 65, 78, 88].map((h, i) => (
        <div key={i} className="flex-1 bg-primary/30 rounded-t" style={{ height: `${h}%` }}>
          <div className="w-full bg-primary rounded-t" style={{ height: "60%" }} />
        </div>
      ))}
    </div>
    <div className="bg-secondary/50 rounded-lg p-4 h-32">
      <p className="text-xs text-muted-foreground mb-2">AI Insight</p>
      <p className="text-xs text-foreground leading-relaxed">
        Your Instagram engagement rose 24% this week. Consider increasing post frequency to capitalize on momentum.
      </p>
    </div>
  </div>
);

export default HeroSection;
