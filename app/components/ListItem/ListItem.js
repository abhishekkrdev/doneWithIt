import React from "react";
import { View, Image } from "react-native";

import AppText from "../AppText";
import styles from "./styles";

const ListItem = ({ image, title, subTitle }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default ListItem;
