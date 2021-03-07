import React from "react";
import { View, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipable from "react-native-gesture-handler/Swipeable";

import colors from "../../../config/colors";
import AppText from "../../AppText";
import styles from "./styles";

const ListItem = ({ image, title, subTitle, IconComponent, onPress, renderRightActions }) => {
  return (
    <Swipable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {image && <Image source={image} style={styles.image} />}
          {IconComponent}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons color={colors.medium} name="chevron-left" size={25} />
        </View>
      </TouchableHighlight>
    </Swipable>
  );
};

export default ListItem;
