<template>
  <div class="text-sm">
    <div class="mb-3 lg:mb-0 lg:w-full">
      <h2 class="text-center text-2xl font-medium mb-4 dark:text-darkText">
        Добавить клиента
      </h2>
    </div>
    <!-- <p class="text-center mb-5 text-[#6E6B7B] dark:text-darkText">
      Клиенты, которые вы можете использовать и назначать своим кейсам
    </p> -->
    <div class="flex flex-col">
      <form action="" @submit.prevent="createClientLocal">
        <div class="flex flex-col mb-5">
          <input
            v-model="form.name"
            type="text"
            class="py-2 pl-4 pr-2.5 bg-white border border-solid border-[#D8D6DE] dark:bg-darkBg dark:text-darkText"
            :class="{ 'border-red-500': this.v$.form.name.$error }"
            placeholder="Название клиента"
          />
        </div>
        <div class="flex justify-center text-sm">
          <div
            @click="closeModal"
            class="w-max border border-secondaryColor text-secondaryColor mr-3 flex items-center px-5 py-2 cursor-pointer"
          >
            <p>Отменить</p>
          </div>
          <button
            type="submit"
            class="w-max px-6 py-2.5 text-center bg-secondaryColor dark:bg-secondaryColor text-white cursor-pointer"
          >
            <p v-if="loading == false">Создать клиента</p>
            <div class="flex items-center" v-else>
              <p class="spinner mr-2"></p>
              Подождите
            </div>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
    
    <script>
import { mapActions, mapGetters } from "vuex";
import { toast } from "vue3-toastify";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

import "vue3-toastify/dist/index.css";

export default {
  name: "CreateClient",
  data() {
    return {
      loading: false,
      errorResponse: [],
      form: {
        name: "",
      },
    };
  },
  validations() {
    return {
      form: {
        name: { required },
      },
    };
  },
  methods: {
    ...mapActions(["createClient", "clients"]),
    clearModal() {
      this.form = {
        name: "",
      };
    },
    closeModal() {
      this.$emit("requestToClose", false);
    },
    async createClientLocal() {
      this.loading = true;
      this.v$.$validate();

      if (this.v$.$invalid) {
        this.loading = false;
        this.notify(false, "Не все поля заполнены");
        return;
      }

      await this.createClient(this.form);
      if (this.getCreatedClient.success == true) {
        this.clients();
        this.loading = false;
        this.notify(true, "Клиент успешно создан");
        this.closeModal();
        this.clearModal();
      } else {
        this.loading = false;
        this.notify(false, "Произошла ошибка");
      }
    },
  },
  computed: {
    ...mapGetters(["getCreatedClient"]),
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
      v$: useVuelidate(),
      notify,
    };
  },
};
</script>
    