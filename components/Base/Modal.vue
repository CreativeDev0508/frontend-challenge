<template>
  <div
    class="fixed z-1 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="
        flex
        items-center
        justify-center
        min-h-screen
        pt-20
        px-4
        pb-4
        text-center
        sm:block
        sm:p-0
      "
    >
      <div
        class="fixed inset-0 bg-blue-gray-900 bg-opacity-75 transition-opacity"
        aria-hidden="true"
        @click="hideModal"
      ></div>
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <div
        class="
          w-full
          inline-block
          align-bottom
          text-left
          shadow-xl
          rounded-3xl
          transform
          transition-all
          sm:my-8
          sm:align-middle
          sm:max-w-md
          lg:max-w-lg
        "
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import useModal from '@/composables/useModal'

export default defineComponent({
  setup() {
    const { hideModal } = useModal()

    return {
      hideModal,
    }
  },
})
</script>
