import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import { responsiveHeight as rh, responsiveWidth as rw } from "react-native-responsive-dimensions";
import { CommentIcon, SendIcon } from '../../../assets/icons';
import { Input, Text } from '../../../shared/components';
import { EndPoints } from "../../../shared/constants/endpoints";
import HttpHandler from "../../../shared/services/HttpHandler";
import colors from '../../../shared/theme/colors';
import { Comment, HttpRequest } from '../../../shared/types';
import { useMobxStore } from '../../../stores';
import CommentItem from '../components/CommentItem';

const CommentsList = ({ post }) => {
    const { navigate } = useNavigation()
    const [showComments, setShowComments] = useState(false)
    const [showCommentsLoading, setShowCommentsLoading] = useState(true)
    const [showNewCommentInput, setShowNewCommentInput] = useState(false)
    const [newCommentValue, setNewCommentValue] = useState("")
    const [selectedPostComments, setSelectedPostComments] = useState<Comment[]>([])
    const { users: { selectedUser }, } = useMobxStore();

    async function receiveSelectedPostComments(userId: number, postId: number) {
        // https://jsonplaceholder.typicode.com/users/5/comments?postId=1
        //show loading
        //call get request
        //hide loading on receive comments
        console.log("post", post);
        console.log("postId", postId);

        setShowCommentsLoading(true)
        HttpHandler.Request(HttpRequest.GET, EndPoints.home.users + `/${userId}/comments?postId=${postId}`)
            .then(res => {
                console.log("___ receiveSelectedPhotoComments ___ res  :  ", res?.data)
                setSelectedPostComments(res?.data)
                setShowCommentsLoading(false)
            }).catch(err => {
                console.log("___ receiveSelectedPhotoComments ___ error  :  ", err?.data)
                setShowCommentsLoading(false)
            }).finally(() => {
                setShowCommentsLoading(false)
            })
    }

    const AddNewComment = () => (
        <View style={styles.commentInputContainer}>
            <View style={styles.inputContainer}>
                <Input
                    placeholder='your comment'
                    containerStyle={styles.theInputContainer}
                    value={newCommentValue}
                    onChangeText={(value) => setNewCommentValue(value)}
                />
                <SendIcon style={styles.sendIconStyle} size={25} />
            </View>
        </View>
    )

    const onPressShowComments = (showCommentsStatus: boolean) => {
        setShowComments(showCommentsStatus)
        if (showCommentsStatus) {//attempt to show comments
            receiveSelectedPostComments(selectedUser?.id, post?.id)
        }
    }

    const CommentIconButton = () => (
        <TouchableOpacity
            // disabled={!showCommentsLoading}
            onPress={() => onPressShowComments(!showComments)} style={styles.commentIconContainer}>
            <CommentIcon size={15} />
            <Text small> comments</Text>
        </TouchableOpacity>
    )

    const NewCommentInput = () => {
        return (
            selectedPostComments.length <= 0 && !showNewCommentInput ?
                <Pressable onPress={() => setShowNewCommentInput(true)}>
                    <Text small light>{"there isn't any comment, become first one!"} </Text>
                </Pressable> :
                <AddNewComment />
        )
    }

    const renderItem = ({ item }: Comment) => (
        <CommentItem comment={item} />
    )

    return (
        <View style={styles.commentsContainer}>
            <CommentIconButton />
            {showComments && <FlatList<Comment>
                keyExtractor={(item, key) => key.toString()}
                data={selectedPostComments}
                renderItem={renderItem}
                style={styles.list}
                ListHeaderComponent={selectedPostComments?.length != 0 ? <AddNewComment /> : <View />}
                ListEmptyComponent={showCommentsLoading ? <ActivityIndicator /> : <NewCommentInput />} />
            }
        </View>
    )

}

export default CommentsList;


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
        // backgroundColor: 'green'
    }, commentIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'red'
    }, postTitle: {
        color: colors.primaryDarkest,
        fontWeight: '500'
    }, inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    }, theInputContainer: {
        width: '90%'
    }, sendIconStyle: {
        color: colors.green
    }
})