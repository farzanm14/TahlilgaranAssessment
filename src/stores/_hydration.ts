import { configurePersistable } from 'mobx-persist-store';
import StorageHandler from '../shared/services/StorageHandler';

configurePersistable({
  storage: {
    setItem: (key, data) => StorageHandler.saveItem(key, data),
    getItem: key => StorageHandler.getItem(key),
    removeItem: key => StorageHandler.clearItem(key),
  },
});