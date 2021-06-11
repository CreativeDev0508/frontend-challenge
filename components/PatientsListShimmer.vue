<template>
  <div class="w-full flex justify-center">
    <table
      class="
        mt-4
        text-center
        border-collapse border border-primary-500
        w-full
        max-w-lg
        lg:max-w-xl
      "
      data-test="shimmer-list"
    >
      <thead>
        <tr class="table-row font-semibold bg-primary-500 text-white">
          <th class="hidden p-2 border-r border-white w-full sm:table-cell">
            Name
          </th>
          <th class="hidden py-2 px-4 border-r border-white sm:table-cell">
            Gender
          </th>
          <th class="hidden py-2 px-4 border-r border-white sm:table-cell">
            Birthday
          </th>
          <th class="table-cell p-2 border-r border-white sm:hidden">
            Patient
          </th>
          <th class="table-cell p-2 lg:(py-2 px-4)">Actions</th>
        </tr>
      </thead>
      <tbody class="table-row-group">
        <tr v-for="(_, index) in 10" :key="index" class="table-row">
          <td
            class="
              hidden
              p-2
              border border-primary-500
              align-middle
              sm:table-cell
            "
          >
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
          </td>
          <td
            class="
              hidden
              table-cell
              py-2
              px-4
              border border-primary-500
              align-middle
              sm:table-cell
            "
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
          </td>
          <td
            class="
              hidden
              table-cell
              py-2
              px-4
              border border-primary-500
              align-middle
              sm:table-cell
            "
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
          </td>
          <td
            class="
              flex flex-col
              items-center
              p-2
              border border-primary-500
              align-middle
              sm:hidden
            "
          >
            <span class="h-6 mb-1 w-10/12 block animate-pulse bg-primary-500" />
            <span class="h-4 w-6/12 block animate-pulse bg-primary-500" />
          </td>
          <td
            class="table-cell px-2 w-1/4 border border-primary-500 align-middle"
          >
            <span
              class="
                h-6
                w-14
                inline-flex
                animate-pulse
                bg-primary-500
                align-middle
                sm:(h-4)
                lg:(h-6)
              "
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
