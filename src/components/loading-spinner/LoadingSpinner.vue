<script lang="ts" setup>
withDefaults(defineProps<{
    isLoading?: boolean;
}>(), {
    isLoading: false,
});
</script>

<template>
    <div
        v-if="isLoading"
        class="loading-spinner"
    />
</template>

<style lang="css">
.loading-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border: 3px solid #fff;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
