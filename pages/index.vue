<template>
  <main class="flex flex-col p-4 items-center">
    <BaseModal v-if="visible">
      <PatientDetails :patient="selectedPatient" />
    </BaseModal>

    <div v-if="error" class="flex flex-col items-center py-14">
      <p class="text-center text-lg">
        Something went wrong. Please, try again.
      </p>
      <button class="btn" @click="reloadPage">Reload</button>
    </div>

    <div v-else class="flex w-full flex-col items-center md:(my-4)">
      <SearchBar @search="handleSearch" />
      <GenderFilter
        class="my-2 mb-4"
        :tag="currentTag"
        @change-filter="handleFilter"
      />
      <PatientsListShimmer v-if="shimmer" />
      <PatientsList :patients="patients" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'
import usePatients from '@/composables/usePatients'
import usePatientSearch from '@/composables/usePatientSearch'
import useGenderFilter from '@/composables/useGenderFilter'
import useModal from '@/composables/useModal'
import { FilterTag } from '@/components/types'

export default defineComponent({
  setup() {
    const { getPatients, patients, error } = usePatients()
    const { searchQuery, patientsMatchingSearchQuery } =
      usePatientSearch(patients)
    const { currentTag, filteredPatients } = useGenderFilter(
      patientsMatchingSearchQuery
    )
    const { visible, selectedPatient } = useModal()
    const shimmer = ref(true)

    const handleSearch = (query: string): void => {
      searchQuery.value = query
    }

    const handleFilter = (tag: FilterTag): void => {
      currentTag.value = tag
    }

    const reloadPage = () => {
      window.location.reload()
    }

    const stopShimmer = () => {
      shimmer.value = false
    }

    onMounted(async () => {
      await getPatients()
      stopShimmer()
    })

    return {
      handleSearch,
      handleFilter,
      patients: filteredPatients,
      getPatients,
      error,
      reloadPage,
      currentTag,
      visible,
      selectedPatient,
      shimmer,
    }
  },
})
</script>
