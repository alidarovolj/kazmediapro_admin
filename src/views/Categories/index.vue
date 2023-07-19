<template>
  <div class=" h-screen" v-if="getCategories">
    <div class="container mx-auto px-4 lg:px-0">
      <div class="flex items-center justify-between mb-10">
        <Heading text="Категории" />
        <p
          @click="modalState = true"
          class="cursor-pointer bg-mainColor text-white px-4 py-1"
        >
          Создать категорию
        </p>
      </div>
      <Table
        @callToRefresh="categories()"
        :columns="categoriesColumns"
        :source="getCategories"
        :numbered="true"
      >
      </Table>
    </div>
    <Modal
      :isVisible="modalState"
      componentName="CreateCategory"
      @closeModal="(val) => (modalState = val)"
    />
  </div>
</template>
  
  <script>
import { useMeta } from "vue-meta";

import Heading from "@/components/General/Heading.vue";
import Table from "@/components/General/Table.vue";
import Modal from "@/components/General/Modal.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "Categories",
  data() {
    return {
      modalState: false,
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
      ],
    };
  },
  components: {
    Heading,
    Table,
    Modal,
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
  