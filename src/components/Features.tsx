import { Card, CardContent } from "./ui/card";
import { Zap, Shield, Users, BarChart3 } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing fast performance with our optimized infrastructure and cutting-edge technology.",
    gradient: "from-yellow-400/20 to-orange-400/20"
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data is protected with enterprise-grade security and end-to-end encryption protocols.",
    gradient: "from-green-400/20 to-blue-400/20"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamlessly work together with real-time collaboration tools and shared workspaces.",
    gradient: "from-purple-400/20 to-pink-400/20"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights with comprehensive analytics and reporting to drive better decisions.",
    gradient: "from-blue-400/20 to-cyan-400/20"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export function Features() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Powerful features for
            <motion.span 
              className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300%"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            > modern teams</motion.span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to streamline your workflow and boost productivity. 
            Built with the latest technology and designed for scalability.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-border hover:shadow-xl transition-all duration-500 group h-full relative overflow-hidden">
                {/* Gradient Background on Hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={false}
                />
                
                <CardContent className="p-8 text-center space-y-4 relative z-10">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg"
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <feature.icon className="h-8 w-8 text-primary group-hover:text-primary/80 transition-colors" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {feature.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}