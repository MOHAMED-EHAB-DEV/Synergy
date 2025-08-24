import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { Mail } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section className="py-24 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto border-border shadow-xl">
          <CardContent className="p-12 text-center space-y-8">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Stay in the loop
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get the latest updates, tips, and exclusive content delivered straight to your inbox. 
                Join thousands of professionals who trust our insights.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 rounded-full px-6 py-3 bg-input-background border-border"
                />
                <Button 
                  type="submit" 
                  className="rounded-full px-8 py-3 whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </div>
            </form>

            <p className="text-sm text-muted-foreground">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>

            <div className="flex items-center justify-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">25k+</div>
                <div className="text-sm text-muted-foreground">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">Weekly</div>
                <div className="text-sm text-muted-foreground">Updates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">0</div>
                <div className="text-sm text-muted-foreground">Spam</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}