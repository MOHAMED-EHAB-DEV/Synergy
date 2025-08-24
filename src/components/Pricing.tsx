import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { Check, Star, Zap, Crown } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals getting started",
    monthlyPrice: 19,
    yearlyPrice: 190,
    icon: Zap,
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderGradient: "from-blue-500/50 to-cyan-500/50",
    features: [
      "Up to 5 projects",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "Mobile app access"
    ],
    popular: false
  },
  {
    name: "Professional",
    description: "Ideal for growing teams and businesses",
    monthlyPrice: 49,
    yearlyPrice: 490,
    icon: Star,
    gradient: "from-purple-500/20 to-pink-500/20",
    borderGradient: "from-purple-500/50 to-pink-500/50",
    features: [
      "Unlimited projects",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "Team collaboration",
      "Custom integrations",
      "API access"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    monthlyPrice: 99,
    yearlyPrice: 990,
    icon: Crown,
    gradient: "from-orange-500/20 to-red-500/20",
    borderGradient: "from-orange-500/50 to-red-500/50",
    features: [
      "Everything in Professional",
      "Unlimited storage",
      "Advanced security",
      "24/7 phone support",
      "Custom deployment",
      "SLA guarantee",
      "Dedicated account manager"
    ],
    popular: false
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

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10"></div>
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
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
            Simple, transparent
            <motion.span 
              className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300%"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            > pricing</motion.span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <motion.div 
            className="flex items-center justify-center space-x-4 pt-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className={`transition-colors duration-300 ${!isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <motion.div whileTap={{ scale: 0.95 }}>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
              />
            </motion.div>
            <span className={`transition-colors duration-300 ${isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            {isYearly && (
              <motion.span 
                className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm px-4 py-2 rounded-full shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                🎉 Save 20%
              </motion.span>
            )}
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Card 
                className={`relative border-2 transition-all duration-500 h-full group overflow-hidden ${
                  plan.popular 
                    ? 'border-primary shadow-2xl scale-105 z-10' 
                    : 'border-border hover:border-primary/50 hover:shadow-xl'
                }`}
              >
                {/* Gradient Background */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={false}
                />
                
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div 
                    className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                  >
                    <span className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-2 rounded-full text-sm shadow-lg">
                      ⭐ Most Popular
                    </span>
                  </motion.div>
                )}

                <CardHeader className="text-center space-y-4 pt-14 relative z-10">
                  <motion.div 
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center border-2 border-transparent bg-clip-padding`}
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <plan.icon className="h-8 w-8 text-primary" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-muted-foreground">{plan.description}</p>
                  
                  <div className="space-y-2">
                    <motion.div 
                      className="text-4xl font-bold text-foreground"
                      key={isYearly ? 'yearly' : 'monthly'}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      <span className="text-lg text-muted-foreground">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    </motion.div>
                    
                    {isYearly && (
                      <motion.div 
                        className="text-sm text-muted-foreground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        ${Math.round((plan.yearlyPrice / 12) * 100) / 100}/month billed annually
                      </motion.div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      className={`w-full rounded-full transition-all duration-300 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl' 
                          : 'hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10'
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      Start Free Trial
                    </Button>
                  </motion.div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        </motion.div>
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}