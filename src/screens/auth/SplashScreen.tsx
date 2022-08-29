import { useNavigation, StackActions } from '@react-navigation/native'
import React, { useEffect } from 'react'
import SplashIcon from '../../assets/icons/SplashIcon'
import { Container, Text } from '../../shared/components'
import { Routes } from '../../shared/constants/routes'

const SplashScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(
                StackActions.replace(Routes.HOME)
            );
        }, 2000);

        return () => { }
    }, [])

    return (
        <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
            {/* <SplashIcon iconSize={60} /> */}
            <Text>Farzan's Assessment App</Text>
        </Container>
    )
}

export default SplashScreen