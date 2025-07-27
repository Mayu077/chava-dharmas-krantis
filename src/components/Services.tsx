import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: "⚖️",
      title: "कायदेशीर मदत",
      description: "विनामूल्य कायदेशीर सल्ला आणि न्यायालयीन प्रकरणांमध्ये मदत",
      features: ["विनामूल्य सल्ला", "न्यायालयीन प्रतिनिधित्व", "कायदेशीर दस्तऐवज"]
    },
    {
      icon: "🛡️",
      title: "सामाजिक न्याय",
      description: "अन्याय आणि भ्रष्टाचाराविरुद्ध लढा आणि न्याय मिळवणे",
      features: ["भ्रष्टाचार विरोधी कारवाई", "सामाजिक न्याय", "हक्क संरक्षण"]
    },
    {
      icon: "📚",
      title: "शिक्षण सहाय्य",
      description: "गरीब मुलांसाठी शिक्षण सुविधा आणि शिष्यवृत्ती",
      features: ["शिष्यवृत्ती", "शैक्षणिक मार्गदर्शन", "पुस्तके आणि साहित्य"]
    },
    {
      icon: "🏥",
      title: "आरोग्य सेवा",
      description: "मूलभूत आरोग्य सेवा आणि वैद्यकीय मदत",
      features: ["विनामूल्य तपासणी", "औषध सहाय्य", "आरोग्य शिबिरे"]
    },
    {
      icon: "🍽️",
      title: "अन्न सुरक्षा",
      description: "गरजू लोकांसाठी अन्न वाटप आणि पोषण कार्यक्रम",
      features: ["अन्न वाटप", "पोषण आहार", "आपत्कालीन मदत"]
    },
    {
      icon: "🏠",
      title: "गृहनिर्माण मदत",
      description: "घरकुल योजना आणि गृहनिर्माण संबंधी मार्गदर्शन",
      features: ["योजना मार्गदर्शन", "कागदपत्र मदत", "सरकारी योजना"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            आमच्या सेवा
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            सामान्य लोकांच्या कल्याणासाठी आम्ही विविध क्षेत्रात सेवा पुरवितो
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-primary/20 hover:shadow-cultural transition-smooth hover:scale-105">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center justify-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="cultural" size="sm" className="w-full">
                  अधिक माहिती
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            सर्व सेवा पहा
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;