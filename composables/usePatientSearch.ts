import { ref, computed, Ref } from '@nuxtjs/composition-api'
import { Patient } from '@/components/types'

export default function usePatientSearch(patients: Ref<Readonly<Patient[]>>) {
  const searchQuery = ref('')
  const patientsMatchingSearchQuery = computed(() => {
    return patients.value.filter(
      (patient: Patient) =>
        patient.fullName.toLowerCase().includes(searchQuery.value) ||
        patient.location.country.toLowerCase().includes(searchQuery.value)
    )
  })

  return {
    searchQuery,
    patientsMatchingSearchQuery,
  }
}
