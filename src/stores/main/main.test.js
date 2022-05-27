import { describe, test, beforeEach, expect } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useStore } from './main'

describe('main store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('set user should modify user state', () => {
    const store = useStore()
    const email = 'gilad.shohat@gmail.com'
    store.setUser(email)
    expect(store.user).toEqual(email)
  })
})
