
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
        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 drop-shadow-lg opacity-30 hover:opacity-50 transition-opacity duration-300"
      />
    </div>
  );
};

const AnimatedShoppingBags = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Top corners only - avoiding center where logo and text are */}
      <FloatingBadge position={{ x: '5%', y: '15%' }} scale={0.6} delay={0} />
      <FloatingBadge position={{ x: '95%', y: '20%' }} scale={0.5} delay={1} />
      <FloatingBadge position={{ x: '10%', y: '5%' }} scale={0.4} delay={6} />
      <FloatingBadge position={{ x: '90%', y: '8%' }} scale={0.5} delay={14} />
      
      {/* Side edges - avoiding center content areas */}
      <FloatingBadge position={{ x: '2%', y: '45%' }} scale={0.4} delay={2} />
      <FloatingBadge position={{ x: '98%', y: '50%' }} scale={0.6} delay={3} />
      <FloatingBadge position={{ x: '1%', y: '65%' }} scale={0.3} delay={8} />
      <FloatingBadge position={{ x: '99%', y: '70%' }} scale={0.5} delay={9} />
      
      {/* Bottom corners and edges */}
      <FloatingBadge position={{ x: '8%', y: '85%' }} scale={0.5} delay={4} />
      <FloatingBadge position={{ x: '92%', y: '90%' }} scale={0.6} delay={5} />
      <FloatingBadge position={{ x: '15%', y: '95%' }} scale={0.4} delay={7} />
      <FloatingBadge position={{ x: '85%', y: '95%' }} scale={0.4} delay={10} />
      
      {/* Very subtle elements in far corners */}
      <FloatingBadge position={{ x: '3%', y: '25%' }} scale={0.3} delay={11} />
      <FloatingBadge position={{ x: '97%', y: '35%' }} scale={0.3} delay={12} />
      <FloatingBadge position={{ x: '4%', y: '75%' }} scale={0.3} delay={13} />
    </div>
  );
};

export default AnimatedShoppingBags;
