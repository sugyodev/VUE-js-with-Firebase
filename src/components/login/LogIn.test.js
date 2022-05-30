import { mount } from '@vue/test-utils'
import { describe, test, beforeAll, expect, vi } from 'vitest'
import LogIn  from './LogIn.vue'
import ElementPlus from 'element-plus'
import { createTestingPinia } from '@pinia/testing'

let wrapper = null
const email = 'gilad.shohat@gmail.com'
const password = '12345'
const form = { email, password }
let emailInput
let passwordInput

describe('Login', () => {
  beforeAll(() => {
    wrapper = mount(LogIn, {
      global: {
        plugins: [ElementPlus, createTestingPinia({
          fakeApp: true,
        })],
      }
    })
    emailInput = wrapper.find('[data-vi="email"] input')
    passwordInput = wrapper.find('[data-vi="password"] input')
  })

  test('button login should be rendered', () => {
      const text = wrapper.find('[data-vi="login"]').text();
      expect(text).toBe('Login');
  })

  test('email input changed after setting the value', async() => {
    const input = wrapper.find('[data-vi="email"] input')
    await input.setValue(email)
    expect(input.element.value).toBe(email)
  })

  test('click button signup should invoke "onSignup" method', async () => {
    const onSignUpSpy = vi.spyOn(wrapper.vm, 'onSignUp')

    await emailInput.setValue(email);
    await passwordInput.setValue(password);

    const signupButton = wrapper.find('[data-vi="signup"]')
    await signupButton.trigger('click')

    expect(onSignUpSpy).toHaveBeenCalledTimes(1)
  })

  test('click button login should invoke "onLogin" method', async () => {
    const onLoginSpy = vi.spyOn(wrapper.vm, 'onLogin')

    await emailInput.setValue(email);
    await passwordInput.setValue(password);

    const loginButton = wrapper.find('[data-vi="login"]')
    await loginButton.trigger('click')

    expect(onLoginSpy).toHaveBeenCalledTimes(1)
  })
})



