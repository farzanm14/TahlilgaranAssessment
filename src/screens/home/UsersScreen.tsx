/**
 * this screen preview list of users
 * while list isn't loading yet, user see spinner
 * as data received the state will update and he can see users in a flatList
 * 
 * in case list is empty, empty state component preview a empty text
 */

import { StackActions, useNavigation } from '@react-navigation/native'
import { observer } from "mobx-react"
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { responsiveHeight as rh, responsiveWidth as rw } from "react-native-responsive-dimensions"
import ProfileHook from '../../hooks/ProfileHook'
import { Container, EmptyState, Text } from '../../shared/components'
import Loading from '../../shared/components/LoadingState'
import { Routes } from '../../shared/constants/routes'
import colors from '../../shared/theme/colors'
import { User } from '../../shared/types'
import { useMobxStore } from '../../stores'
import UserItem from './components/UserItem'

const UsersScreen = () => {
    const navigation = useNavigation()
    const { users: { listOfUsers, listOfUsersLoading, setSelectedUser }, } = useMobxStore();

    const { receiveAlbumsList, receivePostsList } = ProfileHook()

    const moveToSelectedUserProfile = async (selectedUser: User) => {
        setSelectedUser(selectedUser)
        receiveAlbumsList(selectedUser.id)
        receivePostsList(selectedUser.id)
        navigation.dispatch(
            StackActions.push(Routes.PROFILE)
        );
    }

    const renderItem = ({ item }: { item: User }) => (
        <UserItem user={item} onPress={() => moveToSelectedUserProfile(item)} />
    )

    const Header = () => {
        return (
            <View style={styles.header}>
                <Text bold>Users</Text>
            </View>
        )
    }
    return (
        <Container>
            <FlatList<User>
                keyExtractor={(item, key) => key.toString()}
                data={listOfUsers}
                extraData={listOfUsers}
                renderItem={renderItem}//move renderItem to separate method in order to enhance performance
                style={styles.list}
                stickyHeaderHiddenOnScroll={true}
                ListHeaderComponent={<Header />}
                ListEmptyComponent={listOfUsersLoading ? <Loading /> :
                    <EmptyState message={"there isn't any user"} />}
            />
        </Container>
    )
}

export default observer(UsersScreen);

const styles = StyleSheet.create({
    list: { marginTop: rh(3) },
    header: {
        paddingHorizontal: rw(5),
        paddingVertical: rh(2),
        backgroundColor: colors.white
    }, emptyState: {
        flex: 1,
        alignItems: 'center',
        marginTop: rh(35)
    }
})