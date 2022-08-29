import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { BackIcon } from '../../../assets/icons'
import { generateColor } from '../../../shared/services/Tools'
import { Pressable, StyleSheet, View } from 'react-native'
import { responsiveHeight as rh, responsiveWidth as rw } from "react-native-responsive-dimensions"
import { IconicAvatar, Text } from '../../../shared/components'
import { User } from '../../../shared/types'


const ProfileHeader = () => {

    const { goBack } = useNavigation()
    type UserProps = {
        user: User;
        onPress: () => void,
    };

    function UserItem({ user }: UserProps): JSX.Element {
        return (
            <View style={styles.container} >
                <IconicAvatar style={styles.userImage} circle={true} />
                <View style={styles.nameContainer}>
                    <Text bold>{user.username}</Text>
                    <Text>{user.name}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <UserItem
                user={{
                    name: "farzaneh Mirzakhanloo",
                    username: "farzan_14"
                }} />
            <BackIcon onPress={() => goBack()} />
        </View>
    )
}

export default ProfileHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        alignContent: 'center',
        marginVertical: rh(1)
    }, backIcon: {
        alignSelf: 'center',
    },
    userItemContainer: {
        marginVertical: rh(1.5),
        flexDirection: 'row'
    }, userImage: {
        marginHorizontal: rw(3)
    }, nameContainer: {

    }
})