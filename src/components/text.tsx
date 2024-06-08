import React from "react";
import { Text as RNText, StyleSheet } from "react-native";

import type { TextProps as RNTextProps } from "react-native";

export type TextProps = RNTextProps & {
  fill?: boolean;
  center?: boolean;
  capitalize?: boolean;
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "x-large" | "large" | "medium" | "small" | "x-small";
  weight?: "bold" | "semiBold" | "medium" | "regular";
};

const Text = React.forwardRef<RNText, TextProps>((props, ref) => {
  const { fill, capitalize, center, size = "medium", weight = "regular", style, ...rest } = props;

  const _size = sizes[size];
  const _weight = weights[weight];

  return (
    <RNText
      ref={ref}
      style={[
        fill && {flex: 1},
        center && {textAlign: 'center'},
        capitalize && {textTransform: 'capitalize'},
        _size,
        _weight,
        style,
      ]}
      {...rest}
    />
  );
});

export default Text;

export const weights = StyleSheet.create({
  bold: {fontFamily: 'Mulish-Bold'},
  semiBold: {fontFamily: 'Mulish-SemiBold'},
  medium: {fontFamily: 'Mulish-Medium'},
  regular: {fontFamily: 'Mulish-Regular'},
});

export const sizes = StyleSheet.create({
  h1: {fontSize: 48},
  h2: {fontSize: 40},
  h3: {fontSize: 32},
  h4: {fontSize: 24},
  h5: {fontSize: 20},
  h6: {fontSize: 18},
  'x-large': {fontSize: 18},
  large: {fontSize: 16},
  medium: {fontSize: 14},
  small: {fontSize: 12},
  'x-small': {fontSize: 10},
});
