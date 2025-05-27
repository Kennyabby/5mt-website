import { Award, Globe, Users, Clock } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    { icon: Award, label: "ISO Certified" },
    { icon: Globe, label: "Global Reach" },
    { icon: Users, label: "Expert Team" },
    { icon: Clock, label: "On-Time Delivery" }
  ];

  return (
    <section id="about" className="bg-white section-padding">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">About 5MT</h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              With over 25 years of experience, 5MT is a leading consultancy firm specializing in 
              manufacturing and construction projects across diverse industries.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our expertise spans from setting up bottled water and beverage production facilities, PVC/HDPE/PPR pipe 
              manufacturing, plastic products manufacturing to constructing high-rise apartments, villas, supermarkets, 
              malls, and cinema complexes. We combine technical excellence with innovative solutions to deliver projects that exceed expectations.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <highlight.icon className="h-6 w-6 text-primary" />
                  <span className="font-semibold text-gray-700">{highlight.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Construction team at work" 
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
