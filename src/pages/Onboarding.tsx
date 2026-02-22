import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Building2,
  Globe,
  Target,
  Users,
  Sparkles,
  Activity,
  Check,
  Plus,
  X,
} from "lucide-react";
import AmbientParticles from "@/components/AmbientParticles";

interface StepConfig {
  id: string;
  icon: React.ReactNode;
  label: string;
  title: string;
  subtitle: string;
  placeholder: string;
  type: "input" | "textarea" | "multi-input";
  multiCount?: number;
  multiPlaceholders?: string[];
}

const steps: StepConfig[] = [
  {
    id: "brandName",
    icon: <Building2 className="h-6 w-6" />,
    label: "Brand Name",
    title: "What's your brand called?",
    subtitle: "We'll track every mention, hashtag, and conversation about your brand across the web.",
    placeholder: "e.g. Nike, Tesla, Stripe…",
    type: "input",
  },
  {
    id: "website",
    icon: <Globe className="h-6 w-6" />,
    label: "Website",
    title: "What's your brand's website?",
    subtitle: "We'll analyse your SEO performance, domain authority, and organic search visibility.",
    placeholder: "e.g. https://yourbrand.com",
    type: "input",
  },
  {
    id: "industry",
    icon: <Target className="h-6 w-6" />,
    label: "Industry",
    title: "What industry are you in?",
    subtitle: "This helps our AI benchmark you against relevant competitors and market trends.",
    placeholder: "e.g. SaaS, Fashion, Fintech, Healthcare…",
    type: "input",
  },
  {
    id: "competitors",
    icon: <Users className="h-6 w-6" />,
    label: "Competitors",
    title: "Who are your competitors?",
    subtitle: "Add as many competitors as you'd like. We'll compare brand scores, sentiment, and share of voice.",
    placeholder: "e.g. Brandwatch",
    type: "multi-input",
  },
  {
    id: "description",
    icon: <Sparkles className="h-6 w-6" />,
    label: "About",
    title: "Describe your brand in a sentence",
    subtitle: "Our AI will use this to understand your positioning and generate smarter recommendations.",
    placeholder: "e.g. We help small businesses automate their marketing…",
    type: "textarea",
  },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [inputValue, setInputValue] = useState("");
  const [multiValues, setMultiValues] = useState<string[]>([""]);
  const [direction, setDirection] = useState(1);
  const [isCompleting, setIsCompleting] = useState(false);

  const step = steps[currentStep];
  const totalSteps = steps.length;
  const progress = ((currentStep) / totalSteps) * 100;

  const canProceed = step.type === "multi-input"
    ? multiValues.some((v) => v.trim() !== "")
    : inputValue.trim() !== "";

  const handleNext = () => {
    if (!canProceed) return;

    const value = step.type === "multi-input"
      ? multiValues.filter((v) => v.trim() !== "")
      : inputValue;

    const newAnswers = { ...answers, [step.id]: value };
    setAnswers(newAnswers);

    if (currentStep < totalSteps - 1) {
      setDirection(1);
      setCurrentStep((s) => s + 1);
      setInputValue("");
      setMultiValues([""]);
    } else {
      setIsCompleting(true);
      setTimeout(() => navigate("/dashboard"), 2000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && canProceed) {
      e.preventDefault();
      handleNext();
    }
  };

  const variants = {
    enter: (d: number) => ({ opacity: 0, y: d > 0 ? 60 : -60, scale: 0.96 }),
    center: { opacity: 1, y: 0, scale: 1 },
    exit: (d: number) => ({ opacity: 0, y: d > 0 ? -60 : 60, scale: 0.96 }),
  };

  if (isCompleting) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-mesh" />
        <AmbientParticles count={30} />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="h-20 w-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6 shadow-glow"
          >
            <Check className="h-10 w-10 text-primary-foreground" />
          </motion.div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Setting up your dashboard</h2>
          <p className="text-muted-foreground">Analysing your brand with AI…</p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="h-1 bg-gradient-primary rounded-full mt-8 max-w-xs mx-auto"
          />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-mesh" />
      <AmbientParticles count={25} />

      {/* Orbs */}
      <div className="absolute top-1/4 left-1/6 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/5 w-[350px] h-[350px] rounded-full bg-accent/6 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
            <Activity className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg text-foreground tracking-tight">BrandPulse</span>
        </div>
        <span className="text-sm text-muted-foreground">
          Step {currentStep + 1} of {totalSteps}
        </span>
      </header>

      {/* Progress bar */}
      <div className="relative z-20 px-8">
        <div className="h-1 bg-secondary/50 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
        {/* Step dots */}
        <div className="flex justify-between mt-3">
          {steps.map((s, i) => (
            <div key={s.id} className="flex flex-col items-center gap-1">
              <div
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  i < currentStep
                    ? "bg-primary shadow-glow scale-100"
                    : i === currentStep
                    ? "bg-primary shadow-glow scale-125"
                    : "bg-secondary/60"
                }`}
              />
              <span className={`text-[10px] hidden sm:block transition-colors ${
                i <= currentStep ? "text-primary" : "text-muted-foreground/50"
              }`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center relative z-10 px-6">
        <div className="w-full max-w-xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="space-y-8"
            >
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 300 }}
                className="h-16 w-16 rounded-2xl bg-gradient-card border border-border/40 flex items-center justify-center text-primary shadow-glow glow-border"
              >
                {step.icon}
              </motion.div>

              {/* Question */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-3">
                  {step.title}
                </h1>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {step.subtitle}
                </p>
              </div>

              {/* Input */}
              <div className="space-y-3">
                {step.type === "input" && (
                  <Input
                    autoFocus
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={step.placeholder}
                    className="h-14 text-lg bg-secondary/30 border-border/40 focus:border-primary/60 rounded-xl px-5 placeholder:text-muted-foreground/50"
                  />
                )}
                {step.type === "textarea" && (
                  <Textarea
                    autoFocus
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={step.placeholder}
                    rows={3}
                    className="text-lg bg-secondary/30 border-border/40 focus:border-primary/60 rounded-xl px-5 py-4 placeholder:text-muted-foreground/50 resize-none"
                  />
                )}
                {step.type === "multi-input" && (
                  <div className="space-y-3">
                    {multiValues.map((val, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="flex items-center gap-2"
                      >
                        <Input
                          autoFocus={i === multiValues.length - 1}
                          value={val}
                          onChange={(e) => {
                            const updated = [...multiValues];
                            updated[i] = e.target.value;
                            setMultiValues(updated);
                          }}
                          onKeyDown={handleKeyDown}
                          placeholder={`Competitor ${i + 1}`}
                          className="h-13 text-base bg-secondary/30 border-border/40 focus:border-primary/60 rounded-xl px-5 placeholder:text-muted-foreground/50"
                        />
                        {multiValues.length > 1 && (
                          <button
                            onClick={() => setMultiValues(multiValues.filter((_, j) => j !== i))}
                            className="shrink-0 h-10 w-10 rounded-lg bg-secondary/40 border border-border/30 flex items-center justify-center text-muted-foreground hover:text-destructive hover:border-destructive/40 transition-colors"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        )}
                      </motion.div>
                    ))}
                    <button
                      type="button"
                      onClick={() => setMultiValues([...multiValues, ""])}
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors pt-1"
                    >
                      <Plus className="h-4 w-4" /> Add another competitor
                    </button>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-4">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={handleNext}
                  disabled={!canProceed}
                  className="text-base px-8 h-13 disabled:opacity-30"
                >
                  {currentStep === totalSteps - 1 ? "Launch Dashboard" : "Continue"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <span className="text-xs text-muted-foreground/50">
                  or press <kbd className="px-1.5 py-0.5 rounded bg-secondary/60 text-muted-foreground text-[10px] font-mono">Enter ↵</kbd>
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
