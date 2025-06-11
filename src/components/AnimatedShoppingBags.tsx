
import { useRef, useEffect } from 'react';

const FloatingBadge = ({ 
  position, 
  scale, 
  delay = 0 
}: { 
  position: { x: string; y: string }, 
  scale: number, 
  delay?: number 
}) => {
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const badge = badgeRef.current;
    if (!badge) return;

    const animate = () => {
      const time = Date.now() * 0.001 + delay;
      const floatY = Math.sin(time * 0.8) * 15;
      const rotateZ = Math.sin(time * 0.5) * 8;
      
      badge.style.transform = `translate(-50%, -50%) translateY(${floatY}px) rotate(${rotateZ}deg) scale(${scale})`;
    };

    const interval = setInterval(animate, 16);
    return () => clearInterval(interval);
  }, [scale, delay]);

  return (
    <div
      ref={badgeRef}
      className="absolute transition-transform duration-300 hover:scale-110"
      style={{
        left: position.x,
        top: position.y,
        transform: `translate(-50%, -50%) scale(${scale})`,
      }}
    >
      <img 
        src="/lovable-uploads/cba64fff-7bf3-40cd-876b-f3cd3bbe2b78.png" 
        alt="Shopping Badge" 
        className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 drop-shadow-2xl opacity-40 hover:opacity-60 transition-opacity duration-300"
      />
    </div>
  );
};

const AnimatedShoppingBags = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Reduced to only clean, well-positioned icons */}
      <FloatingBadge position={{ x: '5%', y: '15%' }} scale={0.7} delay={0} />
      <FloatingBadge position={{ x: '95%', y: '20%' }} scale={0.6} delay={2} />
      <FloatingBadge position={{ x: '3%', y: '70%' }} scale={0.6} delay={4} />
      <FloatingBadge position={{ x: '97%', y: '75%' }} scale={0.7} delay={6} />
    </div>
  );
};

export default AnimatedShoppingBags;
