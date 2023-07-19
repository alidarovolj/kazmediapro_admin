<template>
  <div class="h-screen" v-if="getMessages">
    <div class="container mx-auto px-4 lg:px-0">
      <Heading class="mb-10" text="Сообщения" />
      <Table
        @callToRefresh="messages()"
        :columns="messagesColumns"
        :source="getMessages"
        :numbered="true"
      >
      </Table>
    </div>
  </div>
</template>
    
    <script>
import { useMeta } from "vue-meta";

import Heading from "@/components/General/Heading.vue";
import Table from "@/components/General/Table.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Messages",
  data() {
    return {
      messagesColumns: [
        {
          name: "ID",
          fname: "id",
        },
        {
          name: "Направление",
          fname: "direction",
        },
        {
          name: "Имя",
          fname: "name",
        },
        {
          name: "Email",
          fname: "email",
        },
        {
          name: "Телефон",
          fname: "phone",
        },
        {
          name: "Примечание",
          fname: "note",
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
  },
  methods: {
    ...mapActions(["messages", "currentUser"]),
  },
  computed: {
    ...mapGetters(["getMessages"]),
  },
  mounted() {
    this.messages();
    this.currentUser();
  },
  setup() {
    useMeta({ title: "Сообщения" });
  },
};
</script>
    