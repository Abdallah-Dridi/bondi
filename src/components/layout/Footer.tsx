import { Github, Twitter, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-border bg-card/20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Brand and Copyright */}
        <div className="flex flex-col items-center lg:items-start">
          <a href="#" className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 relative">
                <div className="w-full h-full rounded-full border-2 border-foreground"/>
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary border-2 border-background"/>
            </div>
            <span className="font-display text-3xl font-semibold text-foreground">Bondi</span>
          </a>
          <p className="text-secondary text-center lg:text-left">
            Shared Finance, Reimagined.
          </p>
          <p className="text-sm text-secondary/50 mt-auto pt-4">
            © {new Date().getFullYear()} Bondi Protocol. All rights reserved.
          </p>
        </div>

        {/* Center Column: Navigation Links */}
        <div className="text-center">
          <h3 className="font-display text-xl font-semibold mb-4">Explore</h3>
          <div className="space-y-3">
            <p><a href="#features" className="text-secondary hover:text-primary transition-colors">Features</a></p>
            <p><a href="#how-it-works" className="text-secondary hover:text-primary transition-colors">How It Works</a></p>
            <p><a href="#ecosystem" className="text-secondary hover:text-primary transition-colors">Ecosystem</a></p>
            <p><a href="#testimonials" className="text-secondary hover:text-primary transition-colors">Testimonials</a></p>
          </div>
        </div>

        {/* Right Column: Social and Community */}
        <div className="text-center lg:text-right">
           <h3 className="font-display text-xl font-semibold mb-4">Community</h3>
           <div className="flex justify-center lg:justify-end space-x-4">
             <a href="#" className="p-3 bg-card rounded-lg border border-border hover:border-primary text-secondary hover:text-primary transition-all">
                <Twitter className="w-5 h-5" />
             </a>
             <a href="#" className="p-3 bg-card rounded-lg border border-border hover:border-primary text-secondary hover:text-primary transition-all">
                <Github className="w-5 h-5" />
             </a>
             <a href="#" className="p-3 bg-card rounded-lg border border-border hover:border-primary text-secondary hover:text-primary transition-all">
                <MessageSquare className="w-5 h-5" />
             </a>
           </div>
        </div>
      </div>
    </footer>
  );
}