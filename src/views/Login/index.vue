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
        class="w-1/2 mx-auto bg-mainColor text-white p-7 dark:bg-darkerBg dark:text-white"
      >
        <p class="text-2xl font-semibold mb-5">Вход</p>
        <div class="flex justify-center"></div>
        <form action="" @submit.prevent="sendForm">
          <div class="mb-5">
            <input
              class="bg-white dark:text-black border-gray-300 border w-full py-2 px-3"
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
              class="bg-white dark:text-black border-gray-300 border w-full py-2 px-3"
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
          <button
            class="px-14 py-3 w-max mx-auto font-bold bg-secondaryColor text-white block mb-5"
            type="submit"
          >
            <span v-if="!loading">Войти</span>
            <Loader v-else />
          </button>
          <router-link
            :to="{ name: 'Registration' }"
            class="text-secondaryColor block dark:text-secondaryColor text-sm text-center"
          >
            Перейти на страницу регистрации
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
  name: "Login",
  data() {
    return {
      loading: false,
      form: {
        email: null,
        password: null,
      },
    };
  },
  computed: {
    ...mapGetters(["getAuth", "getUser"]),
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
        email: { required, email },
        password: { required },
      },
    };
  },
  methods: {
    ...mapActions(["authUser", "setUser"]),
    async sendForm() {
      this.loading = true;
      this.v$.$validate();

      if (this.v$.$invalid) {
        console.log(this.v$);
        this.loading = false;
        this.notify(false, "Пожалуйста, проверьте заполненность формы");
        return;
      }
      await this.authUser(this.form);
      await this.setUser();

      if (this.getAuth) {
        this.loading = false;
        this.notify(true, "Вы успешно вошли на сайт");
        this.$router.push("/");
      } else {
        this.loading = false;
        this.notify(false, "Email или пароль неверны");
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