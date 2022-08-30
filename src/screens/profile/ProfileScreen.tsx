import React from 'react'
import { Container } from '../../shared/components'
import ProfileHeader from './components/ProfileHeader'
import TopTabNavigator from './tabs/TopTabNavigator'

const ProfileScreen = () => {
    return (
        <Container>
            <ProfileHeader />
            <TopTabNavigator />
        </Container>
    )
}

export default ProfileScreen