import { mount } from '@vue/test-utils'
import { describe, test, beforeAll, expect } from 'vitest'
import LogIn  from './LogIn.vue'
import ElementPlus from 'element-plus'
import { createTestingPinia } from '@pinia/testing'
import { useStore } from '@/stores/main/main'

let wrapper = null
let main = null

describe('Login', () => {
  beforeAll(() => {
    wrapper = mount(LogIn, {
      global: {
        plugins: [ElementPlus, createTestingPinia({
          fakeApp: true,
        })],
      }
    })
    main = useStore()
  })

  test('button login should be rendered', () => {
      const text = wrapper.find('[data-vi="login"]').text();
      expect(text).toBe('Login');
  })

  test('email input changed after setting the value', async() => {
    const input = wrapper.find('[data-vi="email"] input')
    const email = 'gilad.shohat@gmail.com'
    await input.setValue(email)
    expect(input.element.value).toBe(email)
  })


  test('button signup should fire "Signup" event', async () => {
    const email = 'gilad.shohat@gmail.com'
    const password = '12345'
    const form = {email, password}

    const emailInput = wrapper.find('[data-vi="email"] input')
    const passwordInput = wrapper.find('[data-vi="password"] input')
    await emailInput.setValue(email);
    await passwordInput.setValue(password);

    const signupButton = wrapper.find('[data-vi="signup"]')
    await signupButton.trigger('click')

    expect(main.setUser).toHaveBeenCalledTimes(1)
  })

})



