import React from 'react'
import { StyleProp, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import { responsiveHeight as rh, responsiveWidth as rw } from "react-native-responsive-dimensions";
import Text from './Text'
import colors from '../theme/colors'

export type Props = {
    children?: any;
    title?: string;
    onPress?: () => void;
    bordered?: boolean;
    bold?: boolean;
    disabled?: boolean;
    style?: StyleProp<any>;
    titleStyle?: StyleProp<any>;
};

const PrimaryButton: React.FC<Props> = ({
    style, children, title, onPress, bordered = false,
    titleStyle, bold, disabled, }) => {

    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress} style={[
                styles.container,
                bordered ? styles.borderContainer : styles.backgroundContainer,
                style,
            ]}>
            {children ? children : <Text bold={bold} style={[
                styles.titleStyle,
                titleStyle,
                { color: bordered ? colors.primary : colors.primaryText },
            ]}>{title}</Text>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: rh(5),
        width: '100%',
        backgroundColor: colors.primary,
        borderRadius: rw(3),
        justifyContent: 'center',
        alignItems: 'center',
    },
    borderContainer: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.primary,
    },
    backgroundContainer: {
        backgroundColor: colors.primary
    }, titleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        letterSpacing: 0,
        color: colors.white
    }

})

export default React.memo(PrimaryButton);
