import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function CNCModel() {
  const { scene } = useGLTF("/models/cnc_milling_machine.glb");
  return <primitive object={scene} position={[0, -2, 0]} />;
}

const ModelViewer: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "250px" }}>
      <Canvas camera={{ position: [6, 2, 6], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Suspense fallback={null}>
          <CNCModel />
        </Suspense>

        <OrbitControls
          enableDamping
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default ModelViewer;