import { View } from 'react-native'
import React from 'react'
import TopTabNavigator from './tabs/TopTabNavigator'
import ProfileHeader from './components/ProfileHeader'
import { Container } from '../../shared/components'

const ProfileScreen = () => {
    return (
        <Container>
            <ProfileHeader />
            <TopTabNavigator />
        </Container>
    )
}

export default ProfileScreen