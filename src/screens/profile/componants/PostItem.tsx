import React from 'react';
import { StyleSheet, View } from 'react-native';
import { responsiveWidth as rw } from "react-native-responsive-dimensions";
import { Image } from '../../../shared/components';

const PostItem = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: "" }} style={styles.postImage} />
        </View>
    )
}

export default PostItem

const imageSize = rw(40)
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    }, postImage: {
        width: imageSize,
        height: imageSize,
    }
})