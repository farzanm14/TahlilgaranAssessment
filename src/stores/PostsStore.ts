import { action, makeAutoObservable, observable } from 'mobx';
import { hydrateStore, makePersistable } from 'mobx-persist-store';
import { Album, Comment, Photo } from '../shared/types';

export class PostsStore implements IStore {
    /**
     * states
     */
    @observable selectedPhoto: Photo | null = null;
    @observable commentsList: Comment[] = [];

    /**
     * functions
     */
    @action setSelectedPhoto = (value: Photo): void => {
        this.selectedPhoto = value;
    };
    @action setCommentsList = (value: Comment[]): void => {
        this.commentsList = value;
    };



    constructor() {
        makeAutoObservable(this);

        makePersistable(this, {
            name: PostsStore.name,
            properties: [
                'selectedPhoto',
                'commentsList'
            ],
        });
    }

    hydrate = async (): PVoid => {
        await hydrateStore(this);
    };
}
