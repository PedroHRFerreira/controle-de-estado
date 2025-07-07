<script lang="ts">
export default defineComponent({
  name: "OrganismsSales",
  setup() {
    const cards = computed(() => {
      return [
        {
          title: "Card Title",
          description:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          image: "/images/sales.jpeg",
          disabled: false,
        },
        {
          title: "Card Title",
          description:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          image: "/images/sales.jpeg",
          disabled: true,
        },
      ];
    });

    return {
      cards,
    };
  },
});
</script>

<template>
  <article>
    <MoleculesCard
      :cards="cards"
      @on-click="() => console.log('Card clicked')"
    />
  </article>
</template>

<style scoped lang="scss">
@use "styles.module.scss" as *;
</style>
