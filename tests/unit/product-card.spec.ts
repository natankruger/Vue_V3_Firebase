import { shallowMount } from '@vue/test-utils'
import ProductCard from '@/components/ProductCard.vue'

describe('ProductCard.vue', () => {
  it('renders the product on the card when passed', () => {
    const product = { type: 'Eletrodomestico', description: 'Microondas phillips 21L', price: 46, quantity: 4, code: 'mmxrg' }
    const wrapper = shallowMount(ProductCard, {
      props: { product }
    })

    expect(wrapper.find('#p-code').text()).toBe(`Código: ${product.code}`)

    expect(wrapper.find('#p-desc').text()).toBe(`${product.type} - ${product.description}`)

    expect(wrapper.find('#p-stock').text()).toBe(`Estoque: ${product.quantity}`)

    expect(wrapper.find('#p-price').text()).toBe(`Preço no fornecedor: R$ ${product.price}`)
  })
})
