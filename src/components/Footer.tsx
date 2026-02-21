import { Activity } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border bg-background">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Activity className="h-5 w-5 text-primary" />
        <span className="font-semibold text-foreground">BrandPulse</span>
      </div>
      <p className="text-sm text-muted-foreground">© 2026 BrandPulse. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
