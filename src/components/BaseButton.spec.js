import BaseButton from './BaseButton.vue'
import { shallow } from 'vue-test-utils'

describe('BaseButton', () => {
  // 测试
  test('click event', () => {
    // 测试代码
    const wrapper = shallow(BaseButton)
    wrapper.trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})
