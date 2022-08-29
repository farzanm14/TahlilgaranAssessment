import { useState } from "react"
import { EndPoints } from "../shared/constants/endpoints"
import HttpHandler from "../shared/services/HttpHandler"
import { User } from "../shared/types"
import { HttpRequest } from "../shared/types/HttpRequest"

const UsersHook = () => {
    const [loading, setLoading] = useState(false)
    const [usersList, setUsersList] = useState<User[]>([])

    function receiveUsersList() {
        setLoading(true)

        HttpHandler.Request(HttpRequest.GET, EndPoints.home.users)
            .then(res => {
                console.log("___ receiveUsersList ___ res  :  ", res?.data)
                setUsersList(res?.data)
            }).catch(err => {
                console.log("___ receiveUsersList ___ error  :  ", err?.data)
            }).finally(() => {
                setLoading(false)
            })
    }
    return {
        receiveUsersList, loading, usersList
    }

}
export default UsersHook;

