import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">

      <div className="container mx-auto text-center py-6">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Zoe Pineda. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">Built with love and React.</p>
      </div>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
