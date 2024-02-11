import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const meshRef = useRef();
  const scrollPositionRef = useRef(0);

 

  
  return (
    <Suspense fallback={<CanvasLoader />}>
  <ambientLight intensity={0.5} />
  <directionalLight position={[5, 5, 5]} />
  <mesh ref={meshRef} castShadow receiveShadow scale={2.75} rotation={[0, Math.PI / 7.5, 0]}>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color='#ffffff' polygonOffset polygonOffsetFactor={-5} flatShading />
    <Decal position={[0, 0, 0]} scale={1} map={decal} flatShading />
  </mesh>
</Suspense>

  );
};



const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;