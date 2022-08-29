import React from "react";
import { responsiveWidth as rw } from "react-native-responsive-dimensions";
import { Icon } from "../../shared/components";
import { MyIconProps } from "../../shared/components/Icon";

const ProfileIcon = ({ ...prp }: MyIconProps) => {
    return <Icon name="user" size={rw(8)} {...prp} />;
}

export default ProfileIcon;