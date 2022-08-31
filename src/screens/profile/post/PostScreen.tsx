import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { responsiveHeight as rh, responsiveWidth as rw } from "react-native-responsive-dimensions"
import { BackIcon, EditIcon } from '../../../assets/icons'
import { Container, EmptyState, FabButton, Image, Text } from '../../../shared/components'
import { Routes } from '../../../shared/constants/routes'
import colors from '../../../shared/theme/colors'
import { Comment } from '../../../shared/types'
import { useMobxStore } from '../../../stores'
import CommentItem from '../components/CommentItem'

const SinglePostScreen = () => {
    const { goBack, navigate } = useNavigation()
    const {
        users: { selectedUser },
        album: { selectedPhoto, commentsList }
    } = useMobxStore();

    const moveToEditPhoto = () => {
        console.log("moveToEditPhoto", selectedPhoto);
        navigate(Routes.EDITPOST, { isEditMode: true })
    }

    const Body = () => {
        return (
            <View style={styles.bodyContainer}>
                <Text bold>{selectedUser?.name}</Text>
                <Text light>{selectedPhoto?.title}</Text>
            </View>
        )
    }

    const Comments = () => {
        const renderItem = ({ item }: Comment) => (
            <CommentItem comment={item} />
        )

        return (
            <View style={styles.commentsContainer}>
                <FlatList<Comment>
                    keyExtractor={(item, key) => key.toString()}
                    data={commentsList}
                    extraData={commentsList}
                    renderItem={renderItem}
                    style={styles.list}


                    stickyHeaderHiddenOnScroll={true}
                    // ListHeaderComponent={<Header />}
                    ListEmptyComponent={
                        // selectedAlbumPhotosLoading ?<Loading /> :
                        <EmptyState message={"there isn't any comment, become first one!"} />}
                />
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
                <PostImage />
                <Body />
                {/* <Comments /> */}
            </ScrollView>
            <FabEditBtn />
        </Container>
    )
}

export default SinglePostScreen;

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