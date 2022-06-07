import { defineStore } from 'pinia'
import { auth } from '@/firebase/index'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const useAuthStore = defineStore('main', {
    state: () => ({
        username: '',
    }),
    //todo vue pass function as an argument to refactor both methods - avoid duplicated code / es6
    actions: {
        async signUp(user) { //todo type .d. authResponse
            const { email, password } = user
            try {
                const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
                const displayName = userCredentials.user.providerData[0].displayName
                this.username = displayName
                //todo navigate to next page
                return { success: true }
            } catch(e) {
                return { success: false } //todo check return in catch?
            }
        },
        async login(user) {
            const { email, password } = user
            try {
                const userCredentials = await createUserWithEmailAndPassword(auth, email, password)// todo change to login func
                const displayName = userCredentials //todo display in LoggedIn page same as signup
                this.username = displayName
                return { success: true }
            } catch(e) {
                console.log(e) // todo -> toaster
                return { success: false }
            }
        }
    }
})
