import { shallowMount } from '@vue/test-utils'
import ExampleCard from '@/components/ExampleCard.vue'

describe('ExampleCard.vue', () => {
  it('renders the product on the card when passed', () => {
    const wrapper = shallowMount(ExampleCard)

    expect(wrapper.find('#example').text()).toBe('Example')
  })
})
