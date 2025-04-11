import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
  color?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ 
  name, 
  percentage, 
  delay = 0,
  color = "from-purple-500 to-pink-500"
}) => {
  const [width, setWidth] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [inView, percentage, delay]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between">
        <span className="font-medium">{name}</span>
        <span className="text-gray-300">{width}%</span>
      </div>
      <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;