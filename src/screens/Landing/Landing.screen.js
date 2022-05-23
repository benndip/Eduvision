import React, { useState, useEffect, useContext } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import {
  ViroAmbientLight,
  ViroAnimations,
  ViroBox,
  ViroScene,
  ViroSkyBox,
  ViroVRSceneNavigator,
  ViroMaterials,
  ViroOrbitCamera,
  ViroOmniLight,
  ViroNode,
  Viro3DObject,
} from "@viro-community/react-viro";
import auth from '@react-native-firebase/auth';

import styles from "./Landing.style";

import { AuthContext } from '../../navigation/AuthProvider';

const LandingScene = () => {
  const [showModels, setShowModels] = useState(false);

  const changeModelsState = () => {
    setTimeout(() => {
      setShowModels(true);
    }, 2000);
  };

  useEffect(() => {
    changeModelsState();
  }, []);

  return (
    <ViroScene>
      <ViroAmbientLight color="#ffffff" />

      <ViroSkyBox
        source={{
          nx: require("../../../res/images/grid_bg.jpg"),
          px: require("../../../res/images/grid_bg.jpg"),
          ny: require("../../../res/images/grid_bg.jpg"),
          py: require("../../../res/images/grid_bg.jpg"),
          nz: require("../../../res/images/grid_bg.jpg"),
          pz: require("../../../res/images/grid_bg.jpg"),
        }}
      />

      <ViroOrbitCamera
        active={true}
        position={[0, 0, -0]}
        focalPoint={[0, 0.1, -5]}
      />
      <ViroOmniLight
        position={[0, 0, 0]}
        color="#ffffff"
        attenuationStartDistance={40}
        attenuationEndDistance={50}
      />
      {showModels && (
        <ViroNode position={[0, 0.1, -0.5]}>
          <Viro3DObject
            source={require("../../../res/models/heart/heart.glb")}
            resources={[]}
            position={[0, 1.2, -5]}
            scale={[0.8,0.8,0.8]}
            rotation={[0, 0, 0]}
            type="GLB"
          />
        </ViroNode>
      )}
    </ViroScene>
  );
};

const Landing = ({ navigation }) => {

  const isFocused = useIsFocused();

  const [initializing, setInitializing] = useState(true);
  const {user, setUser} = useContext(AuthContext);

  const onAuthStateChanged = (user) => {
      setUser(user);
      if (initializing) setInitializing(false);
  }
  
  useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
  }, []);

  const getStarted = () => { 
    user ?
    navigation.navigate("BottomNavigation")
    :
    navigation.navigate("Login")
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.eduvisionText}>Eduvision</Text>
      {isFocused && (
        <ViroVRSceneNavigator
          vrModeEnabled={false}
          initialScene={{
            scene: LandingScene,
          }}
        />
      )}
      <TouchableOpacity
        style={styles.exploreBtn}
        onPress={getStarted}
      >
        <Text style={styles.exploreTxt}>Get Started</Text>
      </TouchableOpacity>
      <Text style={styles.largeText}>Are you ready to learn?</Text>
      <Text style={styles.smallText}>
        Plunge into the <Text style={styles.threeDText}>3D</Text> and{" "}
        <Text style={styles.augmentedRealityText}>Augmented Reality</Text> world
        with us. Discover new knowledge !
      </Text>
      <Text style={styles.poweredByDr}>Powered by Immersecity</Text>
    </View>
  );
};

ViroAnimations.registerAnimations({
  rotateBox: {
    properties: {
      rotateY: "+=45",
    },
    duration: 1500,
  },
  rotateSphere: {
    properties: {
      rotateY: "+=45",
    },
    duration: 1500,
  },
});

ViroMaterials.createMaterials({
  box: {
    diffuseTexture: require("../../../res/images/wood.png"),
  },
  sphere: {
    diffuseTexture: require("../../../res/images/stone.webp"),
  },
});

export default Landing;
