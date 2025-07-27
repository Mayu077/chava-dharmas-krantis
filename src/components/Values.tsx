import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import heritageImage from "@/assets/heritage.jpg";

const Values = () => {
  const values = [
    {
      title: "स्वराज्य",
      description: "शिवरायांच्या स्वराज्याच्या आदर्शानुसार स्वातंत्र्य आणि स्वशासन",
      quote: "स्वराज्य हा माझा जन्मसिद्ध हक्क आहे"
    },
    {
      title: "न्याय",
      description: "प्रत्येक व्यक्तीला न्याय मिळावा आणि अन्याय विरुद्ध संघर्ष",
      quote: "न्याय मिळेपर्यंत संघर्ष चालूच राहील"
    },
    {
      title: "सेवाभाव",
      description: "निःस्वार्थ सेवा आणि समाजकल्याणाची भावना",
      quote: "सेवा हीच सर्वोत्तम धर्माची ओळख"
    },
    {
      title: "धैर्य",
      description: "संभाजी महाराजांप्रमाणे कठीण परिस्थितीतही धैर्य",
      quote: "धैर्याने सत्याचा सामना करा"
    }
  ];

  return (
    <section id="values" className="py-20 bg-cultural-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            आमची मूल्ये
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            छत्रपती शिवाजी आणि संभाजी महाराजांच्या जीवनातील आदर्श मूल्ये
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={heritageImage} 
              alt="मराठी वारसा" 
              className="rounded-lg shadow-cultural w-full"
            />
            <div className="mt-6 p-6 bg-card rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold text-primary mb-3">छत्रपती शिवाजी महाराज</h3>
              <p className="text-muted-foreground italic">
                "परकीयांच्या गुलामगिरीत स्वातंत्र्य गमावणे हे अपमानजनक आहे. 
                स्वराज्य स्थापन करून प्रजेचे कल्याण करणे हे राजाचे कर्तव्य आहे."
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            {values.map((value, index) => (
              <Card key={index} className="border-primary/20 hover:shadow-cultural transition-smooth">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-3">
                    <span className="w-3 h-3 bg-primary rounded-full"></span>
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{value.description}</p>
                  <blockquote className="border-l-4 border-primary/30 pl-4 italic text-sm text-muted-foreground">
                    "{value.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-card p-8 rounded-lg border border-primary/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">आमची प्रतिज्ञा</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "छत्रपती शिवाजी आणि संभाजी महाराजांच्या पावित्र्यपूर्ण आदर्शांनुसार, 
              आम्ही सामान्य लोकांच्या हक्कांसाठी, न्यायासाठी आणि समाजकल्याणासाठी 
              आमचे संपूर्ण आयुष्य अर्पण करण्याची प्रतिज्ञा करतो. 
              हिंदवी स्वराज्याच्या स्वप्नाप्रमाणे आम्ही न्यायी समाज निर्माण करू."
            </p>
            <div className="mt-6 text-xl font-bold text-primary">
              जय शिवराय! जय भवानी!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;