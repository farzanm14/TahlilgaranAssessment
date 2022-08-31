import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import { responsiveWidth as rw, responsiveHeight as rh } from "react-native-responsive-dimensions";
import { CommentIcon, EditIcon } from '../../../assets/icons';
import { EmptyState, Text } from '../../../shared/components';
import Loading from '../../../shared/components/LoadingState';
import { EndPoints } from "../../../shared/constants/endpoints";
import { Routes } from '../../../shared/constants/routes';
import HttpHandler from "../../../shared/services/HttpHandler";
import colors from '../../../shared/theme/colors';
import { Comment, HttpRequest, Post } from '../../../shared/types';
import { useMobxStore } from '../../../stores';
import CommentItem from './CommentItem';
import CommentsList from '../post/CommentsList';

interface PostItemProps {
    post: Post,
    // onPress?: () => void
}
const PostItem = ({ post }: PostItemProps) => {
    const { navigate } = useNavigation()
    const { post: { setSelectedPost }, } = useMobxStore();


    function moveToEditPost() {
        setSelectedPost(post)
        navigate(Routes.EDITPOST, { isEditMode: true })
        //better to show bottomsheet
    }
    function moveToPreviewPost() {
        setSelectedPost(post)
        navigate(Routes.POST)
        //better to show bottomsheet
    }
    function openBottomSheet() { }

    return (
        <View style={styles.container}
        // onPress={moveToPreviewPost} onLongPress={moveToEditPost
        >
            <View style={styles.editBtnTitle}>
                <Text style={styles.postTitle}>{post.title}</Text>
                <EditIcon size={rw(4)} onPress={openBottomSheet} />
            </View>
            <Text light>{post.body}</Text>
            <CommentsList post={post} />
        </View>
    )
}

export default PostItem;

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
    }, editBtnTitle: {
        flexDirection: "row",
        justifyContent: 'space-between'
    }
})