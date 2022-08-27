import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../theme/colors'


export type Props = {
  children: any;
  style?: StyleProp<ViewStyle>;
};

const Container: React.FC<Props> = ({
  style,
  children
}) => {
  return (
    <SafeAreaView style={[{ flex: 1, backgroundColor: colors.white }, style]}>
      {children}
    </SafeAreaView>
  )
}

export default React.memo(Container);
