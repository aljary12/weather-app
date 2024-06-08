import React, {useRef} from 'react';
import {Animated, View, ViewProps} from 'react-native';

interface Props extends ViewProps {
  center?: boolean;
  'center-x'?: boolean;
  'center-y'?: boolean;
  row?: boolean;
  fill?: boolean;
}

function Box(props: Props) {
  const {
    style,
    center,
    'center-x': centerX,
    'center-y': centerY,
    row,
    fill,
    ...rest
  } = props;

  return (
    <View
      style={[
        fill && {flex: 1},
        row && {flexDirection: 'row'},
        centerX && (row ? {justifyContent: 'center'} : {alignItems: 'center'}),
        centerY && (row ? {alignItems: 'center'} : {justifyContent: 'center'}),
        center && {alignItems: 'center', justifyContent: 'center'},
        style,
      ]}
      {...rest}
    />
  );
}

export default Box;
