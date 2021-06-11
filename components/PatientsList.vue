<template>
  <div class="w-full flex flex-col justify-center items-center">
    <p
      v-if="isListEmpty && !isLoading"
      class="my-4 text-lg text-center"
      data-test="not-found-message"
    >
      No results found.
    </p>

    <table
      v-if="!isListEmpty"
      class="mt-4 text-center border-collapse w-full max-w-lg lg:max-w-xl"
    >
      <thead class="border border-primary-500">
        <tr class="font-semibold bg-primary-500 text-white">
          <th class="p-2 border-r border-white sm:hidden">Patient</th>
          <th class="hidden p-2 border-r border-white w-full sm:table-cell">
            Name
          </th>
          <th class="hidden p-2 border-r border-white sm:table-cell">Gender</th>
          <th class="hidden p-2 border-r border-white sm:table-cell">
            Birthday
          </th>
          <th class="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <PatientItem
          v-for="patient in patients"
          :key="patient.dob.date"
          :patient="patient"
        />
      </tbody>
    </table>

    <button
      class="btn lg:(mt-8)"
      :class="{
        'cursor-not-allowed': isLoading,
        'cursor-pointer': !isLoading,
      }"
      :disabled="isLoading"
      data-test="load-more-button"
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
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import usePatients from '@/composables/usePatients'
import PatientItem from './PatientItem.vue'
import { Patient } from './types'

export default defineComponent({
  name: 'PatientsList',
  components: { PatientItem },
  props: {
    patients: {
      type: Array as () => Patient[],
      required: true,
    },
  },
  setup(props) {
    const isListEmpty = computed(() => props.patients.length === 0)
    const { isLoading, getPatients } = usePatients()

    return {
      isListEmpty,
      isLoading,
      getPatients,
    }
  },
})
</script>
