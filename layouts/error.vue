<template>
  <div class="flex flex-col items-center">
    <div class="mt-10 mb-6">
      <h1 v-if="error.statusCode === 404" class="text-2xl">
        Ops... Page not found
      </h1>
      <h1 v-else>An error occurred</h1>
    </div>
    <NuxtLink to="/" class="btn">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>
