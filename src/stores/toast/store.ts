import { defineStore } from 'pinia'
import { uniqueId } from '../../utils/uniqueId'

export const useToastStore = defineStore('toast', {
    state: () => {
        return { 
            toasts: new Map<string, string>(),
        }
    },

    actions: {
        addToast(toastMessage: string) {
            const id = uniqueId();

            this.toasts.set(id, toastMessage);
        },

        removeToast(id: string) {
            this.toasts.delete(id);
        },
    },

    getters: {
        getToasts: (state) => {
            return Array.from(state.toasts.entries());
        }
    },
})

