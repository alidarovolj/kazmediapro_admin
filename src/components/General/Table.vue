<template>
  <div v-if="source">
    <div class="overflow-auto">
      <table
        :class="{ 'pe-none': spinner }"
        class="hidden lg:block custom-table dark:border-darkElBg text-black dark:text-darkText min-w-full bg-slate-50 dark:bg-darkElBg text-xs"
      >
        <div
          v-if="spinner"
          class="position-absolute d-flex align-items-baseline h-100 w-100 top-0 bg-white bg-opacity-50"
          style="z-index: 2"
        >
          <div class="position-sticky top-50 start-50 translate-middle">
            <span class="spinner-border text-primary" />
          </div>
        </div>
        <thead
          class="position-sticky text-left bg-[#F3F2F7] dark:bg-darkerBg border-b"
          :class="{ 'top-0': !source?.hasOwnProperty('total') }"
        >
          <tr class="">
            <th
              v-for="(column, key) in columns"
              :key="key"
              class="py-2 dark:text-white lg:py-3 px-3 font-bold text-[#757575] text-xs whitespace-nowrap"
            >
              {{ column.name }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="!spinner && !source?.data.length">
            <td :colspan="columns.length" class="text-center py-4 font-medium">
              Нет данных
            </td>
          </tr>
          <template v-else>
            <tr
              class="whitespace-nowrap lg:whitespace-normal cursor-pointer text-xs"
              v-for="(row, key) in source?.data"
              :key="key"
            >
              <td
                @click="
                  prefix &&
                  column.fname != 'contact_route_button' &&
                  column.fname != 'note' &&
                  column.fname != 'actions'
                    ? { click: $router.push(prefix + row.id) }
                    : {}
                "
                class="py-2 lg:py-5 px-3 border-b border-gray-300 dark:border-gray-600"
                v-for="(column, index) in columns"
                :key="index"
                :class="[column.tdClass, { 'position-relative': linked }]"
                :data-column-name="column.name"
              >
                <slot
                  :row="row"
                  :column="column"
                  :index="key"
                  :valFrom="getValFrom"
                >
                  {{ getValFrom(row, column, index) }}
                </slot>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
      <div
        :class="{ 'pe-none': spinner }"
        class="block lg:hidden text-[#757575] dark:text-darkText dark:bg-darkElBg text-xs"
      >
        <div
          v-if="spinner"
          class="position-absolute d-flex align-items-baseline h-100 w-100 top-0 bg-white bg-opacity-50"
          style="z-index: 2"
        >
          <div class="position-sticky top-50 start-50 translate-middle">
            <span class="spinner-border text-primary" />
          </div>
        </div>
        <div>
          <div v-if="!spinner && !source?.data.length">
            <div :colspan="columns.length" class="text-center py-4 font-medium">
              Нет данных
            </div>
          </div>
          <template v-else>
            <div class="">
              <div
                class="cursor-pointer text-xs h-48 border-b py-3 pb-10 truncate relative dark:text-white"
                v-for="(row, key) in source?.data"
                :class="{ '!h-full !text-clip': openedTab[key] }"
                :key="key"
              >
                <div
                  @click="openTab(key)"
                  class="absolute w-full bottom-0 py-2 text-center bg-gray-50 dark:bg-darkBg"
                >
                  <font-awesome-icon
                    :class="{ 'rotate-180': openedTab[key] }"
                    :icon="['fas', 'chevron-down']"
                  />
                </div>

                <div>
                  <div
                    @click="
                      prefix &&
                      column.fname != 'contact_route_button' &&
                      column.fname != 'note' &&
                      column.fname != 'actions'
                        ? { click: $router.push(prefix + row.id) }
                        : {}
                    "
                    class="py-2 lg:py-3 px-3 text-xs border-gray-300 dark:border-gray-600 text-left"
                    v-for="(column, index) in columns"
                    :key="index"
                    :class="[column.tdClass, { 'position-relative': linked }]"
                    :data-column-name="column.name"
                  >
                    <p class="font-semibold text-xs mb-1">{{ column.name }}</p>
                    <slot
                      :row="row"
                      :column="column"
                      :index="key"
                      :valFrom="getValFrom"
                    >
                      {{ getValFrom(row, column, index) }}
                    </slot>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      openedTab: [],
    };
  },
  props: {
    prefix: {
      type: String,
      required: false,
    },
    columns: {
      type: Array,
      required: true,
    },
    source: {
      type: [Object, null],
      required: true,
    },
    spinner: {
      type: Boolean,
      default: false,
    },
    linked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getValFrom: (row, column) =>
      column.fname.split(".").reduce((prev, curr) => {
        if ([null, undefined].includes(prev)) return;
        return prev[curr];
      }, row),
    secondLink(value) {
      this.$emit("callToRefresh", value);
    },
    openTab(key) {
      console.log(key);
      this.openedTab = this.openedTab.map((value, i) =>
        i === key ? !value : false
      );
    },
    handleOutsideClick(event) {
      this.openedTab.forEach((el) => {
        if (el && !this.$el.contains(event.target)) {
          el = false;
        }
      });
    },
  },
  mounted() {
    document.addEventListener("click", this.handleOutsideClick);
    this.openedTab = this.source.data.map(() => false);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleOutsideClick);
  },
};
</script>

<style scoped>
table {
  table-layout: fixed;
  width: 100%;
}
td {
  width: 9%;
}
</style>
