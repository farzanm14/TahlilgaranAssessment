import { StackActions, useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import { responsiveHeight as rh, responsiveWidth as rw } from "react-native-responsive-dimensions"
import UsersHook from '../../hooks/UsersHook'
import { Button, Container, EmptyState, Text } from '../../shared/components'
import Loading from '../../shared/components/LoadingState'
import { Routes } from '../../shared/constants/routes'
import colors from '../../shared/theme/colors'
import { User } from '../../shared/types'
import UserItem from './components/UserItem'

const UsersScreen = () => {
    const navigation = useNavigation()
    // const [usersList, setUsersList] = useState<User[]>([])
    const [dataHasReceived, setDataHasReceived] = useState<boolean>(false)
    const { loading, receiveUsersList, usersList, } = UsersHook()

    useEffect(() => {
        receiveUsersList()
        setDataHasReceived(true)
    }, [dataHasReceived])


    const moveToSelectedUserProfile = () => {
        navigation.dispatch(
            StackActions.push(Routes.PROFILE)
        );
    }

    const renderItem = ({ item }: { item: User }) => (
        <UserItem user={item} onPress={moveToSelectedUserProfile} />
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
                data={usersList}
                renderItem={renderItem}
                style={styles.list}

                stickyHeaderIndices={[0]}
                stickyHeaderHiddenOnScroll={true}
                ListHeaderComponent={<Header />}
                ListEmptyComponent={loading ?
                    <Loading /> :
                    <EmptyState message={"there isn't any user"} />}
            />
        </Container>
    )
}

export default UsersScreen;

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