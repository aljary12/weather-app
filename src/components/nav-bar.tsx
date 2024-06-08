import {TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import React from 'react';
import Text from './text';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Box from './box';

interface Props {
  back?: boolean;
  title: string;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
}
export default function NavBar(props: Props) {
  const navigation = useNavigation();
  const {back, title, containerStyle, titleStyle} = props;

  return (
    <Box style={[{paddingVertical: 16}, containerStyle]}>
      <Box row center-y>
        {back && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} />
          </TouchableOpacity>
        )}

        <Text
          center
          size="h5"
          weight="bold"
          style={[
            {position: 'absolute', left: 0, right: 0, zIndex: -1},
            titleStyle,
          ]}>
          {title}
        </Text>
      </Box>
    </Box>
  );
}
