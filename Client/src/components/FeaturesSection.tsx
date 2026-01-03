import { 
  Shield, 
  Leaf, 
  Route, 
  AlertTriangle, 
  Brain, 
  Bike, 
  Calendar, 
  MessageCircle 
} from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: Shield,
    title: 'Verified User Matching',
    description: 'Only users with official organization email IDs can join, ensuring safe, trusted, and insider-only carpooling.',
  },
  {
    icon: Leaf,
    title: 'Carbon Savings Calculator',
    description: 'Quantifies and visualizes real-time emission offsets, highlighting environmental gains through shared commuting.',
  },
  {
    icon: Route,
    title: 'Smart Path Selector',
    description: 'Automatically finds the best pickup and drop paths to save time, distance, and fuel.',
  },
  {
    icon: AlertTriangle,
    title: 'Live Safety Trigger',
    description: 'Instantly send your real-time ride location to security or authorities during emergencies.',
  },
  {
    icon: Brain,
    title: 'AI-Driven Route Matching',
    description: 'Leverages AI to synchronize riders with overlapping routes and schedules, eliminating detours.',
  },
  {
    icon: Bike,
    title: 'Walk & Cycle Promotion',
    description: 'Encourages walking or cycling for short trips to completely avoid vehicle emissions.',
  },
  {
    icon: Calendar,
    title: 'Predictive Scheduling',
    description: 'Facilitates advance commute planning for recurring academic or professional travel patterns.',
  },
  {
    icon: MessageCircle,
    title: 'AI Chatbot Assistant',
    description: 'Instant help for ride booking, route queries, safety, and carbon savings through smart chat.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Everything You Need for
            <br />
            <span className="text-gradient-primary">Smarter Commuting</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From AI-powered matching to real-time safety features, we've built every tool 
            you need to make carpooling effortless and eco-friendly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={index === 0 || index === 4}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
