/*
Author: Steven Grey (https://sketchfab.com/Steven007)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/lamborghini-urus-2650599973b649ddb4460ff6c03e4aa2
Title: Lamborghini Urus
*/
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useLayoutEffect } from 'react';

export default function CarModel(props) {
  const { scene, nodes, materials } = useGLTF('/lambo.glb');
  useLayoutEffect(() => {
    scene.traverse(
      (obj) =>
        obj.type === 'Mesh' && (obj.receiveShadow = obj.castShadow = true)
    );
    Object.assign(nodes.wheel003_020_2_Chrome_0.material, {
      metalness: 0.9,
      roughness: 0.4,
      color: new THREE.Color('#020202'),
    });
    Object.assign(materials.WhiteCar, {
      roughness: 0.0,
      metalness: 0.3,
      emissive: new THREE.Color('#500000'),
      envMapIntensity: 0.5,
    });
  }, [scene, nodes, materials]);
  return <primitive object={scene} {...props} />;
}

// function Model(props) {
//   useLayoutEffect(() => {
//     scene.traverse(
//       (obj) =>
//         obj.type === 'Mesh' && (obj.receiveShadow = obj.castShadow = true)
//     );
//     Object.assign(nodes.wheel003_020_2_Chrome_0.material, {
//       metalness: 0.9,
//       roughness: 0.4,
//       color: new THREE.Color('#020202'),
//     });
//     Object.assign(materials.WhiteCar, {
//       roughness: 0.0,
//       metalness: 0.3,
//       emissive: new THREE.Color('#500000'),
//       envMapIntensity: 0.5,
//     });
//   }, [scene, nodes, materials]);
//   return <primitive object={scene} {...props} />;
// }
