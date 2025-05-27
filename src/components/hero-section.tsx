import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-gradient text-white section-padding pt-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              5MT - Expert Manufacturing & Construction Consultancy
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Specialized expertise in manufacturing of bottled water, beverages, PVC/HDPE/PPR pipes, and plastic products. 
              Plus comprehensive construction services for high-rise apartments, villas, malls, and commercial complexes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => scrollToSection("services")}
              >
                <ArrowRight className="mr-2 h-5 w-5" />
                Explore Services
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-primary hover:bg-white/80 hover:text-primary"
                onClick={() => scrollToSection("contact")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Get Quote
              </Button>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern industrial facility" 
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
