import { FieldError } from "react-hook-form";
import { TextInput, Text } from "react-native";
import React, { FC, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errors?: FieldError
}


const Input: FC<Props> = (props) => {
  const { style, errors, ...otherProps } = props;
  const { border } = style;
  console.log(errors)

  return (
    <>
      <TextInput
        style={style}
        placeholderTextColor="#003f5c"
        {...otherProps}
      />
      {errors && <Text style={{ color: 'red' }}>{errors.message}</Text>}
    </>
  );
}



export default Input;