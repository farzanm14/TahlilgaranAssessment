/**
 * this screen preview selected photo that user selected in photos list
 */

import { useNavigation } from '@react-navigation/native'
import { observer } from "mobx-react"
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { responsiveHeight as rh, responsiveWidth as rw } from "react-native-responsive-dimensions"
import { BackIcon } from '../../../assets/icons'
import { Container, Image, Text } from '../../../shared/components'
import colors from '../../../shared/theme/colors'
import { useMobxStore } from '../../../stores'

const SinglePhotoScreen = () => {
    const { goBack } = useNavigation()
    const {
        users: { selectedUser },
        album: { selectedPhoto }
    } = useMobxStore();

    const Body = () => {
        return (
            <View style={styles.bodyContainer}>
                <Text bold>{selectedUser?.name}</Text>
                <Text light>{selectedPhoto?.title}</Text>
            </View>
        )
    }

    const PostImage = () => {
        return (
            <View style={styles.imageContainer}>
                <Image size={postImageSize} style={styles.postImage} source={{ uri: selectedPhoto?.url }} />
            </View>
        )
    }

    const Header = () => {
        return (
            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <Text bold>Post</Text>
                    <BackIcon onPress={() => goBack()} />
                </View>
            </View>
        )
    }

    return (
        <Container>
            <Header />
            <PostImage />
            <Body />
        </Container>
    )
}

export default observer(SinglePhotoScreen);

const postImageSize = rw(96)
const styles = StyleSheet.create({
    list: {
        marginTop: rh(3)
    }, headerContainer: {
        paddingHorizontal: rw(3),
        paddingVertical: rh(2),
        backgroundColor: colors.white,
    }, header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        alignContent: 'center',
    }, emptyState: {
        flex: 1,
        alignItems: 'center',
        marginTop: rh(35)
    }, imageContainer: {
        width: postImageSize,
        borderRadius: 10,
        alignSelf: 'center'
    }, postImage: {
        borderRadius: 10
    }, commentsContainer: {

    }, bodyContainer: {
        marginHorizontal: rw(3),
        marginVertical: rh(1)
    }
})