
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
      const floatY = Math.sin(time * 0.8) * 10;
      const rotateZ = Math.sin(time * 0.5) * 5;
      
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
        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 drop-shadow-lg opacity-60 hover:opacity-90 transition-opacity duration-300"
      />
    </div>
  );
};

const AnimatedShoppingBags = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Top section badges */}
      <FloatingBadge position={{ x: '15%', y: '20%' }} scale={0.8} delay={0} />
      <FloatingBadge position={{ x: '85%', y: '25%' }} scale={0.6} delay={1} />
      <FloatingBadge position={{ x: '50%', y: '10%' }} scale={0.5} delay={6} />
      
      {/* Middle section badges */}
      <FloatingBadge position={{ x: '5%', y: '45%' }} scale={0.4} delay={2} />
      <FloatingBadge position={{ x: '95%', y: '50%' }} scale={0.7} delay={3} />
      <FloatingBadge position={{ x: '25%', y: '60%' }} scale={0.5} delay={8} />
      <FloatingBadge position={{ x: '75%', y: '55%' }} scale={0.6} delay={9} />
      
      {/* Bottom section badges */}
      <FloatingBadge position={{ x: '10%', y: '80%' }} scale={0.5} delay={4} />
      <FloatingBadge position={{ x: '90%', y: '85%' }} scale={0.6} delay={5} />
      <FloatingBadge position={{ x: '60%', y: '90%' }} scale={0.7} delay={7} />
      <FloatingBadge position={{ x: '40%', y: '75%' }} scale={0.4} delay={10} />
      
      {/* Additional scattered badges for better coverage */}
      <FloatingBadge position={{ x: '30%', y: '30%' }} scale={0.3} delay={11} />
      <FloatingBadge position={{ x: '70%', y: '40%' }} scale={0.5} delay={12} />
      <FloatingBadge position={{ x: '20%', y: '95%' }} scale={0.4} delay={13} />
      <FloatingBadge position={{ x: '80%', y: '5%' }} scale={0.6} delay={14} />
    </div>
  );
};

export default AnimatedShoppingBags;
