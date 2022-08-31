import { action, makeAutoObservable, observable } from 'mobx';
import { hydrateStore, makePersistable } from 'mobx-persist-store';
import { Comment, Photo } from '../shared/types';

export class AlbumStore implements IStore {
    /**
     * states
     */
    @observable selectedAlbumPhotos: Photo[] = [];
    @observable selectedAlbumPhotosLoading: boolean = true;

    @observable selectedPhoto: Photo | null = null;
    @observable commentsList: Comment[] = [];
    @observable commentsListLoading: boolean = true;
    /**
     * functions
     */
    @action setSelectedAlbumPhotos = (value: Photo[]): void => {
        this.selectedAlbumPhotos = value;
        this.selectedAlbumPhotosLoading = false;
    }
    @action setSelectedAlbumPhotosLoading = (value: boolean): void => {
        this.selectedAlbumPhotosLoading = value;
    }
    @action setSelectedPhoto = (value: Photo): void => {
        this.selectedPhoto = value;
    };
    @action setCommentsList = (value: Comment[]): void => {
        this.commentsList = value;
        this.commentsListLoading = false;
    };
    @action setCommentsListLoading = (value: boolean): void => {
        this.commentsListLoading = value
    }



    constructor() {
        makeAutoObservable(this);
        makePersistable(this, {
            name: AlbumStore.name,
            properties: ['selectedAlbumPhotos', 'selectedAlbumPhotosLoading',
                'selectedPhoto', 'commentsList', 'commentsListLoading'
            ],
        });
    }

    hydrate = async (): PVoid => {
        await hydrateStore(this);
    };
}
