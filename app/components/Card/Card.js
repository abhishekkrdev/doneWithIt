import React from "react";
import { View, Image, TouchableWithoutFeedback } from "react-native";

import AppText from "../AppText";
import styles from "./styles";

const Card = ({ title, subTitle, image, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <View style={styles.detailContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;
