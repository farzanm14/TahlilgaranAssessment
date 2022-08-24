import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Image, Text } from '../../../shared/components';
import { responsiveHeight as rh, responsiveWidth as rw } from "react-native-responsive-dimensions";
import { User } from '../../../shared/types';

const AlbumItem = (user: User) => {
    return (
        <Pressable style={styles.container}>
            <Image source={{ uri: "" }} style={styles.albumCover} />
            <View style={styles.nameContainer}>
                <Text bold>{user.username}</Text>
                <Text>{user.name}</Text>
            </View>
        </Pressable>
    )
}

const imageSize = rw(20)
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    }, albumCover: {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }, nameContainer: {
    }
})
export default AlbumItem