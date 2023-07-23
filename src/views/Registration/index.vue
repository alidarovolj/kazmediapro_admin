<template>
  <section class="h-screen flex items-center -mt-[144px]">
    <img
      class="dark:hidden block absolute left-1/2 -translate-x-1/2 top-10"
      src="@/assets/img/logo.png"
      alt=""
    />
    <img
      class="dark:block hidden absolute left-1/2 -translate-x-1/2 top-10"
      src="@/assets/img/darkLogo.png"
      alt=""
    />
    <div class="container mx-auto px-4 lg:px-0 dark:text-darkText">
      <div
        class="w-full lg:w-1/2 mt-20 lg:mt-0 mx-auto bg-mainColor text-white p-7 dark:bg-darkerBg dark:text-white"
      >
        <p class="text-2xl font-semibold mb-5">Регистрация</p>
        <div class="flex justify-center"></div>
        <form class="text-black" action="" @submit.prevent="sendForm">
          <div class="flex justify-between">
            <div class="mb-5 w-third">
              <input
                class="bg-white border-gray-300 border w-full dark:text-black py-2 px-3 text-sm"
                :class="{
                  '!border-red-500 border': v$.form.name.$errors.length,
                }"
                v-model="form.name"
                placeholder="Имя"
                type="text"
              />
              <p
                class="text-red-500 text-sm mt-2"
                v-if="v$.form.name.$errors.length"
              >
                Заполните данное поле
              </p>
            </div>
            <div class="mb-5 w-third">
              <input
                class="bg-white border-gray-300 border w-full dark:text-black py-2 px-3 text-sm"
                :class="{
                  '!border-red-500 border': v$.form.lastname.$errors.length,
                }"
                v-model="form.lastname"
                placeholder="Фамилия"
                type="text"
              />
              <p
                class="text-red-500 text-sm mt-2"
                v-if="v$.form.lastname.$errors.length"
              >
                Заполните данное поле
              </p>
            </div>
            <div class="mb-5 w-third">
              <input
                class="bg-white border-gray-300 border w-full dark:text-black py-2 px-3 text-sm"
                :class="{
                  '!border-red-500 border': v$.form.patro.$errors.length,
                }"
                v-model="form.patro"
                placeholder="Отчество"
                type="text"
              />
              <p
                class="text-red-500 text-sm mt-2"
                v-if="v$.form.patro.$errors.length"
              >
                Заполните данное поле
              </p>
            </div>
          </div>
          <div class="mb-5">
            <input
              class="bg-white border-gray-300 border w-full dark:text-black py-2 px-3 text-sm"
              :class="{
                '!border-red-500 border': v$.form.email.$errors.length,
              }"
              v-model="form.email"
              placeholder="Введите email"
              type="text"
            />
            <p
              class="text-red-500 text-sm mt-2"
              v-if="v$.form.email.$errors.length"
            >
              Заполните данное поле
            </p>
          </div>
          <div class="mb-5">
            <input
              class="bg-white border-gray-300 border w-full dark:text-black py-2 px-3 text-sm"
              v-mask="'+7(###) ###-##-##'"
              :class="{
                '!border-red-500 border': v$.form.phone.$errors.length,
              }"
              v-model="form.phone"
              placeholder="+7 (777) 777-77-77"
              type="text"
            />
            <p
              class="text-red-500 text-sm mt-2"
              v-if="v$.form.phone.$errors.length"
            >
              Заполните данное поле
            </p>
          </div>
          <div class="mb-5">
            <input
              class="bg-white border-gray-300 border w-full dark:text-black py-2 px-3 text-sm"
              :class="{
                '!border-red-500 border': v$.form.password.$errors.length,
              }"
              v-model="form.password"
              placeholder="Введите пароль"
              type="password"
            />
            <p
              class="text-red-500 text-sm mt-2"
              v-if="v$.form.password.$errors.length"
            >
              Заполните данное поле
            </p>
          </div>
          <div class="mb-5">
            <input
              class="bg-white border-gray-300 border w-full dark:text-black py-2 px-3 text-sm"
              :class="{
                '!border-red-500 border':
                  v$.form.password_confirmation.$errors.length,
              }"
              v-model="form.password_confirmation"
              placeholder="Подтвердите пароль"
              type="password"
            />
            <p
              class="text-red-500 text-sm mt-2"
              v-if="v$.form.password_confirmation.$errors.length"
            >
              Заполните данное поле
            </p>
          </div>
          <button
            class="px-14 py-3 w-max mx-auto font-bold bg-secondaryColor text-white block mb-5"
            type="submit"
          >
            <span v-if="!loading">Зарегистрироваться</span>
            <Loader v-else />
          </button>
          <router-link
            :to="{ name: 'Login' }"
            class="text-secondaryColor block dark:text-secondaryColor text-sm text-center"
          >
            Перейти на страницу входа
          </router-link>
        </form>
      </div>
    </div>
  </section>
</template>
  
  <script>
import { mask } from "vue-the-mask";
import { toast } from "vue3-toastify";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

import Loader from "@/components/General/Loader.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Registration",
  data() {
    return {
      loading: false,
      form: {
        name: null,
        lastname: null,
        patro: null,
        phone: null,
        email: null,
        password: null,
        password_confirmation: null,
      },
    };
  },
  computed: {
    ...mapGetters(["getRegistration"]),
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
        name: { required },
        lastname: { required },
        patro: { required },
        phone: { required },
        email: { required, email },
        password: { required },
        password_confirmation: { required },
      },
    };
  },
  methods: {
    ...mapActions(["registration"]),
    async sendForm() {
      this.loading = true;
      this.v$.$validate();

      if (this.v$.$invalid) {
        console.log(this.v$);
        this.loading = false;
        this.notify(false, "Пожалуйста, проверьте заполненность формы");
        return;
      }
      await this.registration(this.form);

      if (this.getRegistration.success == true) {
        this.loading = false;
        this.$router.push({ name: "Login" });
        this.notify(true, "Вы успешно зарегистрированы!");
      } else {
        this.loading = false;
        this.notify(false, this.getRegistration.error);
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