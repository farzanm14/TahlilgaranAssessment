import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { responsiveHeight as rh, responsiveWidth as rw } from "react-native-responsive-dimensions"
import { BackIcon } from '../../../assets/icons'
import { Button, Container, Input, Text } from '../../../shared/components'
import YesNoModal from '../../../shared/components/YesNoModal'
import colors from '../../../shared/theme/colors'
import { useMobxStore } from '../../../stores'

const EditPostScreen = ({ route }) => {
    const { goBack, navigate } = useNavigation()
    const { isEditMode } = route?.params
    const {
        users: { selectedUser },
        post: { selectedPost }
    } = useMobxStore();

    const [nameInput, setNameInput] = useState("")
    const [bodyInput, setBodyInput] = useState("")
    const [showDiscardModal, setShowDiscardModal] = useState(false)

    useEffect(() => {
        if (isEditMode) {
            setNameInput(selectedPost?.title)
            setBodyInput(selectedPost?.body)
        }
    }, [])


    const TitleInput = () => {
        return (
            <Input
                label='title'
                value={nameInput}
                textArea={false}
                placeholder="title of your post ..."
                onChangeText={(value: string) => setNameInput(value)}
            />
        );
    };
    const BodyInput = () => {//TODO :need to change keyboard btn and inputs text style
        return (
            <Input
                label='body'
                value={bodyInput}
                placeholder='type you description ...'
                textArea={true}
                onChangeText={(value: string) => setBodyInput(value)}
            />
        );
    };

    const Body = () => {
        return (
            <View style={styles.bodyContainer}>
                <TitleInput />
                <BodyInput />
            </View>
        )
    }

    const onPressSaveThePost = () => { }
    const onPressDiscardChanges = () => {
        setShowDiscardModal(true)
    }

    const Buttons = () => {
        return (
            <View style={styles.buttonContainer}>
                <Button style={styles.button} bordered title='discard' onPress={onPressDiscardChanges} />
                <Button style={styles.button} title='save' onPress={onPressSaveThePost} />
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
            <Body />
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

export default EditPostScreen;

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
    }, containerStyle: {
        marginVertical: rh(2)
    }, labelStyle: {
        marginVertical: rh(0.5),
        marginHorizontal: rw(2)
    }
})