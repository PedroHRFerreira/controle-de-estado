<script lang="ts">
import { useSalesStore } from "~/store/sales/useSalesStore";
export default defineComponent({
  name: "OrganismsSales",
  setup() {
    const store = useSalesStore();
    const cards = computed(() => store.cards);
    const count = computed(() => store.cart.length);

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
