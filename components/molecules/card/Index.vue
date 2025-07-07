<script lang="ts">
export default defineComponent({
  name: "MoleculesCard",
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
  <aside v-for="(card, index) in cards" :key="index" class="card">
    <img :src="card.image" alt="imagem de um produto" />
    <hr class="card--divider" />
    <div class="card__content">
      <AtomsText size="medium" :text="card.title" />
      <AtomsText size="extra-small" :text="card.description" />
      <button
        :class="
          card.disabled
            ? 'card__content--button--disabled'
            : 'card__content--button'
        "
        @click="$emit('on-click')"
      >
        <AtomsText size="extra-small" text="Adicionar no carrinho" />
      </button>
    </div>
  </aside>
</template>

<style scoped lang="scss">
@use "styles.module.scss" as *;
</style>
