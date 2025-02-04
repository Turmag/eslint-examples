import { defineStore } from 'pinia';
import type { IConfig, IStore } from '@/shared/types';
import { configs } from '@/shared/constants';

export const mainStore = defineStore('main', {
    state: (): IStore => ({
        configs,
        filterWord: '',
    }),

    getters: {
        filteredConfigs(state): IConfig[] {
            return state.configs.filter(config => config.name.toLowerCase().includes(this.filterWord.toLowerCase()) || config.link.toLowerCase().includes(this.filterWord.toLowerCase()));
        },
    },
});
