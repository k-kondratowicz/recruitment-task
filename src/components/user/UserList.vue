<script lang="ts" setup>
import { useFetchUsers } from '../../composables/users/useFetchUsers';
import ListContainer from '../list-container/ListContainer.vue';
import UserItem from './UserItem.vue';

const { isUsersPending, users } = useFetchUsers();
</script>

<template>
    <ListContainer
        :heading="'User List'"
        :is-data-pending="isUsersPending"
        :data="users"
    >
        <template #default>
            <UserItem
                v-for="user in users"
                :key="user.id"
                v-bind="user"
            />
        </template>

        <template #empty-message>
            <p>No users found</p>
        </template>
    </ListContainer>
</template>