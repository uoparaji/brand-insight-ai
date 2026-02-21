import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Sparkles, CheckCircle2, ChevronRight, Zap, Target, TrendingUp, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypingEffect } from "@/hooks/useTypingEffect";

const suggestions = [
  {
    priority: "critical" as const,
    icon: Zap,
    title: "Capitalize on Viral Mention",
    description: "Tech influencer @sarahdev (450K followers) mentioned your product positively 2 hours ago. Engage now — the engagement window peaks within 4 hours. A timely reply could generate 25K+ organic impressions.",
    impact: "+25K reach",
    impactColor: "text-primary",
    action: "Engage Now",
  },
  {
    priority: "high" as const,
    icon: Target,
    title: "Increase LinkedIn Posting Frequency",
    description: "Your LinkedIn engagement is 40% below industry average. Analysis shows posting 3x/week with thought leadership content could boost B2B visibility by an estimated 60%. Optimal posting times: Tue/Wed/Thu 9-11 AM.",
    impact: "+60% visibility",
    impactColor: "text-primary",
    action: "View Strategy",
  },
  {
    priority: "medium" as const,
    icon: MessageSquare,
    title: "Respond to 12 Negative Reviews",
    description: "You have 12 unanswered negative Google reviews from the past 30 days. AI-drafted responses are ready for your approval. Brands that respond within 24 hours see a 33% higher conversion rate.",
    impact: "+8% sentiment",
    impactColor: "text-gradient-warm",
    action: "Review Drafts",
  },
  {
    priority: "low" as const,
    icon: TrendingUp,
    title: "Competitor Gap: Video Content",
    description: "Your top competitor increased short-form video content by 200% this quarter, resulting in 3x engagement growth. Your brand has posted 0 videos. Starting a weekly video series is recommended.",
    impact: "3x engagement",
    impactColor: "text-gradient-accent",
    action: "See Playbook",
  },
];

const priorityConfig = {
  critical: { label: "CRITICAL", bg: "bg-destructive/10", text: "text-destructive", border: "border-destructive/30", glow: "shadow-[0_0_20px_-5px_hsl(0_72%_51%/0.3)]" },
  high: { label: "HIGH", bg: "bg-warning/10", text: "text-warning", border: "border-warning/30", glow: "" },
  medium: { label: "MEDIUM", bg: "bg-primary/10", text: "text-primary", border: "border-primary/30", glow: "" },
  low: { label: "LOW", bg: "bg-muted", text: "text-muted-foreground", border: "border-border", glow: "" },
};

const AiInsightTyping = ({ text, delay }: { text: string; delay: number }) => {
  const { displayed, isDone } = useTypingEffect(text, 18, delay);
  return (
    <span>
      {displayed}
      {!isDone && <span className="inline-block w-0.5 h-4 bg-primary ml-0.5 animate-typing-cursor" />}
    </span>
  );
};

const AISuggestionsPanel = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
          <Brain className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            AI Recommendations
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
              className="inline-flex items-center gap-1 text-xs bg-primary/15 text-primary px-2.5 py-1 rounded-full font-medium"
            >
              <Sparkles className="h-3 w-3" />
              4 new insights
            </motion.span>
          </h2>
          <p className="text-sm text-muted-foreground">Personalized actions to improve your brand presence</p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        <AnimatePresence>
          {isVisible && suggestions.map((s, i) => {
            const config = priorityConfig[s.priority];
            const isExpanded = activeIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.15, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                onClick={() => setActiveIndex(isExpanded ? null : i)}
                className={`relative group cursor-pointer bg-gradient-card rounded-xl border ${config.border} p-5 
                  hover:border-primary/40 transition-all duration-500 ${config.glow}
                  ${isExpanded ? "ring-1 ring-primary/20" : ""}`}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-transparent" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`h-7 w-7 rounded-lg ${config.bg} flex items-center justify-center`}>
                        <s.icon className={`h-3.5 w-3.5 ${config.text}`} />
                      </div>
                      <span className={`text-[10px] uppercase font-bold tracking-wider ${config.text}`}>
                        {config.label}
                      </span>
                    </div>
                    <span className={`text-xs font-semibold ${s.impactColor}`}>{s.impact}</span>
                  </div>

                  <h4 className="font-semibold text-foreground mb-2">{s.title}</h4>
                  
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {isExpanded ? (
                      <AiInsightTyping text={s.description} delay={0} />
                    ) : (
                      <p className="line-clamp-2">{s.description}</p>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/30">
                    <Button variant="hero" size="sm" className="text-xs h-8 px-4">
                      {s.action} <ChevronRight className="h-3 w-3 ml-1" />
                    </Button>
                    <span className="text-[10px] text-muted-foreground">
                      {isExpanded ? "Click to collapse" : "Click for details"}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default AISuggestionsPanel;
