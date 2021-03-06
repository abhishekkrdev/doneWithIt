import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../../AppPicker";
import ErrorMessage from "../ErrorMessage";

const AppFormPicker = ({ items, name, placeholder, ...otherProps }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectedItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
