import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { responsiveWidth as rw, responsiveHeight as rh } from "react-native-responsive-dimensions";
import { CommentIcon } from '../../../assets/icons';
import { EmptyState, Text } from '../../../shared/components';
import Loading from '../../../shared/components/LoadingState';
import { EndPoints } from "../../../shared/constants/endpoints";
import HttpHandler from "../../../shared/services/HttpHandler";
import colors from '../../../shared/theme/colors';
import { Comment, HttpRequest, Post } from '../../../shared/types';
import { useMobxStore } from '../../../stores';
import CommentItem from './CommentItem';


interface PostItemProps {
    post: Post,
    // onPress?: () => void
}
const PostItem = ({ post }: PostItemProps) => {
    const [showComments, setShowComments] = useState(false)
    const [showCommentsLoading, setShowCommentsLoading] = useState(false)
    const [selectedPostComments, setSelectedPostComments] = useState<Comment[]>([])
    const {
        users: { selectedUser },
    } = useMobxStore();

    async function receiveSelectedPostComments(userId: number, postId: number) {
        // https://jsonplaceholder.typicode.com/users/5/comments?postId=1
        //show loading
        //call get request
        //hide loading on receive comments

        setShowCommentsLoading(true)
        HttpHandler.Request(HttpRequest.GET, EndPoints.home.users + `/${userId}/comments?postId=${postId}`)
            .then(res => {
                console.log("___ receiveSelectedPhotoComments ___ res  :  ", res?.data)
                setSelectedPostComments(res?.data)
            }).catch(err => {
                console.log("___ receiveSelectedPhotoComments ___ error  :  ", err?.data)
            }).finally(() => {
                setShowCommentsLoading(false)
            })
    }

    const onPressShowComments = async (showComments: boolean) => {
        setShowComments(showComments)
        if (showComments) {//attempt to show comments
            receiveSelectedPostComments(selectedUser?.id, post.id)
        }
    }

    const AddNewComment = () => (
        <View style={styles.commentInputContainer}>

        </View>
    )
    const CommentIconButton = () => (
        <TouchableOpacity disabled={!showCommentsLoading} onPress={() => onPressShowComments(!showComments)} style={styles.commentIconContainer}>
            <CommentIcon size={15} />
            <Text small> comments</Text>
        </TouchableOpacity>
    )

    const Comments = () => {
        const renderItem = ({ item }: Comment) => (
            <CommentItem comment={item} />
        )

        return (
            <View style={styles.commentsContainer}>
                <FlatList<Comment>
                    keyExtractor={(item, key) => key.toString()}
                    data={selectedPostComments}
                    renderItem={renderItem}
                    style={styles.list}
                    ListHeaderComponent={<AddNewComment />}
                    ListEmptyComponent={
                        showCommentsLoading ? <Loading /> :
                            <EmptyState message={"there isn't any comment, become first one!"} />}
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.postTitle}>{post.title}</Text>
            <Text light>{post.body}</Text>
            <CommentIconButton />
            {showComments && <Comments />}
        </View>
    )
}

export default PostItem

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        borderColor: colors.greyLight,
        borderRadius: 10,
        borderWidth: 0.5,
        marginVertical: rh(2),
        padding: rw(3)
        // height: rh(20),
    }, list: {
        marginTop: rh(3)
    }, commentsContainer: {
    }, commentInputContainer: {
        // height: rh(5),
        backgroundColor: 'green'
    }, commentIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    }, postTitle: {
        color: colors.primaryDarkest,
        fontWeight: '500'
    }
})