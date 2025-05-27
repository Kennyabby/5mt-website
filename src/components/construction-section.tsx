import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Store, Check } from "lucide-react";

export default function ConstructionSection() {
  const services = [
    {
      icon: Building,
      title: "Residential Development",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      description: "Expert construction of high-rise apartments, luxury villas, and residential complexes with modern amenities and sustainable design.",
      features: [
        "High-rise apartments",
        "Luxury villas", 
        "Residential complexes",
        "Sustainable design"
      ]
    },
    {
      icon: Store,
      title: "Commercial Projects",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      description: "Large-scale commercial construction including supermarkets, hypermarkets, shopping malls, and entertainment complexes.",
      features: [
        "Shopping malls",
        "Supermarkets & hypermarkets",
        "Cinema complexes", 
        "Entertainment venues"
      ]
    }
  ];

  return (
    <section className="bg-gradient-to-l from-orange-50 to-blue-50 section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Construction Excellence</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From residential to commercial developments, building the future
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card-hover border-0 shadow-lg">
              <div className="relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-80 object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <service.icon className="h-8 w-8 text-primary" />
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
