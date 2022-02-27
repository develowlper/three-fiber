import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import Cube from './Cube';

const RotatingCube = ({
  color = '#11FFEE',
  position = [0, 0, 0],
  speed = 1,
}) => {
  const myMesh = useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a * speed;
    myMesh.current.rotation.y = a * speed;
  });

  return <Cube ref={myMesh} position={position} color={color} />;
};

export default RotatingCube;
