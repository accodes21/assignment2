import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";

interface FormInputProps {
  label: string;
  name: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
  value?: string | number;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  placeholder,
  onChange,
  onBlur,
  error,
  touched,
  value,
}) => {
  return (
    <FormControl isInvalid={!!error && touched}>
      <FormLabel>{label}</FormLabel>
      <Input
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {error && touched && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default FormInput;
