
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const ShoppingBag = ({ position, scale, color }: { position: [number, number, number], scale: number, color: string }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  return (
    <group position={position} scale={scale}>
      <mesh ref={meshRef}>
        {/* Main bag body */}
        <boxGeometry args={[1, 1.2, 0.8]} />
        <meshPhongMaterial color={color} transparent opacity={0.8} />
      </mesh>
      
      {/* Bag handles */}
      <mesh position={[0, 0.8, 0]}>
        <torusGeometry args={[0.3, 0.05, 8, 16]} />
        <meshPhongMaterial color={color} transparent opacity={0.9} />
      </mesh>
      
      {/* Decorative star shape around the bag */}
      <mesh position={[0, 0, 0.1]} rotation={[0, 0, Math.PI / 8]}>
        <cylinderGeometry args={[0.8, 0.8, 0.1, 8]} />
        <meshPhongMaterial color={color} transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

const AnimatedShoppingBags = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* Multiple shopping bags at different positions with purple/blue colors */}
        <ShoppingBag position={[-8, 2, -2]} scale={0.8} color="#CC49D3" />
        <ShoppingBag position={[8, -1, -1]} scale={0.6} color="#8B5CF6" />
        <ShoppingBag position={[-6, -3, -3]} scale={0.5} color="#A855F7" />
        <ShoppingBag position={[7, 3, -2]} scale={0.7} color="#5E1A99" />
        <ShoppingBag position={[-4, 4, -4]} scale={0.4} color="#9333EA" />
        <ShoppingBag position={[5, -4, -2]} scale={0.6} color="#7C3AED" />
      </Canvas>
    </div>
  );
};

export default AnimatedShoppingBags;
