import React, { Fragment, useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";

import routes from "../navigation/routes";
import Screen from "../components/Screen";
import Card from "../components/Card";
import ActivityIndicator from "../components/ActivityIndicator/ActivityIndicator";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import listingsApi from "../api/listings";
import colors from "../config/colors";
import useApi from "../hooks/useApi";

const ListingsScreen = ({ navigation }) => {
  const { data: listings, error, loading, request: loadListings } = useApi(listingsApi.getListings);
  useEffect(() => {
    loadListings();
  }, []);

  const displayError = () => (
    <Fragment>
      <AppText>Couldn't retrieve the listings</AppText>
      <AppButton title="Retry" onPress={loadListings} />
    </Fragment>
  );
  return (
    <Screen style={styles.screen}>
      {error && displayError()}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => {
              navigation.navigate(routes.LISTING_DETAILS, item);
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  }
});
