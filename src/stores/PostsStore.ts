import { action, makeAutoObservable, observable } from 'mobx';
import { hydrateStore, makePersistable } from 'mobx-persist-store';
import { Post } from '../shared/types';

export class PostsStore implements IStore {
    /**
     * states
     */
    @observable listOfPosts: Post[] = [];
    @observable listOfPostsLoading: boolean = true;
    @observable selectedPost: Post | null = null;

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
    @action setSelectedPost = (value: Post): void => {
        this.selectedPost = value
    }


    constructor() {
        makeAutoObservable(this);

        makePersistable(this, {
            name: PostsStore.name,
            properties: [
                "listOfPosts", "listOfPostsLoading", "selectedPost"
            ]
        });
    }

    hydrate = async (): PVoid => {
        await hydrateStore(this);
    };
}
