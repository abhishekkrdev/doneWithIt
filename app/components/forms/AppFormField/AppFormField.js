import React, { Fragment } from "react";
import { useFormikContext } from "formik";
import { StyleSheet } from "react-native";
import AppTextInput from "../../AppTextInput";
import ErrorMessage from "../ErrorMessage";

const AppFormField = ({ name, ...otherProps }) => {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();
  return (
    <Fragment>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </Fragment>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});
