import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import bloodDonation1 from "@/assets/blood-donation-1.jpg";
import bloodDonation2 from "@/assets/blood-donation-2.jpg";

const BloodDonation = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              ३ वर्षांपासून सतत सेवा
            </Badge>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            छत्रपतींच्या जन्मदिवशी रक्तदान शिबीर
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            छत्रपती शिवाजी महाराजांच्या जन्मदिवसाच्या निमित्ताने दरवर्षी आयोजित केले जाणारे रक्तदान शिबीर
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="overflow-hidden shadow-cultural border-primary/20">
            <div className="aspect-video">
              <img 
                src={bloodDonation1} 
                alt="Blood donation camp"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-3">
                <span className="text-3xl">🩸</span>
                रक्तदान महादान
              </CardTitle>
              <CardDescription className="text-lg">
                जीव वाचवण्याचे पुण्य कार्य
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                गेल्या ३ वर्षांपासून आम्ही छत्रपती शिवाजी महाराजांच्या जन्मदिवसाच्या शुभ दिवशी 
                रक्तदान शिबीराचे आयोजन करत आहोत. या उपक्रमाद्वारे अनेक जीव वाचवण्यात यश आले आहे.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-primary border-primary">
                  वार्षिक कार्यक्रम
                </Badge>
                <Badge variant="outline" className="text-primary border-primary">
                  सामुदायिक सेवा
                </Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden shadow-cultural border-primary/20">
            <div className="aspect-video">
              <img 
                src={bloodDonation2} 
                alt="Community participation in blood donation"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-3">
                <span className="text-3xl">🤝</span>
                समुदायिक सहभाग
              </CardTitle>
              <CardDescription className="text-lg">
                स्वयंसेवकांचे अतुलनीय योगदान
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                आमच्या या उपक्रमात स्थानिक डॉक्टर, पोलीस अधिकारी, आणि समाजातील सर्व घटकांचा 
                सहभाग असतो. प्रत्येक वर्षी मोठ्या संख्येने लोक रक्तदान करून मानवसेवेत सहभागी होतात.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-primary border-primary">
                  ३ वर्षांचा अनुभव
                </Badge>
                <Badge variant="outline" className="text-primary border-primary">
                  मानवसेवा
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gradient-to-r from-red-50 to-primary/5 rounded-2xl p-8 border border-primary/10">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
              <span className="text-3xl">🎯</span>
              आमचे उद्दिष्ट
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              छत्रपती शिवाजी महाराजांच्या आदर्शांनुसार परोपकार आणि मानवसेवेचे कार्य करणे. 
              रक्तदान शिबीराद्वारे आम्ही अनेक आजारी व्यक्तींना नवजीवन देण्याचे काम करतो.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-muted-foreground">वर्षांचा अनुभव</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">रक्तदाते</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">∞</div>
                <div className="text-muted-foreground">वाचवलेले जीव</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BloodDonation;