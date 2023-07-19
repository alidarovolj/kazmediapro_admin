<template>
  <div class="text-sm">
    <div class="mb-3 lg:mb-0 lg:w-full">
      <h2 class="text-center text-2xl font-medium mb-4 dark:text-darkText">
        Добавить кейс
      </h2>
    </div>
    <div v-if="getCategories" class="flex flex-col">
      <form action="" @submit.prevent="createCaseLocal">
        <div class="flex flex-col mb-5">
          <input
            v-model="form.name"
            type="text"
            class="py-2 pl-4 pr-2.5 bg-white border border-solid border-[#D8D6DE] dark:bg-darkBg dark:text-darkText"
            :class="{ 'border-red-500': this.v$.form.name.$error }"
            placeholder="Название кейса"
          />
        </div>
        <div class="flex flex-col mb-5">
          <textarea
            v-model="form.description"
            type="text"
            class="py-2 pl-4 pr-2.5 bg-white border border-solid border-[#D8D6DE] dark:bg-darkBg dark:text-darkText"
            :class="{ 'border-red-500': this.v$.form.description.$error }"
            placeholder="Описание кейса"
          />
        </div>
        <div class="flex flex-col mb-5">
          <select
            v-model="form.category_id"
            class="py-2 pl-4 pr-2.5 bg-white border border-solid border-[#D8D6DE] dark:bg-darkBg dark:text-darkText"
            :class="{ 'border-red-500': this.v$.form.category_id.$error }"
          >
            <option :value="null">Выберите категорию</option>
            <option
              v-for="(item, index) of getCategories.data"
              :key="index"
              :value="item.id"
            >
              {{ item.name }}
            </option>
          </select>
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
            <p v-if="loading == false">Создать кейс</p>
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
  name: "PermissionAdd",
  data() {
    return {
      loading: false,
      errorResponse: [],
      form: {
        name: "",
        description: "",
        images: [
          "https://m.media-amazon.com/images/I/719nhErutkL._AC_UF1000,1000_QL80_.jpg",
          "https://object.pscloud.io/cms/cms/Photo/img_0_484_527_4_6.png",
        ],
        category_id: null,
      },
    };
  },
  validations() {
    return {
      form: {
        name: { required },
        description: { required },
        category_id: { required },
      },
    };
  },
  methods: {
    ...mapActions(["createCase", "cases", "categories"]),
    clearModal() {
      this.form = {
        name: "",
        description: "",
        category_id: "",
      };
    },
    closeModal() {
      this.$emit("requestToClose", false);
    },
    async createCaseLocal() {
      this.loading = true;
      this.v$.$validate();

      if (this.v$.$invalid) {
        this.loading = false;
        this.notify(false, "Не все поля заполнены");
        return;
      }

      await this.createCase(this.form);
      if (this.getCreatedCase.success == true) {
        this.cases();
        this.loading = false;
        this.notify(true, "Кейс успешно создан");
        this.closeModal();
        this.clearModal();
      } else {
        this.loading = false;
        this.notify(false, "Произошла ошибка");
      }
    },
  },
  computed: {
    ...mapGetters(["getCreatedCase", "getCategories"]),
  },
  mounted() {
    this.categories();
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
    