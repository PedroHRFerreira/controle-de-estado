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
          remove: false,
        },
        {
          title: "Card Title",
          description:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          image: "/images/sales.jpeg",
          disabled: true,
          remove: false,
        },
        {
          title: "Card Title",
          description:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          image: "/images/sales.jpeg",
          disabled: false,
          remove: false,
        },
        {
          title: "Card Title",
          description:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          image: "/images/sales.jpeg",
          disabled: true,
          remove: false,
        },
        {
          title: "Card Title",
          description:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          image: "/images/sales.jpeg",
          disabled: false,
          remove: false,
        },
        {
          title: "Card Title",
          description:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          image: "/images/sales.jpeg",
          disabled: true,
          remove: false,
        },
        {
          title: "Card Title",
          description:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          image: "/images/sales.jpeg",
          disabled: false,
          remove: false,
        },
        {
          title: "Card Title",
          description:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          image: "/images/sales.jpeg",
          disabled: true,
          remove: false,
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
  <article class="ecommerce">
    <header class="ecommerce__header">
      <div class="ecommerce__header-content">
        <AtomsText size="extra-large" text="E-commerce" />
        <div class="ecommerce__header-content--actions">
          <AtomsText size="large" text="Produtos no carrinho:" />
          <AtomsText size="medium" :text="count || 0" />
        </div>
      </div>
    </header>

    <section class="ecommerce__sales">
      <MoleculesCard :cards="cards" />
    </section>
  </article>
</template>

<style scoped lang="scss">
@use "styles.module.scss" as *;
</style>
