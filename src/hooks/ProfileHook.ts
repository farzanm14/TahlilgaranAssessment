import { EndPoints } from "../shared/constants/endpoints"
import HttpHandler from "../shared/services/HttpHandler"
import { HttpRequest } from "../shared/types/HttpRequest"
import { useMobxStore } from "../stores"

const ProfileHook = () => {
    const {
        profile: { setListOfAlbums, setListOfAlbumsLoading, selectedAlbum },
        users: { selectedUser },
        album: { setSelectedAlbumPhotos, setSelectedAlbumPhotosLoading },
        post: { selectedPhoto, setCommentsList, setCommentsListLoading },
    } = useMobxStore();

    async function receiveAlbumsList() {
        setListOfAlbumsLoading(true)

        HttpHandler.Request(HttpRequest.GET, EndPoints.profile.albums + `?userId=${selectedUser?.id}`)
            .then(res => {
                console.log("___ receiveAlbumsList ___ res  :  ", res?.data)
                setListOfAlbums(res?.data)
            }).catch(err => {
                console.log("___ receiveAlbumsList ___ error  :  ", err?.data)
            }).finally(() => {
                setListOfAlbumsLoading(false)
            })
    }
    async function receivePostsList() {
        setListOfAlbumsLoading(true)

        HttpHandler.Request(HttpRequest.GET, EndPoints.profile.albums + `?userId=${selectedUser?.id}`)
            .then(res => {
                console.log("___ receivePostsList ___ res  :  ", res?.data)
                setListOfAlbums(res?.data)
            }).catch(err => {
                console.log("___ receivePostsList ___ error  :  ", err?.data)
            }).finally(() => {
                setListOfAlbumsLoading(false)
            })
    }
    async function receiveSelectedAlbumPhotos() {
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
        // https://jsonplaceholder.typicode.com/users/5/comments?postId=1
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

