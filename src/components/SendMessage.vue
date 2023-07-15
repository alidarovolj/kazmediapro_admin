<template>
  <div>
    <form
      action=""
      @submit.prevent="sendForm"
      class="bg-mainColor dark:bg-darkBg py-6 px-6 lg:px-12"
    >
      <p class="text-[1.375rem] font-bold mb-1 text-center text-white">
        Оставьте заявку
      </p>
      <p class="text-white text-sm text-center mb-[1.563rem]">
        Мы свяжемся с Вами в ближайшее время
      </p>
      <div class="mb-2">
        <label class="block mb-1 text-white text-xs pl-3" for=""
          >Направление*</label
        >
        <input
          class="py-2 px-3 w-full"
          :class="{
            'border border-red-500': v$.form.direction.$errors.length,
          }"
          v-model="form.direction"
          placeholder="Производство ПОСМ"
          type="text"
        />
        <p
          class="text-red-500 text-sm mt-2"
          v-if="v$.form.direction.$errors.length"
        >
          Ввод направления не заполнен
        </p>
      </div>
      <div class="mb-2">
        <label class="block mb-1 text-white text-xs pl-3" for="">Имя*</label>
        <input
          class="py-2 px-3 w-full"
          :class="{
            'border border-red-500': v$.form.name.$errors.length,
          }"
          v-model="form.name"
          placeholder="Иван Иванов"
          type="text"
        />
        <p class="text-red-500 text-sm mt-2" v-if="v$.form.name.$errors.length">
          Ввод имени не заполнен
        </p>
      </div>
      <div class="mb-2">
        <label class="block mb-1 text-white text-xs pl-3" for="">Email*</label>
        <input
          class="py-2 px-3 w-full"
          :class="{
            'border border-red-500': v$.form.email.$errors.length,
          }"
          v-model="form.email"
          placeholder="i.ivanov@gmail.com"
          type="text"
        />
        <p
          class="text-red-500 text-sm mt-2"
          v-if="v$.form.email.$errors.length"
        >
          Ввод email не заполнен
        </p>
      </div>
      <div class="mb-2">
        <label class="block mb-1 text-white text-xs pl-3" for=""
          >Телефон*</label
        >
        <input
          class="py-2 px-3 w-full"
          :class="{
            'border border-red-500': v$.form.phone.$errors.length,
          }"
          v-model="form.phone"
          v-mask="'+7(###) ###-##-##'"
          placeholder="+7 (777) 777-77-77"
          type="text"
        />
        <p
          class="text-red-500 text-sm mt-2"
          v-if="v$.form.phone.$errors.length"
        >
          Ввод телефона не заполнен
        </p>
      </div>
      <div class="mb-5">
        <label class="block mb-1 text-white text-xs pl-3" for=""
          >Краткое описание задачи</label
        >
        <textarea
          class="py-2 px-3 w-full"
          :class="{
            'border border-red-500': v$.form.phone.$errors.length,
          }"
          v-model="form.note"
          placeholder="Введите текст"
        />
      </div>
      <button
        style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        class="px-14 py-3 w-max mx-auto font-bold bg-secondaryColor text-white block"
        type="submit"
      >
        <span v-if="!loading">Отправить</span>
        <Loader v-else />
      </button>
    </form>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
import { toast } from "vue3-toastify";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

import Loader from "@/components/General/Loader.vue";

export default {
  name: "SendMessage",
  data() {
    return {
      loading: false,
      form: {
        direction: null,
        name: null,
        email: null,
        phone: null,
        note: null,
      },
    };
  },
  components: {
    Loader,
  },
  directives: {
    mask,
  },
  validations() {
    return {
      form: {
        direction: { required },
        name: { required },
        email: { required, email },
        phone: { required },
      },
    };
  },
  methods: {
    sendForm() {
      this.loading = true;
      this.v$.$validate();

      if (this.v$.$invalid) {
        this.loading = false;
        this.notify(false, "Пожалуйста, проверьте заполненность формы");
        return;
      }
    },
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
