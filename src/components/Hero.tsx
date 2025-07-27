import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-shivaji.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-primary/60"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          चावा क्रांतिवीर<br />
          <span className="text-accent">सामाजिक संस्था</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 text-white/90">
          महाराष्ट्र राज्य
        </p>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/80">
          छत्रपती शिवाजी आणि संभाजी महाराजांच्या मूल्यांवर आधारित<br />
          सामान्य लोकांची सेवा आणि न्यायासाठी संघर्ष
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl">
            आमच्या मिशनबद्दल जाणून घ्या
          </Button>
          <Button variant="outline" size="xl" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
            संपर्क साधा
          </Button>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/70">
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">१०००+</div>
            <div className="text-sm">मदत केलेले लोक</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">५०+</div>
            <div className="text-sm">न्याय मिळवलेले प्रकरणे</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">२४/७</div>
            <div className="text-sm">सेवा उपलब्ध</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;