import { shallowMount } from '@vue/test-utils'
import RevenueCard from '@/components/RevenueCard.vue'

describe('RevenueCard.vue', () => {
  it('renders the revenue when passed', () => {
    const revenue = { value: 46, outQuantity: 4, productCode: 'mmxrg' }
    const wrapper = shallowMount(RevenueCard, {
      props: { revenue }
    })

    expect(wrapper.find('#rev-value').text()).toBe(`R$: ${revenue.value}`)

    expect(wrapper.find('#rev-quantity').text()).toBe(revenue.outQuantity.toString())

    expect(wrapper.find('#rev-code').text()).toBe(revenue.productCode)
  })
})
