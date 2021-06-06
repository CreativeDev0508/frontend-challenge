<template>
  <div class="flex items-center">
    <p class="mr-2 text-sm sm:(text-base mr-4)">Filter by:</p>
    <button
      class="mr-2 btn-outline sm:text-base"
      :class="{
        'bg-primary-500': tag === 'all',
        'text-white': tag === 'all',
      }"
      @click="handleTagChange('all')"
    >
      all
    </button>
    <button
      class="mr-2 btn-outline sm:text-base"
      :class="{
        'bg-primary-500': tag === 'female',
        'text-white': tag === 'female',
      }"
      @click="handleTagChange('female')"
    >
      women
    </button>
    <button
      class="btn-outline sm:text-base"
      :class="{
        'bg-primary-500': tag === 'male',
        'text-white': tag === 'male',
      }"
      @click="handleTagChange('male')"
    >
      men
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { FilterTag } from './types'

export default defineComponent({
  props: {
    tag: {
      type: String as () => FilterTag,
      default: 'all',
    },
  },
  emits: ['change-filter'],
  setup(_, ctx) {
    const handleTagChange = (tag: FilterTag) => {
      ctx.emit('change-filter', tag)
    }

    return {
      handleTagChange,
    }
  },
})
</script>
