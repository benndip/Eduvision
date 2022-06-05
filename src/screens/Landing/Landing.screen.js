import React, { useState, useEffect, useContext } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import NetInfo from "@react-native-community/netinfo";

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
    }, 1000);
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

      <ViroOmniLight
        position={[0, 0, 0]}
        color="#ffffff"
        attenuationStartDistance={40}
        attenuationEndDistance={50}
      />
      {showModels && (
        <ViroNode position={[0, 0.1, -0.5]}>
          <ViroOrbitCamera
            active={true}
            position={[0, 0, -0]}
            focalPoint={[0, 0.1, -5]}
          />
          <Viro3DObject
            source={require("../../../res/models/heart/heart.glb")}
            // resources={[]}
            position={[0, 1.2, -5]}
            scale={[0.8, 0.8, 0.8]}
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
  const { user, setUser } = useContext(AuthContext);

  const onAuthStateChanged = (user) => {
    setUser(user);
    getStarted()
  }

  const checkInternetConnection = () => {
    const unsubscribe = NetInfo.addEventListener(state => {
      const { type, isConnected, isInternetReachable } = state;
      console.log("Connection type", type);
      console.log("Is connected?", isConnected);
      console.log("is Internet Reachable?", isInternetReachable);

      if (isConnected && isInternetReachable) {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      } else {
        showToastWithGravityAndOffset('Please check you internet connection and Press Get Started');
        return
      }
    });
  }

  const showToastWithGravityAndOffset = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };
  
  const getStarted = () => {
    user ?
      navigation.navigate("Home")
      :
      navigation.navigate("Login")
  }

  useEffect(() => {
    
  }, []);


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
        onPress={checkInternetConnection}
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

export default Landing;
