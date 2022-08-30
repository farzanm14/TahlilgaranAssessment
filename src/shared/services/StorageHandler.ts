import { MMKVLoader } from 'react-native-mmkv-storage';
const storage = new MMKVLoader().initialize();

const StorageHandler = {

    async saveItem(key: string, item: any) {
        try {
            await storage.setItem(key, JSON.stringify(item));
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    async getItem(key: string) {
        try {
            const value: any = await storage.getItem(key);
            return JSON.parse(value);
        } catch (error) {
            console.log('storage Error: ' + error);
        }
    },

    async clearItem(key: string) {
        try {
            return await storage.removeItem(key);
        } catch (error) {
            console.log('storage Error: ' + error);
        }
    },

    async clearAll() {
        try {
            return await storage.clearStore();
        } catch (error) {
            console.log('storage Error: ' + error);
        }
    },

    async editItem(key: string, newValue: any) {
        try {
            const oldItem = await this.getItem(key);
            let newItem = {
                ...oldItem,
                newValue
            }
            await storage.setItem(key, newItem);
        } catch (error) {
            console.log('storage Error: ' + error);
            throw error;
        }
    }
};

export default StorageHandler;