import { FieldError } from "react-hook-form";
import { TextInput, Text, TextInputProps } from "react-native";
import React, { FC } from "react";

interface Props extends TextInputProps {
  errors?: FieldError;
}

const Input: FC<Props> = (props) => {
  const { style, errors, ...rest } = props;

  return (
    <>
      <TextInput
        {...rest}
        style={[style, errors && { borderBottomColor: "red" }]}
        placeholderTextColor="#003f5c"
      />
      {errors && (
        <Text testID="ErrorTrue" style={{ color: "red" }}>
          {errors.message}
        </Text>
      )}
    </>
  );
};

export default Input;
