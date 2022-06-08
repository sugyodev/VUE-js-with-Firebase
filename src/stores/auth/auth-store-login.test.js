import { describe, test, beforeAll, afterEach, expect, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useAuthStore } from './auth-store'

describe('auth store2', () => {
  let store
  let email
  let password
  let user

  beforeAll(() => {
    setActivePinia(createPinia())
    store = useAuthStore()
    email = 'gilad.shohat@gmail.com'
    password = '12345'
    user = { email, password }
  })

  test('login should sign in with credentials', async () => {
    vi.mock('firebase/auth', () => {
      return {
        createUserWithEmailAndPassword: vi.fn(() => ({
          user: {
            providerData: [{ displayName: 'gilad.shohat@gmail.com' }],
          }
        })),
        signInWithEmailAndPassword: vi.fn(() => ({
          user: {
            providerData: [{ displayName: 'gilad.shohat@gmail.com' }],
          }
        })),
        getAuth: vi.fn(() => ({})),
      }
    })

    const authResponse = await store.login(user)
    expect(authResponse).toEqual({
      success: true
    })
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

})
