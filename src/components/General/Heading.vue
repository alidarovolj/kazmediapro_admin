<template>
  <div>
    <h1 class=" text-3xl font-bold dark:text-white">{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: "Heading",
  props: ['text']
};
</script>