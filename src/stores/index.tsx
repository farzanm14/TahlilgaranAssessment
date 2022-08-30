import React from 'react';

import './_hydration';
import { UsersStore } from './UsersStore';
import { ProfileStore } from './ProfileStore';
import { AlbumStore } from './AlbumsStore';

export type PVoid = Promise<void>;
export interface IStore {
  hydrate?: () => PVoid;
}
type Stores = Record<string, IStore>;

export const stores = {
  users: new UsersStore(),
  profile: new ProfileStore(),
  album: new AlbumStore(),
};
type ContextStores = typeof stores;

const storeContext = React.createContext<ContextStores>(stores);

export const MobxStoreProvider = ({ children }: any) => (
  <storeContext.Provider value={stores}>{children}</storeContext.Provider>
);

export const useMobxStore = (): ContextStores => React.useContext(storeContext);

export const hydrateStores = async (): PVoid => {
  for (const key in stores) {
    if (Object.prototype.hasOwnProperty.call(stores, key)) {
      const s = (stores as Stores)[key];

      if (s.hydrate) {
        await s.hydrate();
      }
    }
  }
};
