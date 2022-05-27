import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
    state: () => ({
        user: '',
    }),
    actions: {
        setUser(email) {
            this.user = email
        }
    }
})
