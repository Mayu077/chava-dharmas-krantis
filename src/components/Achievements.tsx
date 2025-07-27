import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import roadSuccess1 from "@/assets/road-success-1.jpg";
import roadSuccess2 from "@/assets/road-success-2.jpg";

const Achievements = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            आमच्या यशाच्या गोष्टी
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            सामान्य जनतेसाठी केलेल्या आमच्या कामाचे काही उदाहरण
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="overflow-hidden shadow-cultural">
            <div className="aspect-video">
              <img 
                src={roadSuccess1} 
                alt="Road repair work"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                रस्ते दुरुस्तीचे काम
              </CardTitle>
              <CardDescription className="text-lg">
                सरकारी यंत्रणेशी पत्रव्यवहार करून रस्त्यांची दुरुस्ती करून घेतली
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                आमच्या संस्थेने स्थानिक रहिवाशांच्या समस्यांचे ऐकून त्यांच्या गरजेनुसार सरकारी विभागांना 
                पत्र लिहून रस्त्यांची दुरुस्ती करून घेतली. यामुळे स्थानिक लोकांचे प्रवासाचे त्रास कमी झाले.
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden shadow-cultural">
            <div className="aspect-video">
              <img 
                src={roadSuccess2} 
                alt="Community development work"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                समुदायिक विकास
              </CardTitle>
              <CardDescription className="text-lg">
                स्थानिक समुदायाच्या विकासासाठी सातत्याने काम
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                आम्ही फक्त तात्पुरती मदत करत नाही तर दीर्घकालीन समाधान शोधण्यावर भर देतो. 
                समुदायाच्या एकत्रित प्रयत्नांमुळे अनेक समस्यांचे निराकरण झाले आहे.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              आमचा दृष्टिकोन
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              "पत्रव्यवहारातून शासनाकडून रस्ते दुरुस्त करून घेतले" - हे आमच्या कार्यपद्धतीचे उत्तम उदाहरण आहे. 
              आम्ही योग्य माध्यमांचा वापर करून लोकांच्या समस्यांचे निराकरण करतो.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;