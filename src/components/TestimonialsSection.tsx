
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Hotel Manager",
      hotel: "The Grand Plaza",
      content: "Checkinly transformed our front desk operations. Check-in times reduced by 70% and guest satisfaction scores increased dramatically.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Operations Director",
      hotel: "Coastal Resort & Spa",
      content: "The seamless integration with our existing systems was impressive. Our staff loves how intuitive the platform is.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emma Thompson",
      role: "Front Desk Supervisor",
      hotel: "City Center Inn",
      content: "Guest feedback has been overwhelmingly positive. The digital check-in process feels modern and secure.",
      rating: 5,
      avatar: "ET"
    },
    {
      name: "James Park",
      role: "General Manager",
      hotel: "Mountain View Lodge",
      content: "Checkinly's 24/7 support and reliable system have made our operations smoother than ever before.",
      rating: 5,
      avatar: "JP"
    }
  ];

  const hotelLogos = [
    { name: "The Grand Plaza", logo: "TGP" },
    { name: "Coastal Resort", logo: "CR" },
    { name: "City Center Inn", logo: "CCI" },
    { name: "Mountain View Lodge", logo: "MVL" },
    { name: "Harbor Hotel", logo: "HH" },
    { name: "Summit Suites", logo: "SS" }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center heading-spacing">
          <h2 className="text-foreground text-spacing">
            Trusted by hotels <span className="text-primary">worldwide</span>
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Join hundreds of hotels that have transformed their guest experience with Checkinly
          </p>
        </div>

        {/* Hotel Logos */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {hotelLogos.map((hotel, index) => (
              <div key={index} className="flex items-center space-x-2 hover-scale transition-smooth">
                <div className="w-12 h-12 bg-gradient-primary rounded-large flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">{hotel.logo}</span>
                </div>
                <span className="text-sm font-medium text-muted-foreground hidden md:block">{hotel.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2">
                  <Card className="h-full hover-lift transition-smooth border-border/30 rounded-large shadow-modern bg-card">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      
                      <blockquote className="text-base text-foreground mb-8 leading-relaxed italic">
                        "{testimonial.content}"
                      </blockquote>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                          <span className="text-primary-foreground font-semibold text-sm">
                            {testimonial.avatar}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.role}, {testimonial.hotel}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
