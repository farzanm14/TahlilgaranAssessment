import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { responsiveHeight as rh, responsiveWidth as rw } from "react-native-responsive-dimensions"
import { BackIcon } from '../../../assets/icons'
import { IconicAvatar, Text } from '../../../shared/components'
import { User } from '../../../shared/types'

interface Props {
    selectedUser: User
}

const ProfileHeader = ({ selectedUser }: Props) => {

    const { goBack } = useNavigation()

    function UserItem() {
        return (
            <View style={styles.container} >
                <IconicAvatar style={styles.userImage} circle={true} />
                <View style={styles.nameContainer}>
                    <Text bold>{selectedUser.username}</Text>
                    <Text>{selectedUser.name}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <UserItem />
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