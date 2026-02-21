import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { type LucideIcon } from "lucide-react";

interface MetricCardProps {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  change: number;
  icon: LucideIcon;
  delay?: number;
  format?: (n: number) => string;
}

const MetricCard = ({ label, value, suffix, prefix, change, icon: Icon, delay = 0, format }: MetricCardProps) => {
  const { count, ref } = useCountUp(value, 2200);
  const positive = change > 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-500 blur-xl" />
      <div className="relative bg-gradient-card rounded-xl border border-border/40 p-6 hover:border-primary/30 transition-all duration-500 overflow-hidden">
        {/* Subtle shimmer on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-primary/5 to-transparent bg-[length:200%_100%] animate-shimmer" />
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</span>
            <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon className="h-4 w-4 text-primary" />
            </div>
          </div>
          <p className="text-4xl font-bold text-foreground tracking-tight">
            {prefix}{format ? format(count) : count.toLocaleString()}{suffix}
          </p>
          <div className={`flex items-center gap-1.5 mt-2 text-sm font-medium ${positive ? "text-primary" : "text-destructive"}`}>
            <svg className={`h-3 w-3 ${positive ? "" : "rotate-180"}`} viewBox="0 0 12 12" fill="none">
              <path d="M6 2L10 7H2L6 2Z" fill="currentColor" />
            </svg>
            {Math.abs(change)}% from last month
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MetricCard;
