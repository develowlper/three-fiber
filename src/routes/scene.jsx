import { Plane } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Cube from 'components/Cube';

export default function SceneRoute() {
  return (
    <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [2, 5, 5] }}>
      <Cube position={[0, 0.5, 0]} />
      <Plane args={[3, 3]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshPhongMaterial color="#FFF" />
      </Plane>
      <directionalLight position={[-1, 2, 4]} intensity={1} />
    </Canvas>
  );
}
