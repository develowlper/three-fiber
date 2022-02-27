import { Sphere } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const useRotation = () => {
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime();
  });
  return ref;
};

const Earth = () => {
  const sunRef = useRef();
  useFrame(({ clock }) => {
    sunRef.current.rotation.y = clock.getElapsedTime();
  });

  return (
    <Sphere ref={sunRef} args={[1, 6, 6]}>
      <meshPhongMaterial color={'#2233ff'} emissive={'#112244'} />
      <axesHelper renderOrder={1} material={{ depthTest: false }} />
    </Sphere>
  );
};

const EarthOrbit = ({ children }) => {
  const ref = useRotation();

  return (
    <object3D ref={ref} position={[10, 0, 0]}>
      {children}
      <axesHelper renderOrder={1} material={{ depthTest: false }} />
    </object3D>
  );
};

const Moon = () => {
  const moonRef = useRef();
  useFrame(({ clock }) => {
    moonRef.current.rotation.y = clock.getElapsedTime();
  });

  return (
    <Sphere ref={moonRef} args={[0.5, 6, 6]}>
      <meshPhongMaterial color={'#888888'} emissive={'#222222'} />
      <axesHelper renderOrder={1} material={{ depthTest: false }} />
    </Sphere>
  );
};

const MoonOrbit = ({ children }) => {
  const ref = useRotation();
  return (
    <object3D ref={ref} position={[2, 0, 0]}>
      {children}
      <axesHelper renderOrder={1} material={{ depthTest: false }} />
    </object3D>
  );
};

const Sun = () => {
  const ref = useRotation();

  return (
    <Sphere ref={ref} args={[1, 6, 6]} scale={[5, 5, 5]}>
      <meshPhongMaterial emissive={'#FFFF00'} />
      <axesHelper renderOrder={1} material={{ depthTest: false }} />
    </Sphere>
  );
};

const SolarSystem = () => {
  const ref = useRotation();

  return (
    <object3D ref={ref} position={[0, 0, 0]}>
      <Sun />
      <EarthOrbit>
        <Earth />
        <MoonOrbit>
          <Moon />
        </MoonOrbit>
      </EarthOrbit>
      <axesHelper renderOrder={1} material={{ depthTest: false }} />
    </object3D>
  );
};

export default function SolarRoute() {
  return (
    <Canvas
      camera={{
        fov: 40,
        aspect: 2,
        near: 0.1,
        far: 1000,
        position: [0, 50, 0],
        up: [0, 0, 1],
      }}
    >
      <SolarSystem />
      <pointLight color={'#FFF'} intensity={3} />
    </Canvas>
  );
}
