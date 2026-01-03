import { Shield, Share2, Phone } from 'lucide-react';
import { useState } from 'react';

const SafetyTrigger = () => {
  const [isSharing, setIsSharing] = useState(false);

  const handleEmergency = () => {
    setIsSharing(true);
    // Simulate sharing location
    setTimeout(() => setIsSharing(false), 3000);
  };

  return (
    <div className="stat-card p-6 space-y-4 border-destructive/20">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <Shield className="w-5 h-5 text-destructive" />
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">Safety Center</h3>
          <p className="text-xs text-muted-foreground">Live location sharing</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={handleEmergency}
          disabled={isSharing}
          className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all ${
            isSharing
              ? 'bg-destructive text-destructive-foreground safety-pulse'
              : 'bg-destructive/10 text-destructive hover:bg-destructive hover:text-destructive-foreground'
          }`}
        >
          <Share2 className="w-4 h-4" />
          {isSharing ? 'Sharing...' : 'Share Location'}
        </button>
        <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium bg-muted hover:bg-muted/80 text-foreground transition-all">
          <Phone className="w-4 h-4" />
          Emergency
        </button>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        Instantly share your live ride location with security or trusted contacts
      </p>
    </div>
  );
};

export default SafetyTrigger;
