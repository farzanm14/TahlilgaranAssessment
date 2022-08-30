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
        console.log("setSelectedAlbum", value);

        this.selectedAlbum = value;
    }


    constructor() {
        makeAutoObservable(this);

        makePersistable(this, {
            name: ProfileStore.name,
            properties: [
                'listOfAlbums', 'listOfAlbumsLoading',
                'selectedAlbum',],
        });
    }

    hydrate = async (): PVoid => {
        await hydrateStore(this);
    };
}
