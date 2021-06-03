import { mount } from '@vue/test-utils'
import PatientItem from '@/components/PatientItem.vue'
import { patient } from './mocks'

describe('PatientItem', () => {
  it('renders a patient', () => {
    const wrapper = mount(PatientItem, {
      propsData: {
        patient,
      },
      mocks: {
        $nuxt: {
          context: {
            $device: {
              isDesktopOrTablet: false,
            },
          },
        },
      },
    })

    expect(wrapper.find('[data-test="name"]').text()).toBe('Silvia Castillo')
    expect(wrapper.find('[data-test="gender"]').text()).toContain('female')
    expect(wrapper.find('[data-test="birthday"]').text()).toBe('05/17/1986')
  })
})
