import { describe, test, beforeEach, expect, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useAuthStore } from './auth-store'

describe('main store', () => {
  beforeAll(() => {
    vi.mock('firebase/auth', () => {
      return {
        createUserWithEmailAndPassword: vi.fn(() => ({
          user: {
            providerData: [{ displayName: 'gilad.shohat@gmail.com' }],
          }
        })),
        getAuth: vi.fn(() => ({})),
      }
    })
  })

  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('signup should create a firebase user', async () => {
    const store = useAuthStore()
    const email = 'gilad.shohat@gmail.com'
    const password = '12345'
    const user = {email, password}

    await store.signUp(user)
    expect(store.username).toEqual(email)
  })
})
