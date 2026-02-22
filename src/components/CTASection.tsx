import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[150px] animate-pulse-glow" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 text-center relative z-10"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-5 tracking-tight">
          Ready to Take Control?
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
          Join thousands of brands already using BrandPulse to dominate their online presence.
        </p>
        <Button variant="hero" size="lg" className="text-lg px-12 h-14" asChild>
          <Link to="/onboarding">
            Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <p className="text-xs text-muted-foreground mt-4">No credit card required • 14-day free trial</p>
      </motion.div>
    </section>
  );
};

export default CTASection;
