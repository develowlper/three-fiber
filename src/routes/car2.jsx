import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  MeshReflectorMaterial,
  Environment,
  Stage,
  Backdrop,
  PresentationControls,
} from '@react-three/drei';
import CarModel from '../components/CarModel';

/*
Author: Steven Grey (https://sketchfab.com/Steven007)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/lamborghini-urus-2650599973b649ddb4460ff6c03e4aa2
Title: Lamborghini Urus
*/
export default function SecondCarRoute() {
  return (
    <div className="bg-white w-full h-full">
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
        <color attach="background" args={['#101010']} />
        <fog attach="fog" args={['#101010', 10, 20]} />
        <Suspense fallback={null}>
          <PresentationControls
            speed={1.5}
            global
            zoom={0.7}
            polar={[-0.1, Math.PI / 4]}
          >
            <Stage contactShadow={false} shadowBias={-0.0015} intensity={1}>
              <CarModel scale={0.01} />
            </Stage>
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[170, 170]} />
              <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={2048}
                mixBlur={1}
                mixStrength={40}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#101010"
                metalness={0.5}
              />
            </mesh>
          </PresentationControls>
          {/* <Stage
          environment={null}
          intensity={1}
          contactShadow={false}
          shadowBias={-0.0015}
        >
          <CarModel scale={0.01} />
        </Stage> */}
        </Suspense>
      </Canvas>
    </div>
  );
}
