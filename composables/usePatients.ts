import { fetchPatients } from '@/api/patients'
import { ref, useContext } from '@nuxtjs/composition-api'
import { Patient } from '@/components/types'

const isLoading = ref(true)

export default function usePatients() {
  const patients = ref<Patient[]>([])
  const page = ref(0)
  const error = ref(false)

  const { $axios } = useContext()

  const getPatients = async () => {
    page.value += 1
    isLoading.value = true

    try {
      const additionalPatients = await fetchPatients($axios, page.value).then(
        (res) => res.results
      )

      if (additionalPatients.length) {
        const updatedPatients = additionalPatients.map((patient) => ({
          ...patient,
          fullName: `${patient.name.first} ${patient.name.last}`,
        }))

        patients.value.push(...updatedPatients)
      }
    } catch (err) {
      error.value = true
    }

    isLoading.value = false
  }

  return {
    getPatients,
    patients,
    isLoading,
    error,
  }
}
