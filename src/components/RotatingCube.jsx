import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { animated, config, useSpring } from "@react-spring/three";

export default function RotatingCube() {
  const myMesh = useRef();
  const [isActive, setActive] = useState();

  const { scale } = useSpring({ scale: isActive ? 1.5 : 1, config: config.wobbly });

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a;
  });

  return (
    <>
      <animated.mesh
        scale={scale}
        onClick={() => setActive((old) => !old)}
        ref={myMesh}
      >
        <boxGeometry />
        <meshPhongMaterial color="royalblue" />
      </animated.mesh>
      <ambientLight args={[0xff0000]} intensity={0.1} />
      <directionalLight position={[0, 0, 5]} intensity={0.5} />
    </>
  );
}
