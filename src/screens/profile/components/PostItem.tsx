import { useNavigation } from '@react-navigation/native';
import { observer } from "mobx-react";
import React, { useRef } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import { responsiveHeight as rh, responsiveWidth as rw } from "react-native-responsive-dimensions";
import { DeleteIcon, EditIcon, MoreIcon, PostIcon } from '../../../assets/icons';
import { showFlashMessage, Text } from '../../../shared/components';
import { Routes } from '../../../shared/constants/routes';
import colors from '../../../shared/theme/colors';
import { Post } from '../../../shared/types';
import { useMobxStore } from '../../../stores';
import CommentsList from '../post/CommentsList';

interface PostItemProps {
    post: Post,
    // onPress?: () => void
}
const PostItem = ({ post }: PostItemProps) => {
    const { navigate } = useNavigation()
    const { post: { setSelectedPost }, } = useMobxStore();
    const modalizeRef = useRef<Modalize>(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };
    const onClose = () => {
        modalizeRef.current?.close();
    };


    function onPressDeleteSelectedPost() {
        showFlashMessage('soon', 'info')
        onClose()
    }
    function moveToEditPost() {
        onClose()
        setSelectedPost(post)
        navigate(Routes.EDITPOST, { isEditMode: true })
        //better to show bottomsheet
    }
    function moveToPreviewPost() {
        onClose()
        setSelectedPost(post)
        navigate(Routes.POST)
        //better to show bottomsheet
    }
    function openBottomSheet() {
        onOpen()
    }

    function PhotoItemActionSheet() {
        return (
            <Portal>
                <Modalize ref={modalizeRef}

                    adjustToContentHeight={true}>
                    <View style={styles.optionsContainer}>
                        <Text light style={styles.bshTitle}>Post Options</Text>

                        <Pressable style={styles.bottomSheetItem} onPress={() => moveToPreviewPost()}>
                            <PostIcon style={styles.bottomSheetIcon} size={rw(5)} />
                            <Text style={styles.btmshtext}>preview </Text>
                        </Pressable>

                        <Pressable style={styles.bottomSheetItem} onPress={() => moveToEditPost()}>
                            <EditIcon style={styles.bottomSheetIcon} size={rw(5)} />
                            <Text style={styles.btmshtext}>edit </Text>
                        </Pressable>

                        <Pressable style={styles.bottomSheetItem} onPress={() => onPressDeleteSelectedPost()}>
                            <DeleteIcon style={styles.bottomSheetIcon} size={rw(5)} />
                            <Text style={styles.btmshtext}>delete </Text>
                        </Pressable>
                    </View>
                </Modalize>
            </Portal>
        )
    }

    return (
        <View style={styles.container}
        // onPress={moveToPreviewPost} onLongPress={moveToEditPost
        >
            <View style={styles.editBtnTitle}>
                <Text style={styles.postTitle}>{post.title}</Text>
                <MoreIcon size={rw(4)} onPress={() => openBottomSheet()} />
            </View>
            <Text light>{post.body}</Text>
            <CommentsList post={post} />
            <PhotoItemActionSheet />
        </View>
    )
}

export default observer(PostItem);

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
    }, bottomSheetItem: {
        flexDirection: 'row',
        marginVertical: rw(2),
        marginHorizontal: rw(4),
        // justifyContent: 'flex-start',
        alignItems: 'center',
    }, optionsContainer: {
        marginVertical: rh(5),
        marginHorizontal: rw(5)
    }, bottomSheetIcon: {

    }, bshTitle: {
        color: colors.primaryDark,
        marginBottom: rh(3)

    }, btmshtext: {
        marginHorizontal: rw(2),

    }

})