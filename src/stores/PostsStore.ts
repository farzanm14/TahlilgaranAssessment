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

    @observable createNewPostLoading: boolean = false;
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
    @action setCreateNewPostLoading = (value: boolean): void => {
        this.createNewPostLoading = value
    }


    constructor() {
        makeAutoObservable(this);

        makePersistable(this, {
            name: PostsStore.name,
            properties: [
                "listOfPosts", "listOfPostsLoading", "selectedPost", "createNewPostLoading"
            ]
        });
    }

    hydrate = async (): PVoid => {
        await hydrateStore(this);
    };
}
