/**
 * initial screen that user gonna see
 * call users list and as response received, user will navigate to see the list
 */

import React, { useEffect } from 'react'
import SplashIcon from '../../assets/icons/SplashIcon'
import UsersHook from '../../hooks/UsersHook'
import { Container, Text } from '../../shared/components'

const SplashScreen = () => {
    const { receiveUsersList } = UsersHook()

    useEffect(() => {
        receiveUsersList()
    }, [])

    return (
        <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
            <SplashIcon iconSize={60} />
            <Text>Farzan's Assessment App</Text>
        </Container>
    )
}

export default SplashScreen