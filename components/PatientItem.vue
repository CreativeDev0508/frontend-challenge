<template>
  <li class="table-row lg:text-lg">
    <div
      v-if="isDesktopOrTablet"
      class="table-cell p-2 border border-primary-500"
      data-test="name"
    >
      {{ patient.fullName }}
    </div>
    <div
      v-if="isDesktopOrTablet"
      class="table-cell py-2 px-4 border border-primary-500 capitalize"
      data-test="gender"
    >
      {{ patient.gender }}
    </div>
    <div
      v-if="isDesktopOrTablet"
      class="table-cell py-2 px-4 border border-primary-500"
      data-test="birthday"
    >
      {{ birthday }}
    </div>
    <div
      v-if="isDesktopOrTablet"
      class="
        table-cell
        align-middle
        p-2
        border border-primary-500
        lg:(py-2
        px-4)
      "
    >
      <button
        class="btn-outline text-base lg:text-lg"
        @click="selectPatient(patient)"
      >
        View
      </button>
    </div>

    <div
      v-if="!isDesktopOrTablet"
      class="table-cell text-center p-2 border border-primary-500"
    >
      <p class="text-lg font-semibold" data-test="name">
        {{ patient.fullName }}
      </p>
      <span class="capitalize" data-test="gender">{{ patient.gender }} - </span>
      <span data-test="birthday">{{ birthday }}</span>
    </div>
    <div
      v-if="!isDesktopOrTablet"
      class="table-cell align-middle text-center p-2 border border-primary-500"
    >
      <button
        class="btn-outline text-xl underline border-none"
        @click="selectPatient(patient)"
      >
        View
      </button>
    </div>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'
import useModal from '@/composables/useModal'
import { Patient } from './types'

export default defineComponent({
  name: 'PatientItem',
  props: {
    patient: {
      type: Object as () => Patient,
      required: true,
    },
  },
  setup(props) {
    const context = useContext()
    const { selectPatient } = useModal()
    const isDesktopOrTablet = context.$device.isDesktopOrTablet

    const birthday = computed(() => {
      const [year, month, day] = props.patient.dob.date.split('-')
      return [month, day.slice(0, 2), year].join('/')
    })

    return {
      isDesktopOrTablet,
      birthday,
      selectPatient,
    }
  },
})
</script>
