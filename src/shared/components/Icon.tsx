import React from "react";
import { Pressable, ViewStyle } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import { responsiveWidth as rw } from "react-native-responsive-dimensions";

export interface MyIconProps {
    size?: number;
    style?: ViewStyle;
    onPress?: () => void;
    color?: string;
    name?: string
    type?: string
};

const myIconSize = rw(10)
const BaseIcon: React.FC<MyIconProps> = ({
    type = "Feather", name, style, size = myIconSize, onPress, ...prp
}) => {
    const hitSlopSize = rw(2)
    const baseStyle: ViewStyle = { width: size, height: size, justifyContent: 'center', alignItems: 'center' }

    return (
        <Pressable style={[
            baseStyle,
            style
        ]}
            hitSlop={{ top: hitSlopSize, bottom: hitSlopSize, left: hitSlopSize, right: hitSlopSize }}
            onPress={onPress}
        >
            <Icon
                type={type}
                size={size}
                name={name}
                style={{
                    alignSelf: 'center',
                }}
                {...prp} />
        </Pressable>)
};

export default BaseIcon;