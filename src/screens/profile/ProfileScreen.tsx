import React from 'react'
import { Container } from '../../shared/components'
import { User } from '../../shared/types'
import ProfileHeader from './components/ProfileHeader'
import TopTabNavigator from './tabs/TopTabNavigator'

const ProfileScreen = () => {
    let tempUser: User = {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }

    }
    return (
        <Container>
            <ProfileHeader selectedUser={tempUser} />
            <TopTabNavigator selectedUser={tempUser} />
        </Container>
    )
}

export default ProfileScreen