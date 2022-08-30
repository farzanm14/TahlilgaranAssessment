import { action, makeAutoObservable, observable } from 'mobx';
import { hydrateStore, makePersistable } from 'mobx-persist-store';
import { Photo } from '../shared/types';

export class AlbumStore implements IStore {
    /**
     * states
     */
    @observable selectedAlbumPhotos: Photo[] = [];
    @observable selectedAlbumPhotosLoading: boolean = true;

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

    constructor() {
        makeAutoObservable(this);
        makePersistable(this, {
            name: AlbumStore.name,
            properties: ['selectedAlbumPhotos', 'selectedAlbumPhotosLoading'],
        });
    }

    hydrate = async (): PVoid => {
        await hydrateStore(this);
    };
}
