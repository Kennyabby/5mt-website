export default function StatsSection() {
  const stats = [
    {
      number: "150+",
      label: "Projects Completed",
      description: "Successful manufacturing and construction projects delivered"
    },
    {
      number: "25+",
      label: "Years Experience", 
      description: "Industry expertise across manufacturing and construction"
    },
    {
      number: "200+",
      label: "Satisfied Clients",
      description: "Building lasting partnerships worldwide"
    },
    {
      number: "50+",
      label: "Expert Team",
      description: "Skilled professionals and consultants"
    }
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-orange-50 section-padding">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="stat-number mb-2">{stat.number}</div>
              <h5 className="text-xl font-semibold mb-2">{stat.label}</h5>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
