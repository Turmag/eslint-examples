<template>
    <Header />
    <Main />
</template>

<script setup lang="ts">
import Header from '@/components/header/Header.vue';
import Main from '@/components/main/Main.vue';
import { useTheme } from '@/shared/composables/useTheme';

useTheme();
</script>
