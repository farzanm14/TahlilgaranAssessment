import { EndPoints } from "../shared/constants/endpoints";
import HttpHandler from "../shared/services/HttpHandler";
import { Post } from "../shared/types";
import { HttpRequest } from "../shared/types/HttpRequest";
import { useMobxStore } from "../stores";


const PostHook = () => {
    const { post: { setCreateNewPostLoading } } = useMobxStore();

    function createNewPostApi(newPost: Post) {
        setCreateNewPostLoading(true)
        HttpHandler.Request(HttpRequest.POST, EndPoints.profile.posts, newPost)
            .then(res => {
                console.log("___ createNewPostApi ___ res  :  ", res?.data)
                setCreateNewPostLoading(false)
                //add Item to the list and then
                //back to list or open preview screen
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
                //add Item to the list and then
                //back to list or open preview screen
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



