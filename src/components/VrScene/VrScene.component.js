import { View } from "react-native";
import React, { useState, useEffect } from "react";

import {
  ViroScene,
  ViroAmbientLight,
  Viro3DObject,
  ViroAnimations,
  ViroOrbitCamera,
  Viro3DSceneNavigator,
  ViroLightingEnvironment,
  ViroMaterials
} from "@viro-community/react-viro";

const VrScene = ({ item }) => {
  const {
    labeled_model,
    resources,
    initialPosition,
    type,
    rotation,
    sx,
    sy,
    sz,
    material,
    lightingEvironment,
    materialsAvailable
  } = item;

  const [showingScene, setShowingScene] = useState(false);

  const Scene = () => {
    const [scaleFactor, setScaleFactor] = useState(1);
    const [loadingModel, setLoadingModel] = useState(true);  
    const [showMaterial, setShowMaterial] = useState(false);

    useEffect(() => {
      if (materialsAvailable) {
        ViroMaterials.createMaterials({
          material: material,
        });
        setShowMaterial(true);
      }
    }, []);
    return (
      <ViroScene>
        <ViroOrbitCamera
          active={true}
          position={[0, 0, -0]}
          focalPoint={initialPosition}
        />
        <ViroAmbientLight color="#ffffff" />
        {lightingEvironment && (
          <ViroLightingEnvironment source={lightingEvironment} />
        )}
        <Viro3DObject
          source={labeled_model}
          resources={resources}
          position={initialPosition}
          scale={[sx * scaleFactor, sy * scaleFactor, sz * scaleFactor]}
          type={type}
          rotation={rotation}
          onPinch={(pinchState, scaleFactor, source) => {
            setScaleFactor(scaleFactor);
          }}
          onLoadEnd={() => {
            setLoadingModel(false);
          }}
          onRotate={(rotateState, rotationFactor, source) => {
            console.log(rotationFactor);
          }}
          animation={{ name: "spin", run: true, loop: true }}
          materials={showMaterial ? ["material"] : []}
        />
      </ViroScene>
    );
  };

  useEffect(() => {
    setShowingScene(true);
    return () => {
      setShowingScene(true);
    };
  }, []);

  // Register animations here
  ViroAnimations.registerAnimations({
    spin: {
      properties: {
        rotateY: "+=45",
      },
      duration: 1500,
    },
  });

  return (
    <View style={{ height: "100%", width: "100%" }}>
      {showingScene && (
        <Viro3DSceneNavigator
          initialScene={{
            scene: Scene,
          }}
        />
      )}
    </View>
  );
};

export default VrScene;
