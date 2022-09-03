/**
 * this screen has 2 inputs for title and body of a post
 * it's use as create screen and same time edit screen
 * I've separate each action by a param (isEditMode)
 * 
 * if screen is on edit mode, the inputs have initial value (current title and body of selected post)
 * and if isEditMode==true onsubmit method I'll call edit method instead create method
 */

import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, TextInput, View } from 'react-native'
import { responsiveHeight as rh, responsiveWidth as rw } from "react-native-responsive-dimensions"
import { BackIcon } from '../../../assets/icons'
import PostHook from '../../../hooks/PostHook'
import { Button, Container, Input, showFlashMessage, Text } from '../../../shared/components'
import YesNoModal from '../../../shared/components/YesNoModal'
import colors from '../../../shared/theme/colors'
import { Post } from '../../../shared/types'
import { useMobxStore } from '../../../stores'
import { observer } from "mobx-react";

const EditPostScreen = ({ route }) => {
    const { goBack } = useNavigation()
    const { isEditMode } = route?.params
    const {
        users: { selectedUser },
        post: { selectedPost, createNewPostLoading }
    } = useMobxStore();

    const [nameInput, setNameInput] = useState<string>("")
    const [bodyInput, setBodyInput] = useState<string>("")
    const [showDiscardModal, setShowDiscardModal] = useState(false)
    const [phone, setPhoneNumber] = useState('')

    const { createNewPostApi, editSelectedPostApi } = PostHook()

    useEffect(() => {
        if (isEditMode) {
            setNameInput(selectedPost?.title)
            setBodyInput(selectedPost?.body)
        }
    }, [])


    const TitleInput = () => (
        // <Input
        //     label='title'
        //     value={nameInput}
        //     textArea={false}
        //     maxLength={30}
        //     placeholder="title of your post ..."
        //     onChangeText={(value: string) => setNameInput(value)}
        // />
        <View style={[styles.containerStyle]}>
            <Text style={[styles.labelStyle]}>title</Text>
            <TextInput
                style={styles.textInput}
                placeholder={'title of your post ...'}
                placeholderTextColor={colors.greyLight}
                value={phone}
                onChangeText={(value: string) => setPhoneNumber(value)}
            />

        </View>
    );

    const BodyInput = () => (//TODO :need to change keyboard btn and inputs text style
        <Input
            label='body'
            value={bodyInput}
            placeholder='type you description ...'
            textArea={true}
            maxLength={100}
            onChangeText={(value: string) => setBodyInput(value)}
        />
    );


    const Body = () => (
        <View style={styles.bodyContainer}>
            <TitleInput />
            <BodyInput />
        </View>
    )


    const onPressSaveThePost = () => {
        if (nameInput.length == 0 || bodyInput.length == 0) {
            showFlashMessage("Please complete all inputs", 'warning')
            console.log("empty input");

        } else {
            let newPost: Post = {
                title: nameInput,
                body: bodyInput,
                id: isEditMode ? selectedPost?.id : null,
                userId: selectedUser?.id
            }
            isEditMode ? editSelectedPostApi(newPost) : createNewPostApi(newPost)
        }
    }
    const onPressDiscardChanges = () => {
        setShowDiscardModal(true)
    }

    const Buttons = () => {
        return (
            <View style={styles.buttonContainer}>
                <Button style={styles.button} bordered title='discard' onPress={onPressDiscardChanges} />
                {createNewPostLoading ?
                    <Button style={styles.button} ><ActivityIndicator /></Button> :
                    <Button style={styles.button} title='save' onPress={onPressSaveThePost} />}
            </View>
        )
    }

    const Header = () => {
        return (
            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <Text bold>{isEditMode ? "Edit " : "Create new "}post</Text>
                    <BackIcon onPress={() => goBack()} />
                </View>
            </View>
        )
    }

    return (
        <Container>
            <Header />
            {/* <Body /> */}
            <View style={[styles.containerStyle]}>
                <Text style={[styles.labelStyle]}>title</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder={'title of your post ...'}
                    placeholderTextColor={colors.greyLight}
                    value={nameInput}
                    onChangeText={(value: string) => setNameInput(value)}
                />
            </View>
            <View style={[styles.containerStyle]}>
                <Text style={[styles.labelStyle]}>body</Text>
                <TextInput
                    style={styles.textInput}
                    placeholderTextColor={colors.greyLight}
                    value={bodyInput}
                    placeholder='type you description ...'
                    numberOfLines={5}
                    // maxLength={100}
                    onChangeText={(value: string) => setBodyInput(value)}
                />
            </View>
            <Buttons />
            <YesNoModal
                visible={showDiscardModal}
                title="discard"
                description="Are you sure you want to discard your changes?"
                yesButton="yes, I'm sure"
                noButton="dismiss"
                onPressYes={() => goBack()}
                onPressNo={() => setShowDiscardModal(false)}
                bordered />
        </Container>
    )
}

export default observer(EditPostScreen);

const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: rw(3),
        paddingVertical: rh(2),
        backgroundColor: colors.white,
    }, header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        alignContent: 'center',
    }, bodyContainer: {
        marginHorizontal: rw(3),
        marginVertical: rh(1),
    }, buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around",
        bottom: rh(4),
        position: 'absolute',
        width: rw(100)

    }, button: {
        width: rw(40)
    }, textInput: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.greyLight,
        color: colors.primaryDarkText,
        paddingHorizontal: 15
    }, containerStyle: {
        marginVertical: rh(2)
    }, labelStyle: {
        marginVertical: rh(0.5),
        marginHorizontal: rw(2)
    }
})