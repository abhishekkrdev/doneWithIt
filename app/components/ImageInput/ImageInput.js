import React, { useEffect } from "react";
import { View, Image, TouchableWithoutFeedback, Alert, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import styles from "./styles";
import colors from "../../config/colors";

const ImageInput = ({ imageUri, onChangeImage }) => {
  useEffect(() => {
    const requestPermission = async () => {
      const { granted } = await ImagePicker.requestCameraPermissionsAsync();
      if (!granted) {
        alert("You need to enable permission to access the library");
      }
    };
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      });

      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (e) {
      console.log("Error reading an image", error);
    }
  };
  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else {
      Alert.alert("Delete", "Are you sure you want to delete this image? ", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" }
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && <MaterialCommunityIcons size={40} color={colors.medium} name="camera" />}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;
