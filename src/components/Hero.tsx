import { Button } from "./ui/button";
import { ArrowRight, Play, TrendingUp, Shield, Users } from "lucide-react";
import { ImageWithFallback } from "./ui/ImageWithFallback";
import { motion } from "motion/react";

const userAvatars = [
  {
    src: "https://images.unsplash.com/photo-1652471949169-9c587e8898cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHdvbWFufGVufDF8fHx8MTc1NTk5ODk4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "Sarah"
  },
  {
    src: "https://images.unsplash.com/photo-1719257751404-1dea075324bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG1hbnxlbnwxfHx8fDE3NTU5NjY2NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "Alex"
  },
  {
    src: "https://images.unsplash.com/photo-1563132337-f159f484226c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDF8fHx8MTc1NTk2MDk5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "Maria"
  },
  {
    src: "https://images.unsplash.com/photo-1524538198441-241ff79d153b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMG1hbnxlbnwxfHx8fDE3NTU5NDAyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "David"
  },
  {
    src: "https://images.unsplash.com/photo-1650784854945-264d5b0b6b07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MXx8fHwxNzU2MDI1MTMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "Emma"
  },
  {
    src: "https://images.unsplash.com/photo-1592246031300-b47fef8fae2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHNtaWxpbmd8ZW58MXx8fHwxNzU2MDI1MTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "James"
  }
];

export function Hero() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-background/50 to-background"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <motion.div 
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-sm backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mr-2"
                >
                  ✨
                </motion.span>
                New features available
              </motion.div>
              
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold leading-tight text-foreground"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Transform your
                <motion.span 
                  className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300% animate-gradient"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                > workflow </motion.span>
                with modern tools
              </motion.h1>
              
              <motion.p 
                className="text-xl text-muted-foreground leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Streamline your productivity with our intuitive platform designed for modern teams. 
                Experience seamless collaboration like never before.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="rounded-full text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Free Trial
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="rounded-full text-lg px-8 py-6 border-2 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 transition-all duration-300">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced Stats Section */}
            <motion.div 
              className="grid sm:grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {/* Active Users with Avatars */}
              <motion.div 
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="flex justify-center mb-3 relative"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                >
                  <div className="flex -space-x-3 relative">
                    {userAvatars.slice(0, 5).map((user, index) => (
                      <motion.div
                        key={index}
                        className="relative group/avatar"
                        initial={{ 
                          opacity: 0.7,
                          scale: 0.9,
                          zIndex: userAvatars.length - index
                        }}
                        whileHover={{ 
                          opacity: 1,
                          scale: 1.2,
                          zIndex: 50,
                          transition: { 
                            type: "spring", 
                            stiffness: 400,
                            damping: 10
                          }
                        }}
                        animate={{
                          y: [0, -2, 0],
                        }}
                        transition={{
                          delay: index * 0.1,
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        style={{ zIndex: userAvatars.length - index }}
                      >
                        <div className="w-12 h-12 rounded-full overflow-hidden border-3 border-background shadow-lg bg-gradient-to-br from-primary/10 to-accent/10 relative">
                          <ImageWithFallback
                            src={user.src}
                            alt={user.name}
                            className="w-full h-full object-cover transition-all duration-300 group-hover/avatar:brightness-110"
                          />
                          
                          {/* Tooltip */}
                          <motion.div
                            className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover/avatar:opacity-100 whitespace-nowrap pointer-events-none z-50"
                            initial={{ opacity: 0, y: 5 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {user.name}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-foreground"></div>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                    
                    {/* Plus indicator */}
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-3 border-background shadow-lg flex items-center justify-center text-xs font-medium text-primary backdrop-blur-sm"
                      initial={{ opacity: 0.7, scale: 0.9 }}
                      whileHover={{ 
                        opacity: 1, 
                        scale: 1.1,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                      animate={{
                        y: [0, -2, 0],
                      }}
                      transition={{
                        delay: 0.5,
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      +10k
                    </motion.div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="text-3xl font-bold text-foreground flex items-center justify-center gap-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                >
                  <Users className="h-6 w-6 text-primary" />
                  10,000+
                </motion.div>
                <div className="text-sm text-muted-foreground">Active Users</div>
                <div className="text-xs text-primary font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Join thousands of professionals
                </div>
              </motion.div>

              {/* Uptime */}
              <motion.div 
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="flex justify-center mb-3"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-400/20 border-3 border-background shadow-lg flex items-center justify-center"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(34, 197, 94, 0.4)",
                        "0 0 0 10px rgba(34, 197, 94, 0)",
                        "0 0 0 0 rgba(34, 197, 94, 0)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Shield className="h-6 w-6 text-green-500" />
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="text-3xl font-bold text-foreground flex items-center justify-center gap-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
                >
                  99.9%
                </motion.div>
                <div className="text-sm text-muted-foreground">Uptime</div>
                <div className="text-xs text-green-600 font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Enterprise-grade reliability
                </div>
              </motion.div>

              {/* Rating */}
              <motion.div 
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="flex justify-center mb-3"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-400/20 border-3 border-background shadow-lg flex items-center justify-center"
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <TrendingUp className="h-6 w-6 text-yellow-500" />
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="text-3xl font-bold text-foreground flex items-center justify-center gap-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                >
                  4.9
                  <motion.span 
                    className="text-yellow-500"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    ★
                  </motion.span>
                </motion.div>
                <div className="text-sm text-muted-foreground">Customer Rating</div>
                <div className="text-xs text-yellow-600 font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Loved by teams worldwide
                </div>
              </motion.div>
            </motion.div>

            {/* Social Proof Text */}
            <motion.div 
              className="text-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              <p className="text-sm text-muted-foreground">
                Trusted by <span className="font-medium text-primary">10,000+</span> professionals at companies like 
                <span className="font-medium text-foreground"> Google, Microsoft, and Shopify</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div 
            className="lg:order-last"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-3xl transform rotate-6"
                animate={{ 
                  rotate: [6, 8, 4, 6],
                  scale: [1, 1.05, 0.95, 1]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              <motion.div 
                className="relative bg-gradient-to-br from-card to-card/80 rounded-3xl p-8 shadow-2xl border border-border/50 backdrop-blur-sm"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1696087225391-eb97abf5ba20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBwcm9kdWN0aXZpdHl8ZW58MXx8fHwxNzU1OTQyMjIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern workspace"
                  className="w-full h-auto rounded-2xl"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}