<script lang="ts" setup>
import { useToastActions } from '../../composables/toast/useToastActions';

withDefaults(defineProps<{
    id: string;
    message: string;
    index?: number;
}>(), {
    index: 0,
});

const { handleRemoveToast } = useToastActions();
</script>

<template>
    <div class="toast-item">
        {{ message }}

        <button
            @click="handleRemoveToast(id)"
            class="toast-item__close"
        >
            Close
        </button>
    </div>
</template>

<style lang="css">
.toast-item {
    --toast-index: v-bind(index);

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    translate: calc(var(--toast-index) * -.5rem) calc(var(--toast-index) * -1rem);
    bottom: 0;
    right: 0;
    background-color: #333;
    color: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
    transition: all 0.3s ease-in-out;
    z-index: var(--toast-index);
    min-width: 25rem;
    border: 1px solid #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
}

.toast-item__close {
    margin-left: 1rem;
    background-color: #555;
    border: none;
    color: #fff;
    cursor: pointer;
}
</style>
