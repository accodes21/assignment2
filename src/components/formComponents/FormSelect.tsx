import React from "react";
import { useField } from "formik";
import Select from "react-select";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";

interface Option {
  label: string;
  value: string;
}

interface IFormSelectProps {
  label: string;
  name: string;
  options: Option[];
  selectProps?: any; // Optional additional props for ReactSelect
}

const FormSelect: React.FC<IFormSelectProps> = ({
  label,
  name,
  options,
  selectProps,
}) => {
  // Use Formik's useField to connect the select input with Formik state
  const [field, meta, helpers] = useField(name);

  const handleChange = (option: Option | null) => {
    // Call Formik's setValue function to update field value in Formik state
    helpers.setValue(option ? option.value : "");
  };

  const handleBlur = () => {
    // Call Formik's setTouched function to mark field as touched
    helpers.setTouched(true);
  };

  return (
    <FormControl isInvalid={!!meta.error && meta.touched}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Select
        id={name}
        options={options}
        value={options.find((option) => option.value === field.value)}
        onChange={handleChange}
        onBlur={handleBlur}
        {...selectProps}
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormSelect;
