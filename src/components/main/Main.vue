<template>
    <main :class="$style.main">
        <Search />
        <div>
            <Item
                v-for="(config, i) in store.filteredConfigs"
                :key="i"
                v-bind="config"
                :numb="i + 1"
            />
        </div>
    </main>
</template>

<script setup lang="ts">
import Item from '@/components/main/Item.vue';
import Search from '@/components/main/Search.vue';
import { mainStore } from '@/store/main.store';

const store = mainStore();
</script>

<style lang="scss" module>
    .main {
        display: flex;
        flex-direction: column;
    }
</style>
