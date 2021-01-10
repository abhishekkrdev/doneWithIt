import React from "react";
import { View, Image, TouchableHighlight } from "react-native";
import colors from "../../config/colors";
import Swipable from "react-native-gesture-handler/Swipeable";

import AppText from "../AppText";
import styles from "./styles";

const ListItem = ({ image, title, subTitle, onPress, renderRightActions }) => {
  return (
    <Swipable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipable>
  );
};

export default ListItem;
