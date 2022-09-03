/** implement Post create and edit api calls
 * this file has access to the state manager
 * receive new data from screens and send a http request to backend
 */

import { useNavigation } from "@react-navigation/native";
import { showFlashMessage } from "../shared/components";
import { EndPoints } from "../shared/constants/endpoints";
import HttpHandler from "../shared/services/HttpHandler";
import { Post } from "../shared/types";
import { HttpRequest } from "../shared/types/HttpRequest";
import { useMobxStore } from "../stores";

const PostHook = () => {
    const { post: { setCreateNewPostLoading } } = useMobxStore();
    const { goBack } = useNavigation()

    function createNewPostApi(newPost: Post) {
        setCreateNewPostLoading(true) //turn loading on to show spinner, so the user gonna know request has sent and it's processing
        HttpHandler.Request(HttpRequest.POST, EndPoints.profile.posts, newPost)
            .then(res => {
                console.log("___ createNewPostApi ___ res  :  ", res?.data)
                setCreateNewPostLoading(false)
                showFlashMessage("post created successfully", 'success')
                //TODO
                //add Item to the list and then
                //back to list or open preview screen
                goBack()
            }).catch(err => {
                console.log("___ createNewPostApi ___ error  :  ", err?.data)
                setCreateNewPostLoading(false)
            })
    }

    function editSelectedPostApi(newPost: Post) {
        setCreateNewPostLoading(true)
        let url = `${EndPoints.profile.posts}/${newPost.id}`
        HttpHandler.Request(HttpRequest.PUT, url, newPost)
            .then(res => {
                console.log("___ editSelectedPostApi ___ res  :  ", res?.data)
                setCreateNewPostLoading(false)
                showFlashMessage("post edited successfully", 'success')
                //TODO
                //update list item based on new changes 
                goBack()
            }).catch(err => {
                console.log("___ editSelectedPostApi ___ error  :  ", err?.data)
                setCreateNewPostLoading(false)
            })
    }

    return {
        createNewPostApi, editSelectedPostApi
    }
}
export default PostHook;



