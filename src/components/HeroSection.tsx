import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { Link } from "react-router-dom";
import AmbientParticles from "@/components/AmbientParticles";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Layered backgrounds */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-mesh" />
      <AmbientParticles count={40} />
      
      {/* Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/6 blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm text-primary text-sm mb-10"
          >
            <Sparkles className="h-4 w-4" />
            AI-Powered Brand Intelligence Platform
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
            <span className="text-foreground">Track Your Brand.</span>
            <br />
            <span className="text-gradient">Grow Smarter.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Monitor your online presence across every channel. Get AI-driven insights 
            and actionable recommendations to dominate your market.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="lg" className="text-base px-10 h-13 text-lg" asChild>
              <Link to="/dashboard">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-10 h-13 text-lg" asChild>
              <Link to="/dashboard">
                <Play className="mr-2 h-4 w-4" /> Watch Demo
              </Link>
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 flex flex-col items-center gap-3"
          >
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-primary/40 to-accent/40"
                  style={{ animationDelay: `${i * 0.5}s` }}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted by <span className="text-foreground font-semibold">2,400+</span> brands worldwide
            </p>
          </motion.div>
        </motion.div>

        {/* Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-primary/40 via-border/30 to-transparent shadow-float">
            <div className="bg-card/90 backdrop-blur-xl rounded-2xl p-1">
              <div className="bg-gradient-card rounded-xl p-6 border border-border/20">
                <DashboardPreview />
              </div>
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
      { label: "Brand Score", value: "87/100", change: "+4.2%", color: "text-primary" },
      { label: "Mentions", value: "12,483", change: "+18.7%", color: "text-primary" },
      { label: "Sentiment", value: "92%", change: "+2.1%", color: "text-primary" },
    ].map((m) => (
      <div key={m.label} className="bg-secondary/40 rounded-lg p-4 border border-border/20">
        <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-wider">{m.label}</p>
        <p className="text-2xl font-bold text-foreground">{m.value}</p>
        <p className={`text-xs font-medium ${m.color}`}>{m.change}</p>
      </div>
    ))}
    <div className="col-span-2 bg-secondary/40 rounded-lg p-4 h-36 flex items-end gap-1 border border-border/20">
      {[40, 55, 35, 70, 60, 80, 75, 90, 85, 65, 78, 88, 72, 95].map((h, i) => (
        <div key={i} className="flex-1 rounded-t overflow-hidden" style={{ height: `${h}%` }}>
          <div className="w-full h-full bg-gradient-to-t from-primary/20 to-primary/60 rounded-t" />
        </div>
      ))}
    </div>
    <div className="bg-secondary/40 rounded-lg p-4 h-36 border border-border/20 flex flex-col justify-between">
      <div>
        <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">AI Insight</p>
        <p className="text-xs text-foreground/80 leading-relaxed">
          Instagram engagement rose 24% this week. Post frequency is optimal — consider expanding to Reels.
        </p>
      </div>
      <div className="flex items-center gap-1 text-[10px] text-primary font-medium">
        <Sparkles className="h-3 w-3" /> AI-generated
      </div>
    </div>
  </div>
);

export default HeroSection;
