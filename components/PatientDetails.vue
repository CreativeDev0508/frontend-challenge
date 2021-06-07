<template>
  <section
    class="
      relative
      flex flex-col
      justify-between
      bg-white
      border-3 border-primary-500
    "
    data-test="patient-details"
  >
    <div class="w-full p-2 flex justify-end">
      <div
        class="
          w-32
          absolute
          top-0
          left-1/2
          transform
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          overflow-hidden
          border-2 border-primary-500
          shadow-lg
          lg:(w-40)
        "
      >
        <img
          :src="patient.picture.large"
          :alt="`${patient.fullName}\'s photo`"
          class="w-full h-full object-contain"
        />
      </div>

      <button
        v-focus
        class="btn-outline border-none p-0"
        aria-label="close"
        title="Close"
        data-test="close-button"
        @click="hideModal"
      >
        <svg
          class="h-9 w-9"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <div
      class="
        w-2/3
        absolute
        top-1/2
        right-2
        transform
        -translate-y-1/2
        sm:(w-3/6
        right-4)
      "
    >
      <svg class="opacity-20" viewBox="0 0 124 124" fill="none">
        <path
          d="M62 103.204C60.8661 103.201 59.7561 102.878 58.7967 102.274L31 85.8184C30.2191 85.3675 29.5698 84.7202 29.1166 83.9407C28.6634 83.1612 28.4221 82.2767 28.4167 81.375V42.625C28.4221 41.7234 28.6634 40.8388 29.1166 40.0593C29.5698 39.2798 30.2191 38.6325 31 38.1817L59.0033 21.6483C59.9238 21.0949 60.9776 20.8025 62.0517 20.8025C63.1257 20.8025 64.1795 21.0949 65.1 21.6483L93 38.1817C93.7809 38.6325 94.4302 39.2798 94.8834 40.0593C95.3366 40.8388 95.5779 41.7234 95.5833 42.625V80.9358C95.5859 81.9436 95.3309 82.9354 94.8426 83.817C94.3544 84.6986 93.6489 85.4408 92.7933 85.9734L65.0483 102.352C64.1346 102.921 63.0767 103.217 62 103.204ZM59.83 93.4134H59.6233H59.83ZM63.9892 93.4134H64.17H63.9892ZM38.75 78.43L62 92.1475L85.25 78.43V45.57L62 31.8525L38.75 45.57V78.43ZM64.3508 30.4575H64.1442H64.3508Z"
          fill="#21F3B4"
        />
        <path
          d="M90.4167 47.7917C89.2891 47.7801 88.1963 47.4001 87.3049 46.7094C86.4135 46.0188 85.7726 45.0555 85.4799 43.9665C85.1871 42.8776 85.2587 41.7227 85.6836 40.6783C86.1085 39.6338 86.8635 38.757 87.8333 38.1817L116.25 21.39C116.835 20.9648 117.502 20.667 118.209 20.5159C118.916 20.3648 119.647 20.3638 120.354 20.5129C121.062 20.6619 121.73 20.9578 122.316 21.3813C122.902 21.8049 123.392 22.3466 123.755 22.9716C124.119 23.5966 124.347 24.2909 124.425 25.0096C124.503 25.7283 124.43 26.4554 124.209 27.1439C123.989 27.8324 123.627 28.467 123.145 29.0066C122.664 29.5463 122.075 29.9789 121.417 30.2767L93 47.0683C92.2176 47.5327 91.3264 47.7822 90.4167 47.7917Z"
          fill="#21F3B4"
        />
        <path
          d="M5.16666 103.333C4.0391 103.322 2.94626 102.942 2.0549 102.251C1.16354 101.561 0.52259 100.597 0.229859 99.5083C-0.0628719 98.4193 0.00868723 97.2645 0.433618 96.22C0.858548 95.1755 1.61352 94.2987 2.58333 93.7234L31 76.9317C31.5847 76.5065 32.2521 76.2087 32.959 76.0576C33.666 75.9066 34.3968 75.9055 35.1042 76.0546C35.8116 76.2036 36.4799 76.4995 37.0657 76.923C37.6516 77.3466 38.1421 77.8884 38.5055 78.5133C38.8688 79.1383 39.097 79.8326 39.1752 80.5513C39.2534 81.27 39.1799 81.9971 38.9595 82.6856C38.739 83.3741 38.3766 84.0087 37.8955 84.5483C37.4144 85.088 36.8254 85.5206 36.1667 85.8184L7.74999 102.61C6.96759 103.074 6.07644 103.324 5.16666 103.333Z"
          fill="#21F3B4"
        />
        <path
          d="M33.5833 47.7916C32.6735 47.7822 31.7824 47.5327 31 47.0683L2.58331 30.2766C1.54888 29.5243 0.830267 28.4151 0.566522 27.1635C0.302777 25.9119 0.512651 24.607 1.15553 23.5013C1.79842 22.3955 2.8286 21.5675 4.04676 21.1775C5.26491 20.7875 6.58442 20.8632 7.74998 21.39L36.1666 38.1816C37.1365 38.7569 37.8914 39.6337 38.3164 40.6782C38.7413 41.7227 38.8128 42.8775 38.5201 43.9665C38.2274 45.0555 37.5864 46.0188 36.6951 46.7094C35.8037 47.4001 34.7109 47.7801 33.5833 47.7916Z"
          fill="#21F3B4"
        />
        <path
          d="M58.28 83.0284C57.1524 83.0169 56.0596 82.6368 55.1682 81.9462C54.2769 81.2555 53.6359 80.2922 53.3432 79.2033C53.0505 78.1143 53.122 76.9595 53.547 75.915C53.9719 74.8705 54.7269 73.9937 55.6967 73.4184L73.16 63.0851C74.3326 62.5227 75.6741 62.4231 76.9168 62.8063C78.1595 63.1895 79.2121 64.0273 79.8643 65.1524C80.5165 66.2774 80.7205 67.6071 80.4354 68.876C80.1504 70.1448 79.3974 71.2595 78.3267 71.9976L60.8633 82.3309C60.0784 82.7862 59.1874 83.0268 58.28 83.0284Z"
          fill="#9AE7C2"
        />
      </svg>
    </div>

    <div class="mt-6 text-center lg:mt-10">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl">
        <span class="font-semibold">{{ patient.name.first }}</span>
        <span>{{ patient.name.last }}</span>
      </h2>
      <p v-if="patient.id.value" class="text-sm sm:text-base lg:text-lg">
        {{ patient.id.name }} - {{ patient.id.value }}
      </p>
    </div>

    <div class="relative mt-4 flex mx-4 z-1 sm:mx-8">
      <div
        class="w-4 border-l-2 border-t-2 border-b-2 border-primary-500"
      ></div>
      <div class="p-2">
        <h3 class="mb-2 text-lg font-semibold underline lg:text-xl">
          Personal
        </h3>
        <div class="text-sm space-y-1 sm:text-base lg:text-lg">
          <p class="capitalize">{{ patient.gender }}</p>
          <p>Birthday: {{ birthday }}</p>
          <p>Nationality: {{ patient.nat }}</p>
        </div>
      </div>
    </div>

    <div class="relative mt-4 flex mx-4 z-1 sm:mx-8">
      <div
        class="w-4 border-l-2 border-t-2 border-b-2 border-primary-500"
      ></div>
      <div class="p-2">
        <h3 class="mb-2 text-lg font-semibold underline lg:text-xl">Contact</h3>
        <div class="text-sm space-y-1 sm:text-base lg:text-lg">
          <p class="capitalize">{{ patient.email }}</p>
          <p>Phone: {{ patient.phone }}</p>
          <p>Address: {{ address }}</p>
        </div>
      </div>
    </div>

    <div class="mt-4 py-1 flex justify-center bg-primary-500 sm:mt-8">
      <Logo class="lg:h-8" />
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import useModal from '@/composables/useModal'
import { Patient } from './types'

export default defineComponent({
  props: {
    patient: {
      type: Object as () => Patient,
      required: true,
    },
  },
  setup(props) {
    const { hideModal } = useModal()

    const birthday = computed(() => {
      const [year, month, day] = props.patient.dob.date.split('-')
      return [month, day.slice(0, 2), year].join('/')
    })

    const address = computed(() => {
      const { number, name } = props.patient.location.street
      return `${number} ${name}`
    })

    return {
      hideModal,
      birthday,
      address,
    }
  },
})
</script>
