import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Image, Text } from '../../../shared/components';
import { responsiveHeight as rh, responsiveWidth as rw } from "react-native-responsive-dimensions";
import { User } from '../../../shared/types';

const UserItem = ({ username, name }: User) => {
    return (
        <Pressable style={styles.container}>
            <Image source={{ uri: "" }} style={styles.userImage} />
            <View style={styles.nameContainer}>
                <Text bold>{username}</Text>
                <Text>{name}</Text>
            </View>
        </Pressable>
    )
}

export default UserItem;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
    }, userImage: {
        width: rw(20),
        height: rw(20),
    }, nameContainer: {
        flexDirection: 'row'
    }
})