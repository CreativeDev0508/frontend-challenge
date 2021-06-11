<template>
  <tr class="lg:text-lg">
    <td class="text-center p-2 border border-primary-500 sm:hidden">
      <p class="text-lg font-semibold" data-test="name">
        {{ patient.fullName }}
      </p>
      <span class="capitalize" data-test="gender">{{ patient.gender }} - </span>
      <span data-test="birthday">{{ birthday }}</span>
    </td>
    <td
      class="hidden p-2 border border-primary-500 sm:table-cell"
      data-test="name"
    >
      {{ patient.fullName }}
    </td>
    <td
      class="
        hidden
        py-2
        px-4
        border border-primary-500
        capitalize
        sm:table-cell
      "
      data-test="gender"
    >
      {{ patient.gender }}
    </td>
    <td
      class="hidden py-2 px-4 border border-primary-500 sm:table-cell"
      data-test="birthday"
    >
      {{ birthday }}
    </td>
    <td class="align-middle p-2 border border-primary-500 lg:(py-2 px-4)">
      <button
        class="btn-outline text-lg"
        data-test="details-button"
        title="See details"
        @click="selectPatient(patient)"
      >
        View
      </button>
    </td>
  </tr>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
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
    const { selectPatient } = useModal()

    const birthday = computed(() => {
      const [year, month, day] = props.patient.dob.date.split('-')
      return [month, day.slice(0, 2), year].join('/')
    })

    return {
      birthday,
      selectPatient,
    }
  },
})
</script>
