import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Users, Zap } from "lucide-react";
import teamImage from "@/assets/team-illustration.jpg";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on delivering measurable business outcomes, not just technical implementations."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our certified consultants bring deep expertise across all major cloud platforms and technologies."
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Accelerate your time-to-value with our proven methodologies and best practices."
  },
  {
    icon: CheckCircle,
    title: "Trusted Partner",
    description: "We build long-term partnerships, supporting your journey from strategy to success."
  }
];

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Redawn is a leading cloud consulting firm specializing in data-driven transformations. 
              We help organizations harness the power of cloud technologies, data analytics, and AI 
              to drive innovation and competitive advantage.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With years of experience across industries, our team combines technical excellence 
              with business acumen to deliver solutions that scale with your ambitions.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src={teamImage} 
                alt="Redawn consulting team collaboration" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;