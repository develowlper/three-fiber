import { Canvas } from "@react-three/fiber";
import RotatingCube from "../components/RotatingCube";

export default function CubeRoute() {
  return (
    <Canvas>
      <RotatingCube />
    </Canvas>
  );
}
