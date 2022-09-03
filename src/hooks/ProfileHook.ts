/** profile api call methods
 * this file has access to the state manager
 * receive required input from screens and send a http request to backend 
 * then save the result in state manager
 * 
 * loadings helps user to understand processing
 * as request finished the loading will turn off and result will preview
 */
import { EndPoints } from "../shared/constants/endpoints"
import HttpHandler from "../shared/services/HttpHandler"
import { Album } from "../shared/types"
import { HttpRequest } from "../shared/types/HttpRequest"
import { useMobxStore } from "../stores"

const ProfileHook = () => {
    const {
        profile: { setListOfAlbums, setListOfAlbumsLoading },
        users: { selectedUser },
        album: { setSelectedAlbumPhotos, setSelectedAlbumPhotosLoading, selectedPhoto, setCommentsList, setCommentsListLoading },
        post: { setListOfPosts, setListOfPostsLoading }
    } = useMobxStore();

    async function receiveAlbumsList(theSelectedUserId: number) {
        setListOfAlbumsLoading(true)
        HttpHandler.Request(HttpRequest.GET, `users/${theSelectedUserId}/albums`)
            .then(res => {
                console.log("___ receiveAlbumsList ___ res  :  ", res?.data)
                setListOfAlbums(res?.data)
            }).catch(err => {
                console.log("___ receiveAlbumsList ___ error  :  ", err?.data)
            }).finally(() => {
                setListOfAlbumsLoading(false)
            })
    }
    async function receivePostsList(theSelectedUserId: number) {
        setListOfPostsLoading(true)
        HttpHandler.Request(HttpRequest.GET, `users/${theSelectedUserId}/posts`)
            .then(res => {
                console.log("___ receivePostsList ___ res  :  ", res?.data)
                setListOfPosts(res?.data)
            }).catch(err => {
                console.log("___ receivePostsList ___ error  :  ", err?.data)
            }).finally(() => {
                setListOfPostsLoading(false)
            })
    }
    async function receiveSelectedAlbumPhotos(selectedAlbum: Album) {
        setSelectedAlbumPhotosLoading(true)
        HttpHandler.Request(HttpRequest.GET, EndPoints.home.users + `/${selectedUser?.id}/photos?albumId=${selectedAlbum?.id}`)
            .then(res => {
                console.log("___ receiveSelectedAlbumPhotos ___ res  :  ", res?.data)
                setSelectedAlbumPhotos(res?.data)
            }).catch(err => {
                console.log("___ receiveSelectedAlbumPhotos ___ error  :  ", err?.data)
            }).finally(() => {
                setSelectedAlbumPhotosLoading(false)
            })
    }
    async function receiveSelectedPhotoComments() {
        setCommentsListLoading(true)
        HttpHandler.Request(HttpRequest.GET, EndPoints.home.users + `/${selectedUser?.id}/comments?postId=${selectedPhoto?.id}`)
            .then(res => {
                console.log("___ receiveSelectedPhotoComments ___ res  :  ", res?.data)
                setCommentsList(res?.data)
            }).catch(err => {
                console.log("___ receiveSelectedPhotoComments ___ error  :  ", err?.data)
            }).finally(() => {
                setCommentsListLoading(false)
            })
    }

    return {
        receiveAlbumsList, receiveSelectedAlbumPhotos, receiveSelectedPhotoComments, receivePostsList
    }

}
export default ProfileHook;

