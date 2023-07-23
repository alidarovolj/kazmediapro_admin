<template>
  <div class="text-sm">
    <div class="mb-3 lg:mb-0 lg:w-full">
      <h2 class="text-center text-2xl font-medium mb-4 dark:text-darkText">
        Редактирование кейса
      </h2>
    </div>
    <div v-if="getCategories" class="flex flex-col">
      <form action="" @submit.prevent="updateCaseLocal">
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
            <p v-if="loading == false">Подтвердить редактирование</p>
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
  name: "updateCase",
  data() {
    return {
      loading: false,
      form: {
        id: null,
        name: "",
        description: "",
        images: [],
        category_id: null,
      },
    };
  },
  props: {
    tranID: {
      type: Object,
      required: true,
    },
  },
  validations() {
    return {
      form: {
        id: { required },
        name: { required },
        description: { required },
        category_id: { required },
        images: { required },
      },
    };
  },
  methods: {
    ...mapActions(["updateCase", "cases", "categories"]),
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
        this.form.images = this.form.images.concat(base64String);
      };
      reader.readAsDataURL(file);
    },
    removeImage(index) {
      this.form.images.splice(index, 1);
    },
    clearModal() {
      this.form = {
        id: null,
        name: "",
        description: "",
        category_id: "",
        images: [],
      };
    },
    closeModal() {
      this.$emit("requestToClose", false);
    },
    async updateCaseLocal() {
      this.loading = true;
      this.v$.$validate();

      if (this.v$.$invalid) {
        this.loading = false;
        this.notify(false, "Не все поля заполнены");
        return;
      }

      await this.updateCase(this.form);
      if (this.getUpdatedCase.success == true) {
        this.cases();
        this.loading = false;
        this.notify(true, "Кейс успешно отредактирован");
        this.closeModal();
        this.clearModal();
      } else {
        this.loading = false;
        this.notify(false, "Произошла ошибка");
      }
    },
  },
  computed: {
    ...mapGetters(["getUpdatedCase", "getCategories"]),
  },
  async mounted() {
    await this.categories();
    this.form.id = this.tranID.id;
    this.form.name = this.tranID.name;
    this.form.description = this.tranID.description;
    this.form.images = this.tranID.images;
    this.form.category_id = this.tranID.category_id.id;
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
