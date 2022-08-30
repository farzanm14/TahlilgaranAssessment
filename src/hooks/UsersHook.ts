import { EndPoints } from "../shared/constants/endpoints"
import HttpHandler from "../shared/services/HttpHandler"
import { HttpRequest } from "../shared/types/HttpRequest"
import { useMobxStore } from "../stores"

const UsersHook = () => {
    const { users: { setListOfUsers, setListOfUsersLoading } } = useMobxStore();

    function receiveUsersList() {
        setListOfUsersLoading(true)

        HttpHandler.Request(HttpRequest.GET, EndPoints.home.users)
            .then(res => {
                console.log("___ receiveUsersList ___ res  :  ", res?.data)
                setListOfUsers(res?.data)
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

