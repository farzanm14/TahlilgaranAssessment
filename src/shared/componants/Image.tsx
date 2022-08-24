import React from 'react';
import { StyleProp, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

export type Props = {
    style?: StyleProp<any>;
    source: any,//TODO find right type
};

const Image: React.FC<Props> = ({ style, source, ...rest }) => {
    return (
        <FastImage
            style={[
                styles.baseImage,
                style
            ]}
            source={source}
            resizeMode={FastImage.resizeMode.cover}
            {...rest}
        />
    )
}

export default Image;

const styles = StyleSheet.create({
    baseImage: {
        alignSelf: 'center'
    },
})