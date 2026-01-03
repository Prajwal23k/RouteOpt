import { ArrowRight, Leaf, Shield, Users, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">AI-Powered Eco Carpooling</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 animate-slide-up">
            Share the Ride,
            <br />
            <span className="text-gradient-primary">Save the Planet</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '100ms' }}>
            Join verified colleagues for smarter, safer, and greener commutes. 
            Track your carbon savings and contribute to a sustainable future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Link
              to="/dashboard"
              className="px-8 py-4 rounded-2xl btn-primary font-semibold text-lg flex items-center gap-2 group"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-border hover:border-primary hover:bg-primary/5 transition-all text-foreground">
              See How It Works
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground animate-slide-up" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm">Verified Users Only</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-primary" />
              <span className="text-sm">50K+ kg CO₂ Saved</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm">10K+ Active Riders</span>
            </div>
          </div>
        </div>

        {/* Feature Preview Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { 
              icon: '🔒', 
              title: 'Verified Network', 
              desc: 'Only verified work emails join your carpool community' 
            },
            { 
              icon: '🌍', 
              title: 'Carbon Tracker', 
              desc: 'See your real environmental impact with every ride' 
            },
            { 
              icon: '🤖', 
              title: 'AI Matching', 
              desc: 'Smart routes that save time and maximize sharing' 
            },
          ].map((feature, index) => (
            <div 
              key={feature.title}
              className="glass-card p-6 rounded-2xl text-center animate-slide-up"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
