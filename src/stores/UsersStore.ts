import { action, makeAutoObservable, observable } from 'mobx';
import { hydrateStore, makePersistable } from 'mobx-persist-store';
import { User } from '../shared/types';

export class UsersStore implements IStore {
    /**
     * states
     */
    @observable listOfUsers: User[] | null = null;
    @observable listOfUsersLoading: Boolean = true;

    @observable selectedUser: User | null = null;

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
    @action setSelectedUser = (value: User): void => {
        this.selectedUser = value;
    }

    constructor() {
        makeAutoObservable(this);

        makePersistable(this, {
            name: UsersStore.name,
            properties: ['listOfUsers', 'listOfUsersLoading', 'selectedUser'],
        });
    }

    hydrate = async (): PVoid => {
        await hydrateStore(this);
    };
}
