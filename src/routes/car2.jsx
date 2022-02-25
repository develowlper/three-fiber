import * as THREE from 'three';
import { Suspense, useLayoutEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  useGLTF,
  MeshReflectorMaterial,
  Environment,
  Stage,
  PresentationControls,
} from '@react-three/drei';

/*
Author: Steven Grey (https://sketchfab.com/Steven007)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/lamborghini-urus-2650599973b649ddb4460ff6c03e4aa2
Title: Lamborghini Urus
*/

export default function SecondCarRoute() {
  return (
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
      <color attach="background" args={['#101010']} />
      <fog attach="fog" args={['#101010', 10, 20]} />
      <Suspense fallback={null}>
        <Environment path="/cube" />

        <Stage
          environment={null}
          intensity={1}
          contactShadow={false}
          shadowBias={-0.0015}
        >
          <Model scale={0.01} />
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
      </Suspense>
    </Canvas>
  );
}
