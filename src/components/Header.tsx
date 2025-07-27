import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-primary">चावा क्रांतिवीर</div>
            <div className="hidden md:block text-sm text-muted-foreground">सामाजिक संस्था महाराष्ट्र राज्य</div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth">मुख्यपृष्ठ</a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">आमच्याबद्दल</a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">सेवा</a>
            <a href="#values" className="text-foreground hover:text-primary transition-smooth">मूल्ये</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">संपर्क</a>
          </nav>
          
          <Button variant="cultural" size="sm">
            सहयोग करा
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;