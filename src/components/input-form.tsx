import {
  View,
  TextInputProps,
  ViewStyle,
  StyleProp,
  TextInput,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Text, {sizes, weights} from './text';

interface Props extends TextInputProps {
  title?: string;
  formStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  isPassword?: boolean;
}

export default function InputForm(props: Props) {
  const {title, formStyle, inputStyle, isPassword, style, ...rest} = props;

  return (
    <View style={formStyle}>
      {!!title && (
        <Text size="large" weight="semiBold" style={{marginBottom: 8}}>
          {title}
        </Text>
      )}
      <View style={[styles.inputContainer, inputStyle]}>
        <TextInput
          style={[weights.regular, sizes.medium, styles.input, style]}
          {...rest}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 18,
    paddingHorizontal: 20,
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    flexDirection: 'row',
    gap: 12,
  },
  input: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: 0,
    margin: 0,
    includeFontPadding: false,
    flex: 1,
  },
});
