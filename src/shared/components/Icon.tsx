import React from "react";
import Icon from "react-native-dynamic-vector-icons";
import { responsiveWidth as rw } from "react-native-responsive-dimensions";

const BaseIcon = ({ type = "Feather", name, style, ...prp }: any) => {
    const hitSlopSize = rw(2)
    const iconSize = rw(4)

    return <Icon
        hitSlop={{ top: hitSlopSize, bottom: hitSlopSize, left: hitSlopSize, right: hitSlopSize }}
        style={[
            { width: iconSize, height: iconSize },
            style
        ]}
        type
        name
        {...prp} />;
};

export default BaseIcon;