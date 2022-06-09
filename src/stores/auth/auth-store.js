import { defineStore } from 'pinia'
import { auth } from '../../firebase/index'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export const useAuthStore = defineStore('main', {
    state: () => ({
        username: '',
    }),
    actions: {
        async signUp(user) { //todo type .d. authResponse
            const { email, password } = user
            try {
                const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
                const displayName = userCredentials.user.providerData[0].displayName
                this.username = displayName
                await this.$router.push('/logged-in');
                return { success: true }
            } catch(e) {
                return { success: false }
            }
        },
        async login(user) {
            const { email, password } = user
            try {
                const userCredentials = await signInWithEmailAndPassword(auth, email, password)
                const displayName = userCredentials.user.providerData[0].displayName //todo display in LoggedIn page same as signup
                this.username = displayName
                await this.$router.push('/logged-in');
                return { success: true }
            } catch(e) {
                return { success: false }
            }
        }
    }
})
