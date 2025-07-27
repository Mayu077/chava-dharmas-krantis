const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">
              चावा क्रांतिवीर सामाजिक संस्था
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              छत्रपती शिवाजी आणि संभाजी महाराजांच्या आदर्शांवर आधारित, 
              सामान्य लोकांच्या हक्कांसाठी आणि न्यायासाठी कार्यरत संस्था.
            </p>
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">📍 महाराष्ट्र राज्य, भारत</p>
              <p className="mb-2">📞 आपत्कालीन हेल्पलाइन: १०० (तोल फ्री)</p>
              <p>✉️ info@chavakrantivir.org</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-4">महत्वाचे दुवे</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-smooth">आमच्याबद्दल</a></li>
              <li><a href="#services" className="hover:text-primary transition-smooth">सेवा</a></li>
              <li><a href="#values" className="hover:text-primary transition-smooth">मूल्ये</a></li>
              <li><a href="#contact" className="hover:text-primary transition-smooth">संपर्क</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-4">सेवा</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>कायदेशीर मदत</li>
              <li>सामाजिक न्याय</li>
              <li>शिक्षण सहाय्य</li>
              <li>आरोग्य सेवा</li>
              <li>अन्न सुरक्षा</li>
              <li>गृहनिर्माण मदत</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © २०२४ चावा क्रांतिवीर सामाजिक संस्था. सर्व हक्क राखीव.
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="text-sm text-muted-foreground">जय शिवराय!</span>
            <span className="text-sm text-muted-foreground">जय भवानी!</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;