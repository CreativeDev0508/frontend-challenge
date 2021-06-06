<template>
  <div class="w-full flex flex-col justify-center items-center">
    <p
      v-if="isListEmpty && !isLoading"
      class="my-4 text-lg text-center"
      data-test="not-found-message"
    >
      No results found.
    </p>

    <div
      v-if="isDesktopOrTablet && !isListEmpty"
      class="mt-4 text-center border-collapse w-full max-w-lg lg:max-w-xl"
    >
      <div class="table-header-group border border-primary-500">
        <div class="table-row font-semibold bg-primary-500 text-white">
          <div class="table-cell p-2 border-r border-white w-full">Name</div>
          <div class="table-cell p-2 border-r border-white">Gender</div>
          <div class="table-cell p-2 border-r border-white">Birthday</div>
          <div class="table-cell p-2">Actions</div>
        </div>
      </div>
      <ul class="table-row-group">
        <PatientItem
          v-for="patient in patients"
          :key="patient.dob.date"
          :patient="patient"
        />
      </ul>
    </div>

    <div
      v-if="!isDesktopOrTablet && !isListEmpty"
      class="w-full table text-center border-collapse"
    >
      <div class="table-header-group border border-primary-500">
        <div class="table-row font-semibold bg-primary-500 text-white">
          <div class="table-cell p-2 border-r border-white">Patient</div>
          <div class="table-cell p-2">Actions</div>
        </div>
      </div>
      <ul class="table-row-group">
        <PatientItem
          v-for="patient in patients"
          :key="patient.dob.date"
          :patient="patient"
        />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'
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

    const context = useContext()

    const isDesktopOrTablet = context.$device.isDesktopOrTablet

    return {
      isDesktopOrTablet,
      isListEmpty,
      isLoading,
    }
  },
})
</script>
