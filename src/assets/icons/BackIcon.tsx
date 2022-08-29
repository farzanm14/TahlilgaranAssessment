import React from "react";
import { Icon } from "../../shared/components";
import { MyIconProps } from "../../shared/components/Icon";

const BackIcon = ({ ...prp }: MyIconProps) => {
    return <Icon name="chevron-right" {...prp} />;
}

export default BackIcon;