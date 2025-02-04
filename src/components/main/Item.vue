<template>
    <div :class="$style.item">
        <div :class="$style.numb">
            {{ numb }}
        </div>
        <div :class="$style.content">
            <div :class="$style.name">
                {{ name }}
            </div>
            <div :class="$style.link">
                <a :href="link" target="_blank">
                    {{ link }}
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface IProps {
    link: string;
    name: string;
    numb: number;
}

defineProps<IProps>();
</script>

<style lang="scss" module>
    .item {
        position: relative;
        display: flex;
        align-items: center;
        margin: 0;
        padding-block: 40px;
        border-right: 1px solid var(--border-color);
        border-bottom: 1px solid var(--border-color);
        border-left: 8px solid var(--border-left-color);
        background: var(--blockquote-bg-1);
        color: var(--blockquote-color);
        font-weight: 300;
        line-height: 30px;
        scroll-margin: 60px;

        &:nth-child(2n) {
            background: var(--blockquote-bg-2);
        }

        &:first-child {
            border-top: 1px solid var(--border-color);
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .numb {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        min-width: 100px;
        height: 100%;
        font-size: 25px;
    }

    .name {
        font-size: 28px;
    }

    .link {
        font-size: 20px;
    }
</style>
