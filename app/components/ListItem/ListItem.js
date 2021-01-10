import React from "react";
import { View, Image, TouchableHighlight } from "react-native";
import colors from "../../config/colors";

import AppText from "../AppText";
import styles from "./styles";

const ListItem = ({ image, title, subTitle, onPress }) => {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ListItem;
