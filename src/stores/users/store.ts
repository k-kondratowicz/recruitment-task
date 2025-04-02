import { defineStore } from 'pinia'
import type { UserModel } from './types';
import users from '../../utils/api/users';
import { useToastActions } from '../../composables/toast/useToastActions';

export const useUsersStore = defineStore('users', {
    state: () => {
        const users: UserModel[] = [];

        return {
            isUsersPending: false,
            users,
        }
    },

    actions: {
        async fetchUsers() {
            const { handleAddToast } = useToastActions();

            this.isUsersPending = true;

            try {
                const usersList = await users.get<UserModel[]>();

                this.users = usersList;
            } catch (error) {
                handleAddToast('Error fetching users');
            } finally {
                this.isUsersPending = false;
            }
        },
    },
})

