import React from 'react';
import { Icon } from '../../shared/components';
import colors from '../../shared/theme/colors';

const SendIcon = ({ ...prp }: any) => {
    return <Icon color={colors.green} name="send" {...prp} />;
}

export default SendIcon;