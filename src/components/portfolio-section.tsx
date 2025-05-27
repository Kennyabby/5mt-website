export default function PortfolioSection() {
  const projects = [
    {
      title: "Luxury Apartment Complex",
      description: "40-story residential development",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Beverage Manufacturing Plant", 
      description: "State-of-the-art production facility",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Metropolitan Shopping Center",
      description: "Large-scale retail development", 
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Executive Villa Development",
      description: "Premium residential project",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "PVC Pipe Manufacturing",
      description: "Advanced extrusion facility",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "High-Rise Construction",
      description: "Multi-tower commercial complex",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    }
  ];

  return (
    <section id="portfolio" className="bg-gradient-to-r from-slate-50 to-blue-50 section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing our expertise across manufacturing and construction projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-item relative rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="portfolio-overlay absolute inset-0 flex items-end p-6">
                <div className="text-white">
                  <h5 className="text-xl font-semibold mb-1">{project.title}</h5>
                  <p className="text-white/90">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
