import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Card, CardContent } from "./ui/card";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "Our 14-day free trial gives you full access to all features. No credit card required to start. You can upgrade, downgrade, or cancel anytime during or after the trial period."
  },
  {
    question: "Can I change my plan later?",
    answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments on your next invoice."
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "Your data remains accessible for 30 days after cancellation. You can export all your data during this period. After 30 days, data is permanently deleted for security reasons."
  },
  {
    question: "Do you offer discounts for nonprofits or education?",
    answer: "Yes! We offer special pricing for qualified nonprofit organizations and educational institutions. Contact our sales team to learn more about available discounts."
  },
  {
    question: "Is my data secure?",
    answer: "Security is our top priority. We use enterprise-grade encryption, regular security audits, and comply with SOC 2 Type II, GDPR, and other industry standards to protect your data."
  },
  {
    question: "How do integrations work?",
    answer: "We offer native integrations with 100+ popular tools including Slack, Google Workspace, Microsoft 365, and more. Our API also allows for custom integrations with your existing workflow."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer email support for all plans, priority support for Professional plans, and 24/7 phone support for Enterprise customers. We also have extensive documentation and video tutorials."
  },
  {
    question: "Can I migrate from another platform?",
    answer: "Yes! We provide migration assistance and tools to help you seamlessly transfer your data from other platforms. Our team can help ensure a smooth transition."
  }
];

export function FAQ() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto"
            whileHover={{ 
              rotate: [0, -10, 10, 0],
              scale: 1.1,
              transition: { duration: 0.5 }
            }}
          >
            <HelpCircle className="h-8 w-8 text-primary" />
          </motion.div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Frequently Asked {" "}
            <motion.span 
              className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300%"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >Questions</motion.span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our platform, features, and pricing. 
            Can't find what you're looking for? We're here to help.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-border shadow-xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                      <AccordionItem 
                        value={`item-${index}`} 
                        className="border border-border/50 rounded-xl px-6 hover:border-primary/30 transition-all duration-300 hover:shadow-md group"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            {faq.answer}
                          </motion.div>
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>

          {/* Still have questions section */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-border shadow-lg bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm">
              <CardContent className="p-8 text-center space-y-6">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mx-auto"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MessageCircle className="h-6 w-6 text-primary" />
                </motion.div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Still have questions?</h3>
                  <p className="text-muted-foreground">
                    Can't find the answer you're looking for? Our friendly team is here to help.
                  </p>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get in Touch
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}