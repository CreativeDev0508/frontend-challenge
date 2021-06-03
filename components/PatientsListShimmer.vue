<template>
  <div class="p-4 flex justify-center">
    <div class="hidden text-center border-collapse md:table">
      <div class="table-header-group border border-primary-500">
        <div class="table-row font-semibold bg-primary-500 text-white">
          <div class="table-cell p-2 border-r border-white">Name</div>
          <div class="table-cell p-2 border-r border-white">Gender</div>
          <div class="table-cell p-2 border-r border-white">Birthday</div>
          <div class="table-cell p-2">Actions</div>
        </div>
      </div>
      <ul class="table-row-group">
        <li v-for="(_, index) in 10" :key="index" class="table-row">
          <div class="table-cell p-2 border border-primary-500 align-middle">
            <span class="h-4 w-full inline-flex animate-pulse bg-primary-500" />
          </div>
          <div class="table-cell p-2 border border-primary-500 align-middle">
            <span class="h-4 w-full inline-flex animate-pulse bg-primary-500" />
          </div>
          <div class="table-cell p-2 border border-primary-500 align-middle">
            <span class="h-4 w-full inline-flex animate-pulse bg-primary-500" />
          </div>
          <div class="table-cell p-2 border border-primary-500 align-middle">
            <span class="h-4 w-full inline-flex animate-pulse bg-primary-500" />
          </div>
        </li>
      </ul>
    </div>

    <div class="w-full table text-center border-collapse md:hidden">
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
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({})
</script>
