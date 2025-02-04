import type { DefineComponent } from 'vue';
import Cancel from './Cancel.vue';
import Reset from './Reset.vue';

type TIcons = Record<string, DefineComponent>;

export default {
    cancel: Cancel,
    reset: Reset,
} as unknown as TIcons;
