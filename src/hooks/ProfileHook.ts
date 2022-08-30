import { EndPoints } from "../shared/constants/endpoints"
import HttpHandler from "../shared/services/HttpHandler"
import { HttpRequest } from "../shared/types/HttpRequest"
import { useMobxStore } from "../stores"

const ProfileHook = () => {
    const {
        profile: { setListOfAlbums, setListOfAlbumsLoading, selectedAlbum },
        users: { selectedUser },
        album: { setSelectedAlbumPhotos, setSelectedAlbumPhotosLoading },
    } = useMobxStore();

    function receiveAlbumsList() {
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
    function receiveSelectedAlbumPhotos() {
        setSelectedAlbumPhotosLoading(true)
        HttpHandler.Request(HttpRequest.GET, EndPoints.home.users + `/${selectedUser?.id}/photos?albumId=${selectedAlbum?.id}`)
            .then(res => {
                console.log("___ receiveAlbumsList ___ res  :  ", res?.data)
                setSelectedAlbumPhotos(res?.data)
            }).catch(err => {
                console.log("___ receiveAlbumsList ___ error  :  ", err?.data)
            }).finally(() => {
                setSelectedAlbumPhotosLoading(false)
            })
    }
    return {
        receiveAlbumsList, receiveSelectedAlbumPhotos
    }

}
export default ProfileHook;

