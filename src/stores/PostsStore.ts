import { action, makeAutoObservable, observable } from 'mobx';
import { hydrateStore, makePersistable } from 'mobx-persist-store';
import { Post } from '../shared/types';

export class PostsStore implements IStore {
    /**
     * states
     */
    @observable listOfPosts: Post[] = [];
    @observable listOfPostsLoading: boolean = true;

    /**
     * functions
     */

    @action setListOfPosts = (value: Post[]): void => {
        this.listOfPosts = value;
        this.listOfPostsLoading = false;
    };
    @action setListOfPostsLoading = (value: boolean): void => {
        this.listOfPostsLoading = value
    }


    constructor() {
        makeAutoObservable(this);

        makePersistable(this, {
            name: PostsStore.name,
            properties: [
                "listOfPosts", "listOfPostsLoading",
            ]
        });
    }

    hydrate = async (): PVoid => {
        await hydrateStore(this);
    };
}
