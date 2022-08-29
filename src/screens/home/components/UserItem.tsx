import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { responsiveHeight as rh, responsiveWidth as rw } from "react-native-responsive-dimensions";
import { Avatar, Text } from '../../../shared/components';
import { User } from '../../../shared/types';

type UserProps = {
    user: User;
    onPress: () => void
};

function UserItem({ user, onPress }: UserProps): JSX.Element {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Avatar style={styles.userImage} circle={true} firstChar={user.username} />
            <View style={styles.nameContainer}>
                <Text bold>{user.username}</Text>
                <Text>{user.name}</Text>
            </View>
        </Pressable>
    )
}

export default UserItem;

const styles = StyleSheet.create({
    container: {
        marginVertical: rh(1.5),
        flexDirection: 'row'
    }, userImage: {
        marginHorizontal: rw(3)
    }, nameContainer: {

    }
})