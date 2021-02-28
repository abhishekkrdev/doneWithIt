import React, { Fragment, useState } from "react";
import { StyleSheet, View, TouchableWithoutFeedback, Modal, Button, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../Screen";
import AppText from "../AppText";
import defaultStyles from "../../config/styles";
import PickerItem from "../PickerItem";

const AppPicker = ({ icon, items, onSelectedItem, placeholder, selectedItem, ...otherProps }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} />
          )}

          <AppText>{selectedItem ? selectedItem.label : placeholder}</AppText>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectedItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </Fragment>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: " 100%",
    padding: 15,
    marginVertical: 10
  },
  icon: {
    marginRight: 10
  }
});
