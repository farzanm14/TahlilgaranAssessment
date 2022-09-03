/**
 * global component to preview images
 *  I prefer fastImage to react-natives image but I couldn't find out why it's not working
 * 
 * Fast image cache downloaded images and it makes faster renders
 */

import React from 'react';
import { Image, ImageSourcePropType, StyleProp, StyleSheet } from 'react-native';
import FastImage, { ImageStyle, Source } from 'react-native-fast-image';
import images from '../../assets/images';

export type Props = {
    style?: ImageStyle,//StyleProp<ImageStyle>;
    source: Source | number,// ImageSourcePropType
    size?: number
};

const MyImage: React.FC<Props> = ({ style, source, size, ...rest }) => {
    return (
        <Image//FastImage 
            style={[
                styles.baseImage,
                size != undefined && { width: size, height: size },
                style
            ]}
            source={!source ? images.global.defaultSrc : source}
            defaultSource={images.global.defaultSrc}
            resizeMode={FastImage.resizeMode.cover}
            {...rest}
        />
    )
}

export default MyImage;

const styles = StyleSheet.create({
    baseImage: {
        // alignSelf: 'center'
    },
})