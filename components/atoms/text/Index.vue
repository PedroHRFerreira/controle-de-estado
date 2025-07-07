<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AtomsText",
  props: {
    size: {
      type: String,
      default: "large",
      validator: (value: string) =>
        ["extra-large", "large", "medium", "small", "extra-small"].includes(
          value
        ),
    },
    types: {
      type: String,
      default: "dark",
      validator: (value: string) =>
        ["default", "primary", "dark"].includes(value),
    },
    text: {
      type: String,
      default: "Title and Paragraph",
    },
  },
  emits: ["onclick"],
  setup(_, { emit }) {
    const titleOnClick = () => {
      emit("onclick");
    };

    return {
      titleOnClick,
    };
  },
});
</script>

<template>
  <h1 class="type-text" :class="[size, types]" @click="titleOnClick">
    {{ text }}
  </h1>
</template>

<style scoped lang="scss">
@use "styles.module.scss" as *;
</style>
