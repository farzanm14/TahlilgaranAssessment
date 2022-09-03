import { StackActions, useNavigation } from "@react-navigation/native"
import { EndPoints } from "../shared/constants/endpoints"
import { Routes } from "../shared/constants/routes"
import HttpHandler from "../shared/services/HttpHandler"
import { HttpRequest } from "../shared/types/HttpRequest"
import { useMobxStore } from "../stores"

const UsersHook = () => {
    const { users: { setListOfUsers, setListOfUsersLoading } } = useMobxStore();
    const navigation = useNavigation()

    function receiveUsersList() {
        setListOfUsersLoading(true)

        HttpHandler.Request(HttpRequest.GET, EndPoints.home.users)
            .then(res => {
                console.log("___ receiveUsersList ___ res  :  ", res?.data)
                setListOfUsersLoading(false)
                setListOfUsers(res?.data)
                setTimeout(() => {
                    navigation.dispatch(
                        StackActions.replace(Routes.HOME)
                    );
                }, 2000);
            }).catch(err => {
                console.log("___ receiveUsersList ___ error  :  ", err?.data)
                setListOfUsersLoading(false)
            })
    }
    return {
        receiveUsersList
    }

}
export default UsersHook;

