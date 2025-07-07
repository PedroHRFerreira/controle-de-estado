<script lang="ts">
export default defineComponent({
  name: "MoleculesCard",
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["on-click"],
});
</script>

<template>
  <aside v-for="(card, index) in cards" :key="index">
    <section v-if="!card.remove" class="card">
      <img width="230px" :src="card.image" alt="imagem de um produto" />
      <hr class="card--divider" />
      <div class="card__content">
        <AtomsText size="small" :text="card.title" />
        <AtomsText size="extra-small" :text="card.description" />
        <button
          :class="
            card.disabled
              ? 'card__content--button--disabled'
              : 'card__content--button'
          "
          @click="$emit('on-click', index)"
        >
          <AtomsText size="extra-small" text="Adicionar no carrinho" />
        </button>
      </div>
    </section>
  </aside>
</template>

<style scoped lang="scss">
@use "styles.module.scss" as *;
</style>
