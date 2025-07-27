import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            संपर्क साधा
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            मदतीची गरज आहे किंवा आमच्या कामाबद्दल अधिक जाणून घ्यायचे आहे? 
            आम्ही तुमच्यासाठी उपलब्ध आहोत.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">संपर्क माहिती</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">पत्ता</h4>
                    <p className="text-muted-foreground">
                      चावा क्रांतिवीर सामाजिक संस्था<br />
                      महाराष्ट्र राज्य, भारत
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    📞
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">फोन</h4>
                    <p className="text-muted-foreground">
                      २४ तास आपत्कालीन हेल्पलाइन उपलब्ध
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">ई-मेल</h4>
                    <p className="text-muted-foreground">
                      info@chavakrantivir.org
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    🕐
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">कार्यकाळ</h4>
                    <p className="text-muted-foreground">
                      सोमवार - शनिवार: सकाळी ९ ते संध्याकाळी ७<br />
                      आपत्कालीन परिस्थितीत २४/७ उपलब्ध
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20 mt-6">
              <CardHeader>
                <CardTitle className="text-primary">आपत्कालीन मदत</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  तातडीची कायदेशीर मदत किंवा सामाजिक न्यायासाठी
                </p>
                <Button variant="hero" className="w-full">
                  आपत्कालीन हेल्पलाइन: १०० (तोल फ्री)
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">संदेश पाठवा</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground">नाव *</label>
                  <Input placeholder="तुमचे पूर्ण नाव" className="mt-1" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground">फोन नंबर *</label>
                  <Input placeholder="तुमचा फोन नंबर" className="mt-1" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground">ई-मेल</label>
                  <Input placeholder="तुमचा ई-मेल पत्ता" className="mt-1" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground">मदतीचा प्रकार</label>
                  <select className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background">
                    <option>कायदेशीर मदत</option>
                    <option>सामाजिक न्याय</option>
                    <option>शिक्षण सहाय्य</option>
                    <option>आरोग्य सेवा</option>
                    <option>अन्न सुरक्षा</option>
                    <option>गृहनिर्माण मदत</option>
                    <option>इतर</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground">संदेश *</label>
                  <Textarea 
                    placeholder="तुमची समस्या किंवा मदतीची गरज याबद्दल तपशीलवार लिहा..."
                    className="mt-1 min-h-[120px]"
                  />
                </div>
                
                <Button variant="hero" className="w-full">
                  संदेश पाठवा
                </Button>
                
                <p className="text-xs text-muted-foreground">
                  * आवश्यक माहिती. आम्ही तुमची गुप्तता राखतो आणि २४ तासांत उत्तर देतो.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;