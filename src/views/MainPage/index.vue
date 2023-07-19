<template>
  <div class="h-screen" v-if="getUsers">
    <div class="container mx-auto px-4 lg:px-0">
      <Heading class="mb-10" text="Пользователи" />
      <Table
        @callToRefresh="users()"
        :columns="usersColumns"
        :source="getUsers"
        :numbered="true"
      >
        <template #default="{ row, column }">
          <template v-if="column.fname == 'admin'"
            ><p class="text-green-500 bg-green-500 bg-opacity-10 px-5 py-1 text-center w-max" v-if="row.admin == 1">Да</p>
            <p class="text-red-500 bg-red-500 bg-opacity-10 px-5 py-1 text-center w-max" v-else>Нет</p>
          </template>
        </template>
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
  name: "MainPage",
  data() {
    return {
      usersColumns: [
        {
          name: "ID",
          fname: "id",
        },
        {
          name: "Имя",
          fname: "name",
        },
        {
          name: "Фамилия",
          fname: "lastname",
        },
        {
          name: "Отчество",
          fname: "patro",
        },
        {
          name: "Email",
          fname: "email",
        },
        {
          name: "Создан",
          fname: "created_at",
        },
        {
          name: "Админ",
          fname: "admin",
        },
      ],
    };
  },
  components: {
    Heading,
    Table,
  },
  methods: {
    ...mapActions(["users", "currentUser"]),
  },
  computed: {
    ...mapGetters(["getUsers"]),
  },
  mounted() {
    this.users();
    this.currentUser();
  },
  setup() {
    useMeta({ title: "Главная" });
  },
};
</script>
