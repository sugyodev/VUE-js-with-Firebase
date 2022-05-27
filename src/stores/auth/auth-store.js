import { defineStore } from 'pinia'
import { auth } from '@/firebase/index'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const useAuthStore = defineStore('main', {
    state: () => ({
        username: '',
    }),
    actions: {
        async signUp(user) {
            const {email, password} = user
            try {
                const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
                const displayName = userCredentials.user.providerData[0].displayName
                this.username = displayName
            } catch(e) {
                console.log(e)
            }

        }
    }
})
