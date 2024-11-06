import {
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";

interface FormSelectProps {
  label: string;
  name: string;
  placeholder?: string;
  options: Array<{ label: string; value: string }>;
  onChange: (field: string, value: any) => void;
  onBlur: (field: string, touched: boolean) => void;
  error?: string;
  touched?: boolean;
  value?: string;
}

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  name,
  placeholder,
  options,
  onChange,
  onBlur,
  error,
  touched,
  value,
}) => {
  return (
    <FormControl isInvalid={!!error && touched}>
      <FormLabel>{label}</FormLabel>
      <Select
        placeholder={placeholder}
        name={name}
        onChange={(e) => onChange(name, e.target.value)}
        onBlur={() => onBlur(name, true)}
        value={value || ""}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      {error && touched && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default FormSelect;
