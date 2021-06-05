<template>
  <div class="w-full">
    <p
      v-if="isListEmpty"
      class="my-4 text-lg text-center"
      data-test="not-found-message"
    >
      No results found.
    </p>

    <div
      v-if="isDesktopOrTablet"
      class="hidden text-center border-collapse md:table"
    >
      <div class="table-header-group border border-primary-500">
        <div class="table-row font-semibold bg-primary-500 text-white">
          <div class="table-cell p-2 border-r border-white">Name</div>
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

    <div v-else class="w-full table text-center border-collapse md:hidden">
      <div
        v-if="!isListEmpty"
        class="table-header-group border border-primary-500"
      >
        <div class="table-row font-semibold bg-primary-500 text-white">
          <div class="table-cell p-2 border-r border-white">Patient</div>
          <div class="table-cell p-2">Actions</div>
        </div>
      </div>
      <ul v-if="!isListEmpty" class="table-row-group">
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
    const isListEmpty = computed(() => !props.patients.length)

    const context = useContext()

    const isDesktopOrTablet = context.$device.isDesktopOrTablet

    return {
      isDesktopOrTablet,
      isListEmpty,
    }
  },
})
</script>
