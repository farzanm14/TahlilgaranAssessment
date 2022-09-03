import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { responsiveHeight as rh, responsiveWidth as rw } from "react-native-responsive-dimensions"
import { BackIcon, EditIcon } from '../../../assets/icons'
import { Container, FabButton, Text } from '../../../shared/components'
import { Routes } from '../../../shared/constants/routes'
import colors from '../../../shared/theme/colors'
import { useMobxStore } from '../../../stores'
import CommentsList from './CommentsList'
import { observer } from "mobx-react";

const SinglePostScreen = () => {
    const { goBack, navigate } = useNavigation()
    const {
        users: { selectedUser },
        post: { selectedPost }
    } = useMobxStore();

    const moveToEditPhoto = () => {
        navigate(Routes.EDITPOST, { isEditMode: true })
    }

    const Body = () => {
        return (
            <View style={styles.bodyContainer}>
                <Text bold>{selectedUser?.name}</Text>
                <Text light>{selectedPost?.title}</Text>
                <Text light>{selectedPost?.body}</Text>
            </View>
        )
    }

    const FabEditBtn = () => {
        return (
            <FabButton onPress={moveToEditPhoto}>
                <EditIcon size={rw(5)} />
                <Text small light>edit post</Text>
            </FabButton>
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
            <ScrollView>
                <Body />
                <CommentsList post={selectedPost} />
            </ScrollView>
            <FabEditBtn />
        </Container>
    )
}

export default observer(SinglePostScreen);

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
    }, commentsContainer: {

    }, bodyContainer: {
        marginHorizontal: rw(3),
        marginVertical: rh(1)
    }
})