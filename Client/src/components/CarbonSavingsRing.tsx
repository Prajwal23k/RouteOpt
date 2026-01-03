import { useEffect, useState } from 'react';

interface CarbonSavingsRingProps {
  savedKg: number;
  targetKg: number;
  size?: number;
}

const CarbonSavingsRing = ({ savedKg, targetKg, size = 180 }: CarbonSavingsRingProps) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const progress = Math.min((savedKg / targetKg) * 100, 100);
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedProgress / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 300);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="relative flex items-center justify-center carbon-ring" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="hsl(var(--muted))"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#carbonGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="progress-ring"
        />
        <defs>
          <linearGradient id="carbonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(152 60% 28%)" />
            <stop offset="100%" stopColor="hsl(165 55% 35%)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-display font-bold text-primary">{savedKg}</span>
        <span className="text-sm text-muted-foreground">kg CO₂ saved</span>
      </div>
    </div>
  );
};

export default CarbonSavingsRing;
