<template>
  <div class="w-full flex justify-center">
    <div
      v-if="isDesktopOrTablet"
      class="mt-4 text-center border-collapse w-full max-w-lg lg:max-w-xl"
      data-test="shimmer-list"
    >
      <div class="table-header-group border border-primary-500">
        <div class="table-row font-semibold bg-primary-500 text-white">
          <div class="table-cell p-2 border-r border-white w-full">Name</div>
          <div class="table-cell py-2 px-4 border-r border-white">Gender</div>
          <div class="table-cell py-2 px-4 border-r border-white">Birthday</div>
          <div class="table-cell p-2 lg:(py-2 px-4)">Actions</div>
        </div>
      </div>
      <ul class="table-row-group">
        <li v-for="(_, index) in 10" :key="index" class="table-row">
          <div class="table-cell p-2 border border-primary-500 align-middle">
            <span
              class="
                h-4
                w-36
                inline-flex
                animate-pulse
                bg-primary-500
                lg:(h-6
                w-36)
                align-middle
              "
            />
          </div>
          <div
            class="table-cell py-2 px-4 border border-primary-500 align-middle"
          >
            <span
              class="
                h-4
                w-14
                inline-flex
                animate-pulse
                bg-primary-500
                lg:(h-6
                w-17)
                align-middle
              "
            />
          </div>
          <div
            class="table-cell py-2 px-4 border border-primary-500 align-middle"
          >
            <span
              class="
                h-4
                w-23
                inline-flex
                animate-pulse
                bg-primary-500
                lg:(h-6
                w-25)
                align-middle
              "
            />
          </div>
          <div
            class="table-cell py-2 px-4 border border-primary-500 align-middle"
          >
            <span
              class="
                h-4
                w-10
                inline-flex
                animate-pulse
                bg-primary-500
                lg:(h-6
                w-12)
                align-middle
              "
            />
          </div>
        </li>
      </ul>
    </div>

    <div
      v-else
      class="w-full table text-center border-collapse"
      data-test="shimmer-list"
    >
      <div class="table-header-group border border-primary-500">
        <div class="table-row font-semibold bg-primary-500 text-white">
          <div class="table-cell p-2 border-r border-white">Patient</div>
          <div class="table-cell p-2">Actions</div>
        </div>
      </div>
      <ul class="table-row-group">
        <li v-for="(_, index) in 10" :key="index" class="table-row">
          <div class="table-cell p-2 border border-primary-500 align-middle">
            <span class="h-6 mb-1 w-full block animate-pulse bg-primary-500" />
            <span class="h-4 mb-1 w-5/12 block animate-pulse bg-primary-500" />
            <span class="h-4 w-6/12 block animate-pulse bg-primary-500" />
          </div>
          <div
            class="
              table-cell
              px-2
              w-4/12
              border border-primary-500
              align-middle
            "
          >
            <span
              class="h-6 w-10/12 inline-flex animate-pulse bg-primary-500"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const context = useContext()

    const isDesktopOrTablet = context.$device.isDesktopOrTablet

    return {
      isDesktopOrTablet,
    }
  },
})
</script>
