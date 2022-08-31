import { showMessage, MessageType } from "react-native-flash-message";


export function showFlashMessage(
    message: string,
    type: MessageType,
    duration?: number,
) {
    const theFlashMessage = {
        message: message,
        icon: { icon: "auto", position: "right" },
        type,
        autoHide: false,
        duration: duration ? duration > 2000 ? duration : 2000 : 3000,
    };

    showMessage(theFlashMessage);
}
