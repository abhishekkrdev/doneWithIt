import React from "react";
import { StyleSheet, View } from "react-native";
import ImageInput from "../ImageInput";

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  return (
    <View style={styles.container}>
      {imageUris.map((uri) => {
        return (
          <View key={uri}>
            <ImageInput
              imageUri={uri}
              onChangeImage={() => {
                onRemoveImage(uri);
              }}
            />
          </View>
        );
      })}
      <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

export default ImageInputList;
