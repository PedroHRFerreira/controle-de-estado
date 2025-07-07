<script lang="ts">
export default defineComponent({
  name: "MoleculesCard",
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
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
