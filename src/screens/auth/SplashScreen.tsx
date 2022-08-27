import React from 'react'
import SplashIcon from '../../assets/icons/SplashIcon'
import { Container, Text } from '../../shared/components'

const SplashScreen = () => {
    return (
        <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
            <SplashIcon iconSize={60} />
            <Text>Farzan's Assessment App</Text>
        </Container>
    )
}

export default SplashScreen