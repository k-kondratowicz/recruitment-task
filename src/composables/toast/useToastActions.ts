import { useToastStore } from "../../stores/toast";

export function useToastActions() {
    const toastStore = useToastStore();

    function handleRemoveToast(id: string) {
        toastStore.removeToast(id);
    }

    function handleAddToast(toastMessage: string) {
        toastStore.addToast(toastMessage);
    }
    
    return {
        handleRemoveToast,
        handleAddToast
    }
}