import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import LogIn  from './LogIn.vue'

test('title should be VuFire', () => {
    const wrapper = mount(LogIn)
    expect(wrapper.text()).toContain('VuFire')
})
