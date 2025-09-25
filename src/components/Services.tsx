import { Card, CardContent } from "@/components/ui/card";
import { 
  Cloud, 
  DollarSign, 
  Shield, 
  Code, 
  Layers, 
  Brain, 
  Database 
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Data Cloud",
    description: "Build scalable, secure data platforms that unlock insights and drive innovation across your organization."
  },
  {
    icon: DollarSign,
    title: "Cloud Cost Optimization",
    description: "Reduce cloud spend by up to 40% through intelligent resource management and architectural optimization."
  },
  {
    icon: Shield,
    title: "Security",
    description: "Comprehensive security frameworks and compliance solutions to protect your digital assets."
  },
  {
    icon: Code,
    title: "Application Development",
    description: "Modern, scalable applications built with cloud-native principles and best practices."
  },
  {
    icon: Layers,
    title: "Cloud Native",
    description: "Transform legacy systems into cloud-native architectures for improved agility and performance."
  },
  {
    icon: Brain,
    title: "ML & AI",
    description: "Implement machine learning and AI solutions that deliver measurable business value."
  },
  {
    icon: Database,
    title: "Databricks Implementation",
    description: "Expert Databricks deployment and optimization for unified analytics and data science workflows."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cloud and data solutions tailored to accelerate your business transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;