import React from 'react'
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import { responsiveHeight as rh, responsiveWidth as rw } from "react-native-responsive-dimensions"
import colors from '../../shared/theme/colors'

export type Props = {
    children?: any;
    title?: string;
    onPress?: () => void;
    style?: ViewStyle;
};

const FabButton: React.FC<Props> = ({
    style, children, title, onPress, ...rest
}) => {
    return (
        <TouchableOpacity
            style={[styles.fabContainer, style]}
            onPress={onPress}
            {...rest}
        >
            {children}
        </TouchableOpacity>
    )
}

export default FabButton;

const styles = StyleSheet.create({
    fabContainer: {
        width: rw(15),
        height: rw(15),
        backgroundColor: colors.greyLight,
        borderRadius: rw(15) / 2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: rh(5),
        right: rw(10),
        zIndex: 2,
        elevation: 1
    }
})