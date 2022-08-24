import React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
import colors from "../theme/colors";
import fontSizes from "../theme/fontSizes";

export type Props = {
    children: any;
    bold?: boolean;
    light?: boolean;
    small?: boolean;
    style?: TextStyle | TextStyle[];
    onPress?: any,
};

const BaseText: React.FC<Props> = ({
    style, children, bold, light, small, onPress, ...rest }) => {
    return (
        <Text onPress={onPress}
            style={[
                styles.text,
                bold && styles.bold,
                light && styles.light,
                small && styles.small,
                style,
            ]}
            {...rest}
        >
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: colors.primaryDarkText,
        fontSize: fontSizes.medium,
    },
    bold: {
        fontSize: fontSizes.large,
        letterSpacing: 0,
    },
    light: {
        fontSize: fontSizes.medium,
        color: colors.primaryLightText,
    },
    small: {
        fontSize: fontSizes.verySmall,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 25,
        letterSpacing: 0,
        textAlign: "right",
        color: "#404040"
    }
})

export default React.memo(BaseText);

