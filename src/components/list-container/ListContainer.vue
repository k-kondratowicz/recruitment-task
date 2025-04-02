<script lang="ts" setup generic="T">
import LoadingSpinner from '../loading-spinner/LoadingSpinner.vue';

defineProps<{
    heading?: string;
    isDataPending?: boolean;
    data: T[];
}>()
</script>

<template>
    <div class="list-container">
        <h1
            v-if="heading"
            class="list-container__heading"
        >
            {{ heading }}
        </h1>

        <div class="list-container__container">
            <LoadingSpinner
                class="list-container__loading"
                :is-loading="isDataPending"
            />

            <template v-if="!isDataPending && data.length">
                <slot />
            </template>

            <template v-if="!isDataPending && !data.length">
                <slot name="empty-message"></slot>
            </template>
        </div>
    </div>
</template>

<style lang="css">
.list-container {
    width: 100%;
}

.list-container__loading {
    grid-column: 1 / -1;
    margin-inline: auto;
}

.list-container__container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    gap: 2rem;
    width: 100%;
}
</style>
