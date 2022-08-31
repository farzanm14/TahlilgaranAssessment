import { StackActions, useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import SplashIcon from '../../assets/icons/SplashIcon'
import UsersHook from '../../hooks/UsersHook'
import { Container, Text } from '../../shared/components'
import { Routes } from '../../shared/constants/routes'
import { useMobxStore } from '../../stores'

const SplashScreen = () => {
    const navigation = useNavigation()
    const { receiveUsersList, } = UsersHook()
    const { users: { listOfUsersLoading, } } = useMobxStore();
    const [requestHasFinished, setrequestHasFinished] = useState(false)
    // useEffect(() => { }, [listOfUsersLoading])
    // console.log("listOfUsersLoading", listOfUsersLoading);

    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(
                StackActions.replace(Routes.HOME)
            );
        }, 2000);
    }, [requestHasFinished])

    useEffect(() => {
        setrequestHasFinished(true)
    }, [listOfUsersLoading])

    useEffect(() => {
        receiveUsersList()
        // listOfUsersLoading == false && setTimeout(() => {
        //     navigation.dispatch(
        //         StackActions.replace(Routes.HOME)
        //     );
        // }, 2000);
    }, [])

    return (
        <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
            <SplashIcon iconSize={60} />
            <Text>Farzan's Assessment App</Text>
        </Container>
    )
}

export default SplashScreen