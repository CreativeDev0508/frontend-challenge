import { readonly, ref } from '@nuxtjs/composition-api'
import { Patient } from '@/components/types'

const visible = ref(false)
const selectedPatient = ref<Patient>()

export default function useModal() {
  const showModal = () => {
    document.body.style.overflow = 'hidden'
    visible.value = true
  }
  const hideModal = () => {
    document.body.style.overflow = 'auto'
    visible.value = false
  }

  const selectPatient = (patient: Patient) => {
    selectedPatient.value = patient
    showModal()
  }

  return {
    visible: readonly(visible),
    hideModal,
    selectPatient,
    selectedPatient,
  }
}
