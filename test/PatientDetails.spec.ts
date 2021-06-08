import { mount } from '@vue/test-utils'
import PatientDetails from '@/components/PatientDetails.vue'
import { patient } from './mocks'

describe('PatientDetails', () => {
  it('displays personal and contact information', () => {
    const wrapper = mount(PatientDetails, {
      propsData: {
        patient,
      },
      directives: {
        focus() {
          jest.fn()
        },
      },
    })

    expect(wrapper.find('[data-test="details-name"]').text()).toContain(
      'Silvia Castillo'
    )
    expect(
      wrapper.find('[data-test="details-photo"]').attributes().src
    ).toContain('https://randomuser.me/api/portraits/women/85.jpg')
    expect(wrapper.find('[data-test="details-id"]').text()).toContain(
      'DNI - 30044011-Z'
    )
    expect(wrapper.find('[data-test="details-gender"]').text()).toContain(
      'female'
    )
    expect(wrapper.find('[data-test="details-dob"]').text()).toContain(
      '05/17/1986'
    )
    expect(wrapper.find('[data-test="details-nationality"]').text()).toContain(
      'Spain'
    )
    expect(wrapper.find('[data-test="details-email"]').text()).toContain(
      'silvia.castillo@example.com'
    )
    expect(wrapper.find('[data-test="details-phone"]').text()).toContain(
      '944-129-686'
    )
    expect(wrapper.find('[data-test="details-address"]').text()).toContain(
      '6313 Calle del Pez'
    )
  })
})
