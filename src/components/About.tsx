import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import socialServiceImage from "@/assets/social-service.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-cultural-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            आमच्याबद्दल
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            छत्रपती शिवाजी आणि संभाजी महाराजांच्या आदर्शांवर चालणारी आमची संस्था
            सामान्य लोकांच्या हक्कांसाठी आणि न्यायासाठी काम करते
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={socialServiceImage} 
              alt="सामाजिक सेवा" 
              className="rounded-lg shadow-cultural w-full"
            />
          </div>
          
          <div className="space-y-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  🛡️ आमचे ध्येय
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  सामान्य लोकांच्या हक्कांसाठी लढा देणे आणि त्यांना न्याय मिळवून देणे.
                  भ्रष्टाचार आणि अन्यायाविरुद्ध आवाज उठवणे.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  ⚔️ आमची मूल्ये
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  छत्रपती शिवाजी महाराज आणि संभाजी महाराजांच्या स्वराज्याच्या स्वप्नाप्रमाणे
                  धैर्य, न्याय आणि सेवाभावाने काम करणे.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  🤝 आमची सेवा
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  कायदेशीर मदत, सामाजिक न्याय, शिक्षण, आरोग्य सेवा आणि गरीब लोकांच्या 
                  मूलभूत गरजांची पूर्तता करणे.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;