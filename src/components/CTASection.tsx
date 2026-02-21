import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 text-center relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Ready to Take Control?
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
          Join thousands of brands already using BrandPulse to grow their online presence.
        </p>
        <Button variant="hero" size="lg" className="text-base px-10" asChild>
          <Link to="/dashboard">
            Get Started Free <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default CTASection;
