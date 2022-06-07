import { describe, test, beforeAll, afterEach, expect, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useAuthStore } from './auth-store'

describe('auth store', () => {
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

  test('signup should create a firebase user', async () => {
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

    const authResponse = await store.signUp(user)  //todo
    expect(authResponse).toEqual({
      success: true
    })

    //todo remove
    //await store.signUp(user)
    //expect(store.username).toEqual(email)
  })

  test('signup failed to create a firebase user', async () => {
    vi.mock('firebase/auth', () => {
      return {
        createUserWithEmailAndPassword: vi.fn(() => {
          throw new Error('Value must be a number')
        }),
          getAuth: vi.fn(() => ({})),
        }
  })

    const authResponse = await store.signUp(user)
    expect(authResponse).toEqual({
      success: false
    })
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

})
