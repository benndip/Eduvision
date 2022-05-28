import React, { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber/native'
import { useGLTF, Environment } from "@react-three/drei/native";
import iphoneModelPath from '../../../res/models/eye/eye.glb'

const Model = ({...rest }) => {
  // const { scene } = useGLTF("https://backmarche.s3.us-east-2.amazonaws.com/threedModels/1651577997.MyIphone.glb");
  const { scene } = useGLTF(iphoneModelPath);
  useFrame(() => (scene.rotation.y += 0.007));
  return <primitive {...rest} object={scene} />;
};

export default function Three() {
  return (
    <Canvas gl={{ physicallyCorrectLights: true }} camera={{ position: [-6, 0, 16], fov: 36 }}>
      <color attach="background" args={[0xe2f4df]} />
      <ambientLight />
      <directionalLight intensity={1.1} position={[0.5, 0, 0.866]} />
      <directionalLight intensity={0.8} position={[-6, 2, 2]} />
      <Suspense fallback={null}>
        <Environment preset="park" />
        <Model scale={1} />
      </Suspense>
  </Canvas>
  )
}