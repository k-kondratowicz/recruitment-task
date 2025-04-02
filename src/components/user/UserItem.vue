<script lang="ts" setup>
import type { UserModel } from '../../stores/users';

defineProps<UserModel>();
</script>

<template>
    <div class="user-item">
        {{ name }}

        <div class="user-item__details">
            <p>Email: {{ email }}</p>
            <p>Phone: {{ phone }}</p>
        </div>
    </div>
</template>

<style lang="css">
.user-item {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: .4rem;
}
</style>
