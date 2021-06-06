import { ref, computed, Ref } from '@nuxtjs/composition-api'
import { Patient } from '@/components/types'

export default function usePatientSearch(patients: Ref<Patient[]>) {
  const searchQuery = ref('')
  const patientsMatchingSearchQuery = computed(() => {
    return patients.value.filter(
      (patient: Patient) =>
        patient.fullName.toLowerCase().includes(searchQuery.value) ||
        patient.nat.toLowerCase().includes(searchQuery.value)
    )
  })

  return {
    searchQuery,
    patientsMatchingSearchQuery,
  }
}
