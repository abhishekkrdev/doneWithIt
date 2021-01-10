import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10
  },
  subTitle: {
    color: colors.medium
  },
  title: {
    fontWeight: "700"
  }
});

export default styles;
