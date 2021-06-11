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
    const { isLoading } = usePatients()

    return {
      isListEmpty,
      isLoading,
    }
  },
})
</script>
