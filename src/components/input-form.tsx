import {
  TextInputProps,
  ViewStyle,
  StyleProp,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Text, {sizes, weights} from './text';
import Icon from 'react-native-vector-icons/Ionicons';
import {IconProps} from 'react-native-vector-icons/Icon';
import Box from './box';

interface Props extends TextInputProps {
  title?: string;
  formStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  rightIcon?: IconProps;
}

export default function InputForm(props: Props) {
  const {title, formStyle, inputStyle, rightIcon, style, ...rest} = props;

  return (
    <Box style={formStyle}>
      {!!title && (
        <Text size="large" weight="semiBold" style={{marginBottom: 8}}>
          {title}
        </Text>
      )}
      <Box style={[styles.inputContainer, inputStyle]}>
        <TextInput
          style={[weights.regular, sizes.medium, styles.input, style]}
          {...rest}
        />
        {rightIcon && (
          <TouchableOpacity onPress={rightIcon.onPress}>
            <Icon size={20} {...rightIcon} onPress={undefined} />
          </TouchableOpacity>
        )}
      </Box>
    </Box>
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
