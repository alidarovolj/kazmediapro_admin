<template>
  <p
    style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
    class=" px-7 py-3 text-base font-bold bg-secondaryColor text-white cursor-pointer w-max"
  >
    {{ text }}
  </p>
</template>

<script>
export default {
  name: "Button",
  props: ["text"],
};
</script>