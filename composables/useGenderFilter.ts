import { computed, ref, Ref } from '@nuxtjs/composition-api'
import { FilterTag, Patient } from '@/components/types'

export default function useGenderFilter(patients: Ref<Patient[]>) {
  const currentTag = ref<FilterTag>('all')
  const filteredPatients = computed(() => {
    if (currentTag.value === 'all') {
      return patients.value
    }

    return patients.value.filter(
      (patient: Patient) => patient.gender.toLowerCase() === currentTag.value
    )
  })

  return {
    currentTag,
    filteredPatients,
  }
}
