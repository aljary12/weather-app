import React from 'react';
import Box from '../components/box';
import Text from '../components/text';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';

interface Props {
  icon: string;
  title: string;
  body: string;
  style?: StyleProp<ViewStyle>;
}

function WeatherData({icon, title, body, style}: Props) {
  return (
    <Box style={[styles.container, style]}>
      <Box row center-y style={{gap: 4}}>
        <Icons name={icon} size={16} color="#BDBDBD" />
        <Text>{title}</Text>
      </Box>
      <Text size="h5" weight="semiBold">
        {body}
      </Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    flex: 1,
    gap: 4,
  },
});

export default WeatherData;
