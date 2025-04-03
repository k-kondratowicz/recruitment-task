import { computed, onMounted } from "vue";
import { useUsersStore } from "../../stores/users";

export function useFetchUsers() {
    const usersStore = useUsersStore();

    const areUsersPending = computed(() => usersStore.areUsersPending);
    const users = computed(() => usersStore.users);

    onMounted(() => {
        usersStore.fetchUsers();
    });

    return {
        users,
        areUsersPending,
    }
}