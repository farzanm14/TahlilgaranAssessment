import { action, makeAutoObservable, observable } from 'mobx';
import { hydrateStore, makePersistable } from 'mobx-persist-store';
import { User } from '../shared/types';

export class UsersStore implements IStore {
    /**
     * states
     */
    @observable listOfUsers: User[] = [];
    @observable listOfUsersLoading: Boolean = false;

    /**
     * functions
     */
    @action setListOfUsers = (value: User[]): void => {
        this.listOfUsersLoading = false;
        this.listOfUsers = value;
    };
    @action setListOfUsersLoading = (value: Boolean): void => {
        this.listOfUsersLoading = value;
    }

    constructor() {
        makeAutoObservable(this);

        makePersistable(this, {
            name: UsersStore.name,
            properties: ['listOfUsers', 'listOfUsersLoading'],
        });
    }

    hydrate = async (): PVoid => {
        await hydrateStore(this);
    };
}
