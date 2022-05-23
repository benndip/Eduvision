import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import styles from "./Details.style";

import { VrScene, ModelGroupAr } from "../../components";

const Details = ({ route }) => {
  const { name, description } = route.params.item;

  const [modelLoading, SetModelLoading] = useState(false);
  const [showingAr, setShowingAr] = useState(false);
  const [animate, setAnimate] = useState(true);

  const changeLabeledState = () => {
    alert('Coming soon')
  }

  const changeRotationState =  () => {
    alert('Coming soon')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{name}</Text>
      <View style={styles.modelViewCard}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.changeView}
          onPress={() => setShowingAr(!showingAr)}
        >
          {!showingAr ? (
            <MaterialCommunityIcons
              name="augmented-reality"
              size={50}
              color="#b71540"
            />
          ) : (
            <MaterialIcons name="3d-rotation" size={50} color="#b71540" />
          )}
        </TouchableOpacity>
        {!showingAr ? (
          <VrScene animate={animate} item={route.params.item} />
        ) : (
          <ModelGroupAr item={route.params.item} />
        )}
        {modelLoading && (
          <Text style={styles.modelLoadingText}>
            Loading Model Please Wait...
          </Text>
        )}
      </View>
      <View style={styles.lableAndRotateViews}>
        <TouchableOpacity style={styles.labelButton} onPress={changeLabeledState}>
          <MaterialIcons name="label" size={24} color="#ffffff" />
          <Text style={styles.labelText}>Unlabel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rotateButton} onPress={changeRotationState}>
          <MaterialCommunityIcons
            name="axis-z-rotate-clockwise"
            size={24}
            color="#ffffff"
          />
          <Text style={styles.rotateButtonText}>Rotate</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Text style={styles.detailsText}>{description}</Text>
      </ScrollView>
    </View>
  );
};

export default Details;
