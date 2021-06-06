<template>
  <div class="relative">
    <input
      id="searchbar"
      v-model="searchQuery"
      type="search"
      class="
        w-full
        pl-3
        pr-10
        py-2
        border-2 border-gray-200
        rounded-xl
        focus:(border-primary-500
        outline-none)
        transition-colors
      "
      placeholder="Search by name or country"
      @keydown.enter="handleSearch"
    />
    <button
      class="
        block
        w-7
        h-7
        absolute
        top-2
        right-2
        group
        text-gray-400
        focus-visible:(ring-2
        ring-offset-2 ring-offset-white ring-primary-500
        outline-none)
        transition-colors
      "
      aria-label="search"
      title="Search"
      @click="handleSearch"
    >
      <svg
        class="h-6 w-6 group-hover:text-primary-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  emits: ['search'],
  setup(_, ctx) {
    const searchQuery = ref('')

    const handleSearch = () => {
      ctx.emit('search', searchQuery.value.toLowerCase())
    }

    return {
      searchQuery,
      handleSearch,
    }
  },
})
</script>
