/**
 * as application user select a profile from usersList
 * selected item data shows here
 * same header component for both tabs 
 * and a top tab layout to show Albums and Posts
 */

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