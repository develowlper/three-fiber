import { Canvas } from '@react-three/fiber';
import RotatingCube from 'components/RotatingCube';

export default function RotatingCubeRoute() {
  return (
    <Canvas>
      <RotatingCube />
      <RotatingCube position={[2, 0, 0]} speed={0.95} color="#3a6f15" />
      <RotatingCube position={[-2, 0, 0]} speed={1.05} color="#FF0021" />
      <directionalLight color="#FFF" intensity={1} position={[-1, 2, 4]} />
    </Canvas>
  );
}
