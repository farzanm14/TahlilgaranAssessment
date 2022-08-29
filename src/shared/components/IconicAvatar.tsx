import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { responsiveWidth as rw } from "react-native-responsive-dimensions";
import { ProfileIcon } from '../../assets/icons';
import colors from '../theme/colors';


type AvatarProps = {

    circle?: boolean,
    size?: number,
    style?: ViewStyle
};

const defaultSize = rw(15)

function Avatar({ circle = false, size = defaultSize, style }: AvatarProps): JSX.Element {
    return (
        <View style={[
            styles.container,
            {
                width: size,
                height: size,
                borderRadius: size / 6,
                backgroundColor: colors.greyLight
            },
            circle && { borderRadius: size / 2 },
            style
        ]}>
            <ProfileIcon color={colors.primary} />
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