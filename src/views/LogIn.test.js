import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import LogIn  from './LogIn.vue'

test('button login should be rendered', () => {
    const wrapper = mount(LogIn)
    const text = wrapper.find('[data-vi="login"]').text();
    expect(text).toBe('Login');
})
