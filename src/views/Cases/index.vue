<template>
  <div class="h-screen">
    <div class="container mx-auto px-4 lg:px-0" v-if="getCases">
      <div class="flex items-center justify-between mb-10">
        <Heading text="Кейсы" />
        <p
          @click="modalState = true"
          class="cursor-pointer bg-mainColor text-white px-7 py-2 text-sm"
        >
          Создать кейс
        </p>
      </div>
      <div class="max-h-[700px] overflow-y-auto">
        <Table
          @callToRefresh="cases()"
          :columns="casesColumns"
          :source="getCases"
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
      <div v-if="getCases.data" class="flex justify-end mt-3 text-sm font-bold">
        <p>Всего кейсов: {{ getCases.data.length }}</p>
      </div>
    </div>
    <LoaderTable v-else />
    <Modal
      :isVisible="modalState"
      componentName="CreateCase"
      @closeModal="(val) => (modalState = val)"
    />
    <Modal
      :isVisible="modalStateRemove"
      componentName="RemoveCase"
      @closeModal="(val) => (modalStateRemove = val)"
      :recID="currentID"
    />
    <Modal
      :isVisible="modalStateEdit"
      componentName="EditCase"
      @closeModal="(val) => (modalStateEdit = val)"
      :recID="currentID"
    />
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import { mapActions, mapGetters } from "vuex";

import Heading from "@/components/General/Heading.vue";
import Table from "@/components/General/Table.vue";
import Modal from "@/components/General/Modal.vue";
import LoaderTable from "@/components/General/LoaderTable.vue";

export default {
  name: "Cases",
  data() {
    return {
      modalStateRemove: false,
      modalStateEdit: false,
      currentID: null,
      modalState: false,
      casesColumns: [
        {
          name: "ID",
          fname: "id",
        },
        {
          name: "Название",
          fname: "name",
        },
        {
          name: "Описание",
          fname: "description",
        },
        {
          name: "Создатель",
          fname: "user_id.name",
        },
        {
          name: "Категория",
          fname: "category_id.name",
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
    ...mapActions(["cases", "currentUser"]),
  },
  computed: {
    ...mapGetters(["getCases"]),
  },
  mounted() {
    this.cases();
    this.currentUser();
  },
  setup() {
    useMeta({ title: "Кейсы" });
  },
};
</script>
