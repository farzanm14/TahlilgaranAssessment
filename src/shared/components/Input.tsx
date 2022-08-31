import React from "react";
import { StyleSheet, TextInput, TextStyle, View, ViewStyle } from "react-native";
import colors from "../theme/colors";
import Text from "./Text";
import { responsiveWidth as rw, responsiveHeight as rh } from "react-native-responsive-dimensions";

interface Props {
    label?: string,
    onChangeText: (value: string) => void,
    containerStyle?: ViewStyle,
    inputStyle?: TextStyle,
    labelStyle?: TextStyle,
    value?: string,
    placeholder?: string,
    textArea?: boolean,
    maxLength?: number
}

const Input = ({ label, value, placeholder = "", onChangeText, containerStyle, inputStyle, labelStyle, textArea, maxLength, ...prp }: Props) => {
    return (
        <View style={[styles.containerStyle, containerStyle]}>
            {label != null && <Text style={[styles.labelStyle, labelStyle]}>{label}</Text>}
            <TextInput
                style={[
                    styles.textInput,
                    inputStyle,
                ]}
                placeholder={placeholder}
                placeholderTextColor={colors.greyLight}
                value={value}
                maxLength={maxLength}
                numberOfLines={textArea ? 5 : 1}
                onChange={(value: string) => onChangeText(value)}
                {...prp}
            />
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.greyLight,
        color: colors.primaryDarkText,
        // padding: rw(3),
        alignContent: 'flex-start',
    }, containerStyle: {
        // marginVertical: 15,//rh(2)
    }, labelStyle: {
        // marginVertical: 10,//rh(0.5),
        marginHorizontal: rw(2)
    }
});
