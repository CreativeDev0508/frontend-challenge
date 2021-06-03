<template>
  <div>
    <PatientsListShimmer v-if="$fetchState.pending" />
    <p v-else-if="$fetchState.error" class="py-14 text-center">
      Error while fetching patients.
    </p>
    <div v-else>
      <PatientsList :patients="patients" />
      <InfiniteLoading class="mt-4 mb-8" @infinite="loadMorePatients">
        <div
          slot="spinner"
          class="flex justify-center text-primary-500 text-lg"
        >
          <TheSpinner />
          <p class="ml-2">Loading More...</p>
        </div>
        <div slot="no-more">No more results.</div>
        <div slot="no-results">No patients found.</div>
      </InfiniteLoading>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  useContext,
  useFetch,
} from '@nuxtjs/composition-api'
import InfiniteLoading, { StateChanger } from 'vue-infinite-loading'
import { fetchPatients } from '@/api/patients'
import { Patient } from '~/components/types'

export default defineComponent({
  components: { InfiniteLoading },
  setup() {
    const patients = ref<Patient[]>([])
    const page = ref(1)

    const { $axios } = useContext()

    const loadMorePatients = ($state: StateChanger) => {
      page.value += 1

      setTimeout(async () => {
        const additionalItems = await fetchPatients($axios, page.value).then(
          (res) => res.results
        )

        if (additionalItems.length) {
          patients.value.push(...additionalItems)
          $state.loaded()
        } else {
          $state.complete()
        }
      }, 500)
    }

    useFetch(async () => {
      patients.value = await fetchPatients($axios, page.value).then(
        (res) => res.results
      )
    })

    return {
      patients,
      loadMorePatients,
    }
  },
})
</script>
