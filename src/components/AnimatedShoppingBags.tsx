
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const ShoppingBag = ({ position, scale, color }: { position: [number, number, number], scale: number, color: string }) => {
  const meshRef = useRef<Mesh>(null);
  const starRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
    if (starRef.current) {
      starRef.current.rotation.z += 0.01;
    }
  });

  return (
    <group position={position} scale={scale}>
      {/* Star-shaped badge background (multiple layers for depth) */}
      <mesh ref={starRef} position={[0, 0, -0.5]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[1.8, 1.8, 0.2, 12]} />
        <meshPhongMaterial color="#E879F9" transparent opacity={0.4} />
      </mesh>
      
      <mesh position={[0, 0, -0.3]} rotation={[0, 0, Math.PI / 12]}>
        <cylinderGeometry args={[1.5, 1.5, 0.15, 12]} />
        <meshPhongMaterial color="#C084FC" transparent opacity={0.6} />
      </mesh>
      
      <mesh position={[0, 0, -0.1]} rotation={[0, 0, Math.PI / 6]}>
        <cylinderGeometry args={[1.2, 1.2, 0.1, 12]} />
        <meshPhongMaterial color="#A855F7" transparent opacity={0.8} />
      </mesh>
      
      {/* Main shopping bag body */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[0.8, 1.0, 0.6]} />
        <meshPhongMaterial color="#8B5CF6" transparent opacity={0.9} />
      </mesh>
      
      {/* Shopping bag handles */}
      <mesh position={[-0.25, 0.6, 0]}>
        <torusGeometry args={[0.15, 0.03, 8, 16]} />
        <meshPhongMaterial color="#7C3AED" />
      </mesh>
      
      <mesh position={[0.25, 0.6, 0]}>
        <torusGeometry args={[0.15, 0.03, 8, 16]} />
        <meshPhongMaterial color="#7C3AED" />
      </mesh>
      
      {/* Shopping bag top fold */}
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[0.9, 0.15, 0.6]} />
        <meshPhongMaterial color="#6D28D9" transparent opacity={0.9} />
      </mesh>
      
      {/* Small decorative elements on the bag */}
      <mesh position={[0, -0.1, 0.31]}>
        <boxGeometry args={[0.3, 0.3, 0.02]} />
        <meshPhongMaterial color="#DDD6FE" transparent opacity={0.8} />
      </mesh>
    </group>
  );
};

const AnimatedShoppingBags = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#E879F9" />
        
        {/* Multiple shopping bags with star badges at different positions */}
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
