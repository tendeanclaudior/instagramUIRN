import {View} from 'react-native';
import React from 'react';

export type Props = {
  width: number;
  height: number;
};

const Gap = ({width, height}: Props) => {
  return <View style={{width: width, height: height}} />;
};

export default Gap;
