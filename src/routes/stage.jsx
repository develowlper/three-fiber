import {
  BakeShadows,
  OrbitControls,
  Plane,
  Sphere,
  Stage,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Shoe from 'components/Shoe';
import { Suspense } from 'react';

export default function Shoes() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [-2, 2, 6], fov: 50, near: 1, far: 20 }}
    >
      <Suspense fallback={null}>
        <Stage
          environment="city"
          intensity={0.5}
          contactShadow={{ opacity: 0.7, blur: 2 }}
        >
          <mesh>
            <Sphere>
              <meshPhongMaterial attach="material" color="hotpink" />
            </Sphere>
          </mesh>
        </Stage>
        <BakeShadows />
      </Suspense>
      <OrbitControls autoRotate />
    </Canvas>
  );
}
