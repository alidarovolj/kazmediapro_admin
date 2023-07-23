<template>
  <div class="h-screen">
    <div class="container mx-auto px-4 lg:px-0" v-if="getCategories">
      <div class="flex items-center justify-between mb-10">
        <Heading text="Категории" />
        <p
          @click="modalState = true"
          class="cursor-pointer bg-mainColor text-white px-7 py-2 text-sm"
        >
          Создать категорию
        </p>
      </div>
      <div class="max-h-[700px] overflow-y-auto">
        <Table
          @callToRefresh="categories()"
          :columns="categoriesColumns"
          :source="getCategories"
          :numbered="true"
        >
          <template #default="{ row, column }">
            <template v-if="column.name === 'Действия'">
              <div
                @click="
                  currentID = row.id;
                  modalStateRemove = true;
                "
                class="flex items-center text-red-500 mb-1"
              >
                <font-awesome-icon
                  class="text-xl mr-2"
                  :icon="['fas', 'xmark']"
                />
                <p>Удалить</p>
              </div>
              <div
                @click="
                  currentID = row;
                  modalStateEdit = true;
                "
                class="flex items-center text-secondaryColor"
              >
                <font-awesome-icon
                  class="text-lg mr-2"
                  :icon="['fas', 'pen-to-square']"
                />
                <p>Редактировать</p>
              </div>
            </template>
          </template>
        </Table>
      </div>
      <div
        v-if="getCategories.data"
        class="flex justify-end mt-3 text-sm font-bold"
      >
        <p>Всего категорий: {{ getCategories.data.length }}</p>
      </div>
    </div>
    <LoaderTable v-else />
    <Modal
      :isVisible="modalState"
      componentName="CreateCategory"
      @closeModal="(val) => (modalState = val)"
    />
    <Modal
      :isVisible="modalStateRemove"
      componentName="RemoveCategory"
      @closeModal="(val) => (modalStateRemove = val)"
      :recID="currentID"
    />
    <Modal
      :isVisible="modalStateEdit"
      componentName="EditCategory"
      @closeModal="(val) => (modalStateEdit = val)"
      :recID="currentID"
    />
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import { mapActions, mapGetters } from "vuex";

import LoaderTable from "@/components/General/LoaderTable.vue";
import Heading from "@/components/General/Heading.vue";
import Table from "@/components/General/Table.vue";
import Modal from "@/components/General/Modal.vue";

export default {
  name: "Categories",
  data() {
    return {
      modalState: false,
      modalStateRemove: false,
      modalStateEdit: false,
      currentID: null,
      categoriesColumns: [
        {
          name: "ID",
          fname: "id",
        },
        {
          name: "Название",
          fname: "name",
        },
        {
          name: "Создатель",
          fname: "user_id.name",
        },
        {
          name: "Дата создания",
          fname: "created_at",
        },
        {
          name: "Действия",
          fname: "",
        },
      ],
    };
  },
  components: {
    Heading,
    Table,
    Modal,
    LoaderTable,
  },
  methods: {
    ...mapActions(["categories", "currentUser"]),
  },
  computed: {
    ...mapGetters(["getCategories"]),
  },
  mounted() {
    this.categories();
    this.currentUser();
  },
  setup() {
    useMeta({ title: "Категории" });
  },
};
</script>
