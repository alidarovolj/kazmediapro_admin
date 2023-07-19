<template>
  <div class="h-screen" v-if="getClients">
    <div class="container mx-auto px-4 lg:px-0">
      <div class="flex items-center justify-between mb-10">
        <Heading text="Клиенты" />
        <p
          @click="modalState = true"
          class="cursor-pointer bg-mainColor text-white px-4 py-1"
        >
          Создать клиента
        </p>
      </div>
      <Table
        @callToRefresh="clients()"
        :columns="clientsColumns"
        :source="getClients"
        :numbered="true"
      >
      </Table>
    </div>
    <Modal
      :isVisible="modalState"
      componentName="CreateClient"
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
  name: "Clients",
  data() {
    return {
      modalState: false,
      clientsColumns: [
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
    ...mapActions(["clients", "currentUser"]),
  },
  computed: {
    ...mapGetters(["getClients"]),
  },
  mounted() {
    this.clients();
    this.currentUser();
  },
  setup() {
    useMeta({ title: "Клиенты" });
  },
};
</script>
        