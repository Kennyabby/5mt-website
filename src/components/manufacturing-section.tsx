import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, PillBottle, Box, Check } from "lucide-react";

export default function ManufacturingSection() {
  const services = [
    {
      icon: Droplets,
      title: "Bottled Water & Beverages",
      image: "https://images.unsplash.com/photo-1563841930606-67e2bce48b78?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      description: "Complete setup and optimization of bottled water and beverage manufacturing facilities with state-of-the-art production lines.",
      features: [
        "Production line design",
        "Quality control systems", 
        "Packaging solutions"
      ]
    },
    {
      icon: PillBottle,
      title: "PVC, HDPE, PPR Pipes",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      description: "Specialized manufacturing solutions for PVC, HDPE, and PPR pipes and fittings with advanced extrusion technology.",
      features: [
        "Extrusion line setup",
        "Quality testing labs",
        "Custom fitting solutions"
      ]
    },
    {
      icon: Box,
      title: "Plastic Products",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      description: "Comprehensive plastic manufacturing solutions including injection molding, blow molding, and custom plastic product development.",
      features: [
        "Injection molding setup",
        "Custom tooling design",
        "Process optimization"
      ]
    }
  ];

  return (
    <section id="services" className="bg-white section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Manufacturing Solutions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive manufacturing consultancy and project implementation
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card-hover border-0 shadow-lg">
              <div className="relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-t-lg"
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
