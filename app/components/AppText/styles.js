import { Platform, StyleSheet } from "react-native";
import colors from "../../config/colors";

const platformStyle = Platform.select({
  ios: {
    fontSize: 20,
    fontFamily: "Avenir"
  },
  android: {
    fontSize: 18,
    fontFamily: "Roboto"
  }
});

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    ...platformStyle
  }
});

export default styles;
