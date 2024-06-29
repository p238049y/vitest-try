import { mount } from '@vue/test-utils'
import HelloWorld from '../../components/HelloWorld.vue'
import { test, expect } from 'vitest'

test('初期表示', () => {
  const wrapper = mount(HelloWorld, {
    props: {
      msg: 'hello',
    },
  })

  expect(wrapper.text()).toContain('hello')
})
