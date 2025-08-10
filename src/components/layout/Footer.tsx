export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">B</span>
            </div>
            <span className="text-xl font-bold text-gradient">Bondi</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Discord</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bondi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}