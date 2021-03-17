import React from "react";
import { StyleSheet, Image, View } from "react-native";

import ListItem from "../components/lists/ListItem";
import AppText from "../components/AppText";
import Screen from "../components/Screen/Screen";
import colors from "../config/colors";

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;
  return (
    <Screen>
      <Image source={{ uri: listing.images[0].url }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Abhishek Kumar"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  detailsContainer: { padding: 20 },
  image: { width: "100%", height: 300 },
  title: {
    fontSize: 24,
    fontWeight: "500"
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10
  },
  userContainer: {
    marginVertical: 35
  }
});

export default ListingDetailsScreen;
