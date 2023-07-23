<template>
  <div class="h-screen">
    <div class="container mx-auto px-4 lg:px-0" v-if="getUsers">
      <Heading class="mb-10" text="Пользователи" />
      <div class="max-h-[700px] overflow-y-auto">
        <Table
          @callToRefresh="users()"
          :columns="usersColumns"
          :source="getUsers"
          :numbered="true"
        >
          <template #default="{ row, column }">
            <template v-if="column.fname == 'admin'"
              ><p
                class="text-green-500 bg-green-500 bg-opacity-10 px-5 py-1 text-center w-max"
                v-if="row.admin == 1"
              >
                Да
              </p>
              <p
                class="text-red-500 bg-red-500 bg-opacity-10 px-5 py-1 text-center w-max"
                v-else
              >
                Нет
              </p>
            </template>
          </template>
        </Table>
      </div>
      <div v-if="getUsers.data" class="flex justify-end mt-3 text-sm font-bold">
        <p>Всего пользователей: {{ getUsers.data.length }}</p>
      </div>
    </div>
    <LoaderTable v-else />
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import { mapActions, mapGetters } from "vuex";

import Heading from "@/components/General/Heading.vue";
import Table from "@/components/General/Table.vue";
import LoaderTable from "@/components/General/LoaderTable.vue";

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
    LoaderTable,
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
