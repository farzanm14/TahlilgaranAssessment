import { action, makeAutoObservable, observable } from 'mobx';
import { hydrateStore, makePersistable } from 'mobx-persist-store';
import { Album, Photo } from '../shared/types';

export class ProfileStore implements IStore {
    /**
     * states
     */
    @observable listOfAlbums: Album[] = [];
    @observable listOfAlbumsLoading: boolean = false;

    @observable selectedAlbum: Album | null = null;
    @observable selectedAlbumPhotos: Photo[] = [];
    @observable selectedAlbumPhotosLoading: boolean = true;

    /**
     * functions
     */
    @action setListOfAlbums = (value: Album[]): void => {
        this.listOfAlbumsLoading = false;
        this.listOfAlbums = value;
    };
    @action setListOfAlbumsLoading = (value: boolean): void => {
        this.listOfAlbumsLoading = value;
    }
    @action setSelectedAlbum = (value: Album): void => {
        this.selectedAlbum = value;
    }
    @action setSelectedAlbumPhotos = (value: Photo[]): void => {
        this.selectedAlbumPhotos = value;
        this.selectedAlbumPhotosLoading = false;
    }
    @action setSelectedAlbumPhotosLoading = (value: boolean): void => {
        this.selectedAlbumPhotosLoading = value;
    }

    constructor() {
        makeAutoObservable(this);

        makePersistable(this, {
            name: ProfileStore.name,
            properties: ['listOfAlbums', 'listOfAlbumsLoading',
                'selectedAlbum', 'selectedAlbumPhotos', 'selectedAlbumPhotosLoading'],
        });
    }

    hydrate = async (): PVoid => {
        await hydrateStore(this);
    };
}
