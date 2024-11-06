import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  InputGroup,
  FormControlProps,
} from "@chakra-ui/react";

export interface IFormControlProps {
  label?: React.ReactNode;
  error?: string;
  wrapperProps?: FormControlProps;
  children?: React.ReactNode;
  helperText?: React.ReactNode;
  isInvalid: boolean;
  touched?: any;
}

const FromWrapper: React.FC<IFormControlProps> = ({
  label,
  isInvalid,
  error,
  children,
  helperText,
  wrapperProps = {},
  touched,
}) => {
  return (
    <FormControl isInvalid={isInvalid} {...wrapperProps}>
      {label && <FormLabel>{label}</FormLabel>}
      <InputGroup>{children}</InputGroup>
      {error && touched && <FormErrorMessage>{error}</FormErrorMessage>}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default FromWrapper;
