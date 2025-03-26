import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { configs } from '@/shared/constants';

export const useMainStore = defineStore('main', () => {
    const filterWord = ref('');

    const filteredConfigs = computed(() => {
        const filterWordLow = filterWord.value.toLowerCase();
        return configs.filter(config => config.name.toLowerCase().includes(filterWordLow) || config.link.toLowerCase().includes(filterWordLow));
    });

    return {
        configs,
        filterWord,
        filteredConfigs,
    };
});
