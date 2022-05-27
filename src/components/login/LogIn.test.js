import { mount } from '@vue/test-utils'
import { describe, test, beforeAll, expect, vi } from 'vitest'
import LogIn  from './LogIn.vue'
import ElementPlus from 'element-plus'
import { createTestingPinia } from '@pinia/testing'

let wrapper = null

describe('Login', () => {
  beforeAll(() => {
    wrapper = mount(LogIn, {
      global: {
        plugins: [ElementPlus, createTestingPinia({
          fakeApp: true,
        })],
      }
    })
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

  test('click button signup should invoke "onSignup" method ', async () => {
    const onSignUpSpy = vi.spyOn(wrapper.vm, 'onSignUp')
    const email = 'gilad.shohat@gmail.com'
    const password = '12345'
    const form = { email, password }

    const emailInput = wrapper.find('[data-vi="email"] input')
    const passwordInput = wrapper.find('[data-vi="password"] input')
    await emailInput.setValue(email);
    await passwordInput.setValue(password);

    const signupButton = wrapper.find('[data-vi="signup"]')
    await signupButton.trigger('click')

    expect(onSignUpSpy).toHaveBeenCalledTimes(1)
  })
})



