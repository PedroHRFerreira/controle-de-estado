<script lang="ts">
import { useSalesStore } from "~/store/sales/useSalesStore";
export default defineComponent({
  name: "OrganismsSales",
  setup() {
    const store = useSalesStore();
    const cards = computed(() => store.cards);
    const count = computed(() => store.cart.length);
    const loading = computed(() => store.loading);

    const handleDisableAll = (index: number) => {
      const selectedCard = store.cards[index];
      store.disableCardByIndex(index);
      store.addToCart(selectedCard);
    };

    onMounted(() => {
      store.fetchCards();
    });

    return {
      cards,
      count,
      handleDisableAll,
      loading,
    };
  },
});
</script>

<template>
  <article class="ecommerce">
    <div v-show="loading" class="loading-overlay">
      <div class="loading-content">
        <AtomsText size="large" text="Carregando produtos..." />
      </div>
    </div>

    <header v-show="!loading" class="ecommerce__header">
      <div class="ecommerce__header-content">
        <AtomsText size="extra-large" text="E-commerce" />
        <div class="ecommerce__header-content--actions">
          <img
            src="/images/carrinho-de-compras.png"
            width="32px"
            height="32px"
            alt="imagem de um carrinho"
          />
          <div class="ecommerce__header-content--actions--count">
            <AtomsText size="extra-small" :text="String(count)" />
          </div>
        </div>
      </div>
    </header>

    <section class="ecommerce__sales">
      <MoleculesCard :cards="cards" @on-click="handleDisableAll" />
    </section>
  </article>
</template>

<style scoped lang="scss">
@use "styles.module.scss" as *;
</style>
