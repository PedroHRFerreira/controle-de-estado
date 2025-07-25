import { defineStore } from "pinia";

export const useSalesStore = defineStore("sales", {
  state: () => ({
    cards: [],
    cart: [],
    loading: true,
  }),

  actions: {
    setCards(cards) {
      this.$state.cards = cards;
    },
    setCart(cart) {
      this.$state.cart = cart;
    },
    addToCart(card) {
      this.cart.push(card);
    },
    disableCardByIndex(index: number) {
      this.cards[index].delete = true;
      this.cards[index].remove = true;
    },
    async fetchCards() {
      this.loading = true;
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });

      const cards = [
        {
          title: "Card Title",
          description:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          image: "/images/sales.jpeg",
          delete: false,
          remove: false,
        },
        {
          title: "Card Title",
          description:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          image: "/images/sales.jpeg",
          delete: false,
          remove: false,
        },
        {
          title: "Card Title",
          description:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          image: "/images/sales.jpeg",
          delete: false,
          remove: false,
        },
        {
          title: "Card Title",
          description:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          image: "/images/sales.jpeg",
          delete: false,
          remove: false,
        },
        {
          title: "Card Title",
          description:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          image: "/images/sales.jpeg",
          delete: false,
          remove: false,
        },
        {
          title: "Card Title",
          description:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          image: "/images/sales.jpeg",
          delete: false,
          remove: false,
        },
        {
          title: "Card Title",
          description:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          image: "/images/sales.jpeg",
          delete: false,
          remove: false,
        },
        {
          title: "Card Title",
          description:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          image: "/images/sales.jpeg",
          delete: false,
          remove: false,
        },
        {
          title: "Card Title",
          description:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          image: "/images/sales.jpeg",
          delete: false,
          remove: false,
        },
        {
          title: "Card Title",
          description:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          image: "/images/sales.jpeg",
          delete: false,
          remove: false,
        },
      ];
      this.setCards(cards);
      this.loading = false;
    },
  },
});
