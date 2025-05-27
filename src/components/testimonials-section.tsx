import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, Pure Water Industries",
      content: "Industrial Solutions delivered our bottled water facility on time and within budget. Their expertise in manufacturing setup is unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen", 
      position: "Director, Retail Developments",
      content: "The construction of our shopping mall exceeded all expectations. Professional team with incredible attention to detail.",
      rating: 5
    },
    {
      name: "Ahmed Al-Rashid",
      position: "Owner, Gulf Plastics", 
      content: "Outstanding work on our PVC pipe manufacturing setup. Their technical knowledge and support throughout the project was exceptional.",
      rating: 5
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What our clients say about our work
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg h-full">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <h6 className="font-semibold text-gray-900 mb-1">{testimonial.name}</h6>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
