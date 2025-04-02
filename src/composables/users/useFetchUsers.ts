import { computed, onMounted } from "vue";
import { useUsersStore } from "../../stores/users";

export function useFetchUsers() {
    const usersStore = useUsersStore();

    const isUsersPending = computed(() => usersStore.isUsersPending);
    const users = computed(() => usersStore.users);

    onMounted(() => {
        usersStore.fetchUsers();
    });

    return {
        users,
        isUsersPending,
    }
}