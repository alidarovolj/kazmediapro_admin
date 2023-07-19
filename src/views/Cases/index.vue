<template>
  <div class=" h-screen" v-if="getCases">
    <div class="container mx-auto px-4 lg:px-0">
      <div class="flex items-center justify-between mb-10">
        <Heading text="Кейсы" />
        <p
          @click="modalState = true"
          class="cursor-pointer bg-mainColor text-white px-4 py-1"
        >
          Создать кейс
        </p>
      </div>
      <Table
        @callToRefresh="cases()"
        :columns="casesColumns"
        :source="getCases"
        :numbered="true"
      >
      </Table>
    </div>
    <Modal
      :isVisible="modalState"
      componentName="CreateCase"
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
  name: "Cases",
  data() {
    return {
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
      ],
    };
  },
  components: {
    Heading,
    Table,
    Modal,
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
    