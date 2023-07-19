<template>
  <div class="h-screen" v-if="getProjects">
    <div class="container mx-auto px-4 lg:px-0">
      <div class="flex items-center justify-between mb-10">
        <Heading text="Проекты" />
        <p
          @click="modalState = true"
          class="cursor-pointer bg-mainColor text-white px-4 py-1"
        >
          Создать проект
        </p>
      </div>
      <Table
        @callToRefresh="projects()"
        :columns="projectsColumns"
        :source="getProjects"
        :numbered="true"
      >
      </Table>
    </div>
    <Modal
      :isVisible="modalState"
      componentName="CreateProject"
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
  name: "Projects",
  data() {
    return {
      modalState: false,
      projectsColumns: [
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
          name: "Кейс",
          fname: "case_id.name",
        },
        {
          name: "Клиент",
          fname: "client_id.name",
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
    ...mapActions(["projects", "currentUser"]),
  },
  computed: {
    ...mapGetters(["getProjects"]),
  },
  mounted() {
    this.projects();
    this.currentUser();
  },
  setup() {
    useMeta({ title: "Кейсы" });
  },
};
</script>
      