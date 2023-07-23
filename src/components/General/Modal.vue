<template>
  <div v-if="isVisible">
    <div class="h-screen lg:h-full relative z-[1000]">
      <div
        @click="closeModal"
        class="bg-black hidden lg:block fixed left-0 top-0 w-full h-full opacity-30"
      ></div>
      <div
        :class="{ '!p-0': componentName == 'AssignCourier' }"
        class="fixed w-full lg:w-[800px] rounded-md bg-white dark:bg-darkerBg text-black dark:text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 py-4 px-4 h-full lg:h-auto z-40"
      >
        <div
          @click="closeModal"
          class="absolute right-0 top-0 lg:translate-x-1/2 lg:-translate-y-1/2 bg-white dark:bg-darkBg rounded-md lg:shadow-md flex justify-center items-center cursor-pointer w-8 h-8"
        >
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </div>
        <component
          @requestToClose="closeModal"
          :tranID="recID"
          :is="componentName"
          @sendAddId="accData"
        >
          <slot />
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import CreateCategory from "@/components/Modals/CreateCategory.vue";
import CreateCase from "@/components/Modals/CreateCase.vue";
import CreateClient from "@/components/Modals/CreateClient.vue";
import CreateProject from "@/components/Modals/CreateProject.vue";
import RemoveCategory from "@/components/Modals/RemoveCategory.vue";
import RemoveCase from "@/components/Modals/RemoveCase.vue";
import RemoveProject from "@/components/Modals/RemoveProject.vue";
import RemoveClient from "@/components/Modals/RemoveClient.vue";
import EditCategory from "@/components/Modals/EditCategory.vue";
import EditClient from "@/components/Modals/EditClient.vue";
import EditCase from "@/components/Modals/EditCase.vue";
import EditProject from "@/components/Modals/EditProject.vue";

export default {
  name: "ModalSlot",
  emits: ["requestToClose", "sendAddId", "closeModal"],
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    componentName: {
      type: String,
      required: true,
    },
    recID: {
      type: Number,
      required: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal", false);
    },
    accData(val) {
      this.$emit("accData", val);
    },
  },
  components: {
    CreateCategory,
    CreateCase,
    CreateClient,
    CreateProject,
    RemoveCategory,
    RemoveCase,
    RemoveProject,
    RemoveClient,
    EditCategory,
    EditClient,
    EditCase,
    EditProject,
  },
};
</script>
