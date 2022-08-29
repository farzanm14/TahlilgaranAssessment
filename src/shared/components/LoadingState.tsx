import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import Text from './Text'


const Loading = () => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            marginTop: responsiveHeight(35),
        }}>
            <ActivityIndicator />
            <Text light small>{"Loading ..."}</Text>
        </View>
    )
}

export default Loading;