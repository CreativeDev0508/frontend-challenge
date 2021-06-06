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

    <div v-else class="flex w-full flex-col items-center">
      <SearchBar @search="handleSearch" />
      <GenderFilter
        class="my-2 mb-4"
        :tag="currentTag"
        @change-filter="handleFilter"
      />

      <PatientsListShimmer v-if="isLoading" />
      <PatientsList :patients="patients" />

      <button
        class="btn"
        :class="{
          'cursor-not-allowed': isLoading,
          'cursor-pointer': !isLoading,
        }"
        :disabled="isLoading"
        @click="getPatients"
      >
        <svg
          v-if="isLoading"
          class="animate-spin -ml-1 mr-3 h-5 w-5 text-secondary-500"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        {{ isLoading ? 'Loading...' : 'Load more' }}
      </button>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api'
import usePatients from '@/composables/usePatients'
import usePatientSearch from '@/composables/usePatientSearch'
import useGenderFilter from '@/composables/useGenderFilter'
import useModal from '~/composables/useModal'
import { FilterTag } from '~/components/types'

export default defineComponent({
  setup() {
    const { getPatients, patients, isLoading, error } = usePatients()
    const { searchQuery, patientsMatchingSearchQuery } =
      usePatientSearch(patients)
    const { currentTag, filteredPatients } = useGenderFilter(
      patientsMatchingSearchQuery
    )
    const { visible, selectedPatient } = useModal()

    const handleSearch = (query: string): void => {
      searchQuery.value = query
    }

    const handleFilter = (tag: FilterTag): void => {
      currentTag.value = tag
    }

    const reloadPage = () => {
      window.location.reload()
    }

    onMounted(() => {
      getPatients()
    })

    return {
      handleSearch,
      handleFilter,
      patients: filteredPatients,
      getPatients,
      isLoading,
      error,
      reloadPage,
      currentTag,
      visible,
      selectedPatient,
    }
  },
})
</script>
