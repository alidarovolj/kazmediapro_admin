<template>
  <div ref="contacts" id="contacts" class="py-14 lg:py-40 relative dark:bg-darkBg dark:text-white">
    <img
      class="absolute left-0 dark:hidden top-0 w-full h-full object-cover"
      src="@/assets/img/bg.png"
      alt=""
    />
    <div class="relative z-10 container mx-auto px-4 lg:px-0">
      <div class="block lg:flex items-center justify-between">
        <div class="w-full lg:w-half mb-6 lg:mb-0">
          <p class=" text-2xl lg:text-[3.375rem] font-bold uppercase mb-6 leading-none">
            {{ $t('mainPage.contacts.header') }}
          </p> 
          <p class="text-sm lg:text-lg w-full lg:w-2/3">
            {{ $t('mainPage.contacts.content') }}
          </p>
        </div>
        <SendMessage class="w-full lg:w-2/5" />
      </div>
    </div>
  </div>
</template>

<script>
import SendMessage from "@/components/SendMessage.vue";

export default {
  name: "Message",
  components: {
    SendMessage,
  },
};
</script>
