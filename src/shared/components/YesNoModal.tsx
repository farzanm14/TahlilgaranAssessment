import React from 'react'
import { StyleSheet, View } from 'react-native'
import { responsiveHeight as rh, responsiveWidth as rw } from "react-native-responsive-dimensions"
import colors from '../theme/colors'
import Button from './Button'
import BaseModal from './Modal'
import Text from './Text'

const YesNoModal = ({ visible, title, description, yesButton, noButton, onPressYes, onPressNo, bordered }: any) => {
    return (
        <BaseModal visible={visible} onClose={onPressNo}>
            <View style={styles.container}>
                <Text bold style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <View style={styles.buttonsContainer}>
                    <Button bordered={bordered} style={styles.button} title={yesButton} onPress={onPressYes} />
                    <Text onPress={onPressNo} style={styles.textButton}>{noButton}</Text>
                </View>
            </View>
        </BaseModal>
    )
}

export default YesNoModal;

const styles = StyleSheet.create({
    container: {
        width: rw(90),
        height: rh(30),
        padding: rw(5),
        justifyContent: 'space-around'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
    },
    textButton: {
        color: colors.primary,
        flex: 1,
        textAlign: 'center'
    },
    description: {
        marginVertical: rh(2),
    },
    button: {
        width: rw(40)
    },
})
