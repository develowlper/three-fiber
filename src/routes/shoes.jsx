import { BakeShadows, OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Shoe from 'components/Shoe';
import { Suspense } from 'react';

export default function Shoes() {
  return (
    <Canvas
      // shadows
      // dpr={[1, 2]}
      camera={{ position: [0, 0, 150], fov: 40 }}
    >
      <Suspense fallback={null}>
        <Stage
        // environment="city"
        // intensity={0.5}
        // contactShadow={{ opacity: 0.7, blur: 2 }}
        >
          <Shoe color="tomato" position={[0, 0, 0]} />
          <Shoe
            color="orange"
            scale={-1}
            rotation={[0, 0.5, Math.PI]}
            position={[0, 0, -2]}
          />
        </Stage>
        {/* <BakeShadows /> */}
      </Suspense>
      <OrbitControls autoRotate />
    </Canvas>
  );
}
