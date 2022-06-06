import React, { useState, useEffect } from "react";
import { View, Text, Dimensions } from "react-native";
import {
  ViroARSceneNavigator,
  ViroARScene,
  ViroAmbientLight,
  Viro3DObject,
  ViroAnimations,
  ViroMaterials,
  ViroLightingEnvironment,
} from "@viro-community/react-viro";

import styles from "./ArScene.style";

const { width, height } = Dimensions.get('screen');

const ArScene = ({ item }) => {
  const [loadingModel, setLoadingModel] = useState(true);

  // console.log(route.params)
  const {
    sx,
    sy,
    sz,
    sT,
    material,
    lightingEvironment,
    dT,
    unlabeled_model,
    materialsAvailable,
    rotation,
    initialPosition,
    type,
    resources,
  } = item;

  const [showingScene, setShowingScene] = useState(false);

  useEffect(() => {
    setShowingScene(true);
    return () => {
      setShowingScene(true);
    };
  }, []);

  const ArItem = () => {
    const [showMaterial, setShowMaterial] = useState(false);
    const [scaleFactor, setScaleFactor] = useState(1);
    useEffect(() => {
      if (materialsAvailable) {
        ViroMaterials.createMaterials({
          material: material,
        });
        setShowMaterial(true);
      }
    }, []);
    return (
      <ViroARScene>
        <ViroAmbientLight color="#ffffff" />
        {lightingEvironment && (
          <ViroLightingEnvironment source={lightingEvironment} />
        )}
        {materialsAvailable ? (
          <Viro3DObject
            source={unlabeled_model}
            resources={resources}
            position={initialPosition}
            scale={[sx * scaleFactor, sy * scaleFactor, sz * scaleFactor]}
            type={type}
            animation={{ name: "spin", run: true, loop: true }}
            rotation={rotation}
            onPinch={(pinchState, scaleFactor, source) => {
              setScaleFactor(scaleFactor);
              console.log(scaleFactor);
            }}
            onLoadEnd={() => {
              setLoadingModel(false);
              console.log("Loading Ended");
            }}
            materials={showMaterial ? ["material"] : []}
          />
        ) : (
          <Viro3DObject
            source={unlabeled_model}
            resources={resources}
            position={initialPosition}
            scale={[sx * scaleFactor, sy * scaleFactor, sz * scaleFactor]}
            type={type}
            animation={{ name: "spin", run: true, loop: true }}
            rotation={rotation}
            onPinch={(pinchState, scaleFactor, source) => {
              setScaleFactor(scaleFactor);
              console.log(scaleFactor);
            }}
            onLoadEnd={() => {
              setLoadingModel(false);
            }}
          />
        )}
      </ViroARScene>
    );
  };

  return (
    <View style={{ height: height, width: "100%" }}>
        {
            showingScene
            &&
            <ViroARSceneNavigator initialScene={{ scene: ArItem }} />
        }
      {loadingModel && (
        <Text style={styles.loadingModelText}>Loading Model</Text>
      )}
    </View>
  );
};

ViroAnimations.registerAnimations({
  spin: {
    properties: {
      rotateY: "+=45",
    },
    duration: 1500,
  },
});

export default ArScene;
