import { defineStore } from "pinia";

export const useSalesStore = defineStore("sales", {
  state: () => ({
    cards: [],
    cart: [],
    selectedCard: null,
  }),

  actions: {
    setCards(cards) {
      this.$state.cards = cards;
    },
    setCart(cart) {
      this.$state.cart = cart;
    },
    setSelectedCard(card) {
      this.$state.selectedCard = card;
    },
    async fetchCards() {
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });

      const cards = [
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
      this.setCards(cards);
    },
  },
});
