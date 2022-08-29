import { View, StyleSheet, ViewStyle } from 'react-native'
import React from 'react'
import { responsiveWidth as rw } from "react-native-responsive-dimensions";
import Text from './Text';
import { generateColor } from '../services/Tools';
import colors from '../theme/colors';


type AvatarProps = {
    firstChar: string,
    circle?: boolean,
    size?: number,
    style?: ViewStyle
};

const defaultSize = rw(10)

function Avatar({ circle = false, firstChar, size = defaultSize, style }: AvatarProps): JSX.Element {
    return (
        <View style={[
            styles.container,
            {
                width: size,
                height: size,
                borderRadius: size / 6,
                backgroundColor: generateColor()
            },
            circle && { borderRadius: size / 2 },
            style
        ]}>
            <Text bold style={styles.firstChar}>{firstChar[0].toUpperCase()}</Text>
        </View>
    )
}

export default Avatar;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }, firstChar: {
        color: colors.white
    }
})