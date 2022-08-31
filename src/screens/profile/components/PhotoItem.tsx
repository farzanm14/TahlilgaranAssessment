import { Pressable, StyleSheet, View, } from 'react-native'
import React from 'react'
import { Photo } from '../../../shared/types';
import { Image, Text } from '../../../shared/components';
import { responsiveHeight as rh, responsiveWidth as rw } from "react-native-responsive-dimensions"
import colors from '../../../shared/theme/colors';

type PhotoProps = {
    photo: Photo;
    onPress: () => void
};

function PhotoItem({ photo, onPress }: PhotoProps): JSX.Element {
    return (
        <Pressable style={styles.photoItemContainer} onPress={onPress}>
            <Image size={rw(20)} style={styles.image} source={{ uri: photo.thumbnailUrl }} />
            <Text small style={styles.title}>{photo.title}</Text>
        </Pressable>
    )
}

export default PhotoItem;

const styles = StyleSheet.create({
    photoItemContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: rw(2),
        borderColor: colors.greyLight,
        borderWidth: 0.5,
        borderRadius: 10,
        // backgroundColor: 'red',
        marginVertical: rh(0.3)
    }, title: {
        width: rw(25),
    }, image: {
        borderRadius: 10,
    }
})