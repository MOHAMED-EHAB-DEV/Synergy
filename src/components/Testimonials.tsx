import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
import { ImageWithFallback } from "./ui/ImageWithFallback";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDF8fHx8MTc1NjAyNDM3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "This platform has completely transformed how our team collaborates. The intuitive interface and powerful features make it a joy to use every day.",
    rating: 5,
    gradient: "from-blue-400/10 to-purple-400/10"
  },
  {
    name: "Michael Chen",
    role: "Creative Director",
    company: "Design Studio",
    image: "https://images.unsplash.com/photo-1598268012815-ae21095df31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbnxlbnwxfHx8fDE3NTU5NTY1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "The analytics and reporting features have given us insights we never had before. It's helped us make data-driven decisions that improved our ROI by 40%.",
    rating: 5,
    gradient: "from-green-400/10 to-teal-400/10"
  },
  {
    name: "Emily Rodriguez",
    role: "CEO",
    company: "StartupXYZ",
    image: "https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFufGVufDF8fHx8MTc1NTk4ODk0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "Security was our top concern, and this platform exceeded our expectations. The enterprise-grade features give us peace of mind while scaling our business.",
    rating: 5,
    gradient: "from-orange-400/10 to-pink-400/10"
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

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-accent/10"></div>
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Loved by
            <motion.span 
              className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300%"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            > thousands</motion.span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what our customers have to say about their experience with our platform.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Card className="border-border hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden group">
                {/* Gradient Background on Hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={false}
                />
                
                <CardContent className="p-8 space-y-6 relative z-10">
                  {/* Rating */}
                  <motion.div 
                    className="flex space-x-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                        whileHover={{ 
                          scale: 1.2,
                          rotate: [0, -10, 10, 0],
                          transition: { duration: 0.3 }
                        }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Quote */}
                  <motion.blockquote 
                    className="text-muted-foreground leading-relaxed text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="text-2xl text-primary/50">"</span>
                    {testimonial.quote}
                    <span className="text-2xl text-primary/50">"</span>
                  </motion.blockquote>

                  {/* Author */}
                  <motion.div 
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div>
                      <motion.div 
                        className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        {testimonial.name}
                      </motion.div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-muted-foreground mb-8">Trusted by companies worldwide</p>
          <div className="flex items-center justify-center space-x-12 opacity-60">
            {["TechCorp", "Design Studio", "StartupXYZ", "InnovateLabs", "FutureWorks"].map((company, index) => (
              <motion.div 
                key={index}
                className="text-lg font-medium text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  opacity: 1,
                  transition: { duration: 0.2 }
                }}
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}