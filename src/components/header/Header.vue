<template>
    <header :class="headerClasses">
        <h1 :class="$style.title">
            Список конфигов ESLint
        </h1>
        <Switch />
    </header>
</template>

<script setup lang="ts">
import { useStorage } from '@vueuse/core';
import { computed, useCssModule } from 'vue';
import Switch from '@/components/header/Switch.vue';

const $style = useCssModule();
const isStickyFilters = useStorage('isStickyFiltersESLintConfigs', false);

const headerClasses = computed(() => ({
    [$style.header]: true,
    [$style.headerShadow]: !isStickyFilters.value,
}));
</script>

<style lang="scss" module>
    .header {
        position: sticky;
        top: 0;
        left: 0;
        z-index: 3;
        display: flex;
        align-items: center;
        gap: 16px;
        width: 100%;
        height: 60px;
        padding-inline: 16px;
        background-color: var(--background-color);
    }

    .headerShadow {
        box-shadow: 0 3px 2px 0 var(--shadow-color);
    }

    .title {
        margin-top: 10px;
        color: var(--color);
        font-size: 28px;
        font-weight: bold;
    }
</style>
