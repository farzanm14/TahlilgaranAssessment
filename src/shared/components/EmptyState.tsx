import React from 'react'
import { View } from 'react-native'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import Text from './Text'

interface Props {
    message: string,
}

const EmptyState = ({ message }: Props) => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            marginTop: responsiveHeight(35),
        }}>
            <Text light small>{message}</Text>
        </View>
    )
}

export default EmptyState