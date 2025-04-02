<script lang="ts" setup>
import { computed } from 'vue';
import { useToastStore } from '../../stores/toast';
import ToastItem from './ToastItem.vue';

const toastStore = useToastStore();

const allToasts = computed(() => toastStore.getToasts);
</script>

<template>
    <div class="toast-container">
        <template v-if="allToasts.length">
            <ToastItem
                v-for="([id, message], index) in allToasts"
                :key="id"
                v-bind="{
                    id,
                    message,
                    index,
                }"
            />
        </template>
    </div>
</template>

<style lang="css">
.toast-container {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 9999;
}
</style>
