<template>
  <div class="text-sm">
    <div class="mb-3 lg:mb-0 lg:w-full">
      <h2 class="text-center text-2xl font-medium mb-4 dark:text-darkText">
        Добавить проект
      </h2>
    </div>
    <div v-if="getClients && getCases" class="flex flex-col">
      <form action="" @submit.prevent="createProjectLocal">
        <div class="flex flex-col mb-5">
          <input
            v-model="form.name"
            type="text"
            class="py-2 pl-4 pr-2.5 bg-white border border-solid border-[#D8D6DE] dark:bg-darkBg dark:text-darkText"
            :class="{ 'border-red-500': this.v$.form.name.$error }"
            placeholder="Название проекта"
          />
        </div>
        <div class="flex flex-col mb-5">
          <textarea
            v-model="form.description"
            type="text"
            class="py-2 pl-4 pr-2.5 bg-white border border-solid border-[#D8D6DE] dark:bg-darkBg dark:text-darkText"
            :class="{ 'border-red-500': this.v$.form.description.$error }"
            placeholder="Описание проекта"
          />
        </div>
        <div class="flex flex-col mb-5">
          <input
            type="file"
            accept="image/*"
            multiple
            @change="handleImageUpload"
          />
        </div>
        <div v-if="form.images.length > 0" class="flex flex-col mb-5">
          <div class="flex overflow-x-auto">
            <img
              @click="removeImage(index)"
              v-for="(image, index) of form.images"
              :key="index"
              class="cursor-pointer w-48 mr-2 p-2 border h-48 object-cover object-top"
              :src="image"
              alt=""
            />
          </div>
        </div>
        <div v-else class="mb-5">
          <p :class="{ 'text-red-500': this.v$.form.images.$error }">
            В данный момент картинки все еще не загружены
          </p>
        </div>
        <div class="flex flex-col mb-5">
          <select
            v-model="form.case_id"
            class="py-2 pl-4 pr-2.5 bg-white border border-solid border-[#D8D6DE] dark:bg-darkBg dark:text-darkText"
            :class="{ 'border-red-500': this.v$.form.case_id.$error }"
          >
            <option :value="null">Выберите кейс</option>
            <option
              v-for="(item, index) of getCases.data"
              :key="index"
              :value="item.id"
            >
              {{ item.name }}
            </option>
          </select>
        </div>
        <div class="flex flex-col mb-5">
          <select
            v-model="form.client_id"
            class="py-2 pl-4 pr-2.5 bg-white border border-solid border-[#D8D6DE] dark:bg-darkBg dark:text-darkText"
            :class="{ 'border-red-500': this.v$.form.client_id.$error }"
          >
            <option :value="null">Выберите клиента</option>
            <option
              v-for="(item, index) of getClients.data"
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
  name: "CreateProject",
  data() {
    return {
      loading: false,
      errorResponse: [],
      form: {
        name: "",
        description: "",
        images: [],
        case_id: null,
        client_id: null,
      },
    };
  },
  validations() {
    return {
      form: {
        name: { required },
        description: { required },
        case_id: { required },
        client_id: { required },
        images: { required },
      },
    };
  },
  methods: {
    ...mapActions(["createProject", "projects", "clients", "cases"]),
    handleImageUpload(event) {
      const files = event.target.files;
      if (files.length > 0) {
        // Loop through the selected files
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          this.readFileAsBase64(file);
        }
      }
    },

    readFileAsBase64(file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64String = event.target.result;
        // Concatenate the new base64String to the existing images array
        this.form.images = this.form.images.concat(base64String);
      };
      reader.readAsDataURL(file);
    },
    removeImage(index) {
      this.form.images.splice(index, 1);
    },
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
    async createProjectLocal() {
      this.loading = true;
      this.v$.$validate();

      if (this.v$.$invalid) {
        this.loading = false;
        this.notify(false, "Не все поля заполнены");
        return;
      }

      await this.createProject(this.form);
      if (this.getCreatedProject.success == true) {
        this.projects();
        this.loading = false;
        this.notify(true, "Проект успешно создан");
        this.closeModal();
        this.clearModal();
      } else {
        this.loading = false;
        this.notify(false, "Произошла ошибка");
      }
    },
  },
  computed: {
    ...mapGetters(["getCreatedProject", "getClients", "getCases"]),
  },
  mounted() {
    this.clients();
    this.cases();
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
