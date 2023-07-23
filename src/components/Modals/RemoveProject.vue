<template>
  <div>
    <div class="mb-3 lg:mb-5 lg:w-full">
      <h2 class="text-center text-2xl mb-5 font-medium dark:text-darkText">
        Подтвердите удаление
      </h2>
      <p class="text-sm text-center">
        Вы уверены что хотите удалить данный проект? Вы больше не сможете
        восстановить эти данные.
      </p>
    </div>
    <div class="flex flex-col">
      <div class="flex justify-center text-sm">
        <div
          @click="closeModal"
          class="w-max mr-3 flex items-center rounded-md px-5 py-2 cursor-pointer"
        >
          <p>Отменить</p>
        </div>
        <button
          type="submit"
          class="w-max px-6 py-2.5 rounded-md text-center bg-red-500 dark:bg-secondaryColor text-white cursor-pointer"
          @click="removeProjectLocal()"
        >
          <p v-if="loading == false">Удалить</p>
          <div class="flex items-center" v-else>
            <p class="spinner mr-2"></p>
            Подождите
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { toast } from "vue3-toastify";

import "vue3-toastify/dist/index.css";

export default {
  name: "RemoveProject",
  props: ["tranID"],
  data() {
    return {
      loading: false,
      form: {
        id: this.tranID,
      },
    };
  },
  methods: {
    ...mapActions(["projects", "removeProject"]),
    async removeProjectLocal() {
      this.loading = true;

      await this.removeProject(this.form);
      if (this.getRemovedProject) {
        this.loading = false;
        this.projects();
        this.notify(true, "Проект удален");
        this.closeModal();
      }
    },
    closeModal() {
      this.$emit("requestToClose", false);
    },
  },
  computed: {
    ...mapGetters(["getProjects", "getRemovedProject"]),
  },
  setup() {
    const notify = (toastState, toastText) => {
      if (toastState) {
        toast.success(toastText, {
          autoClose: 2000,
        });
      } else {
        toast.error(toastText, {
          autoClose: 2000,
        });
      }
    };
    return {
      notify,
    };
  },
};
</script>
