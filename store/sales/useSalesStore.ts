import { defineStore } from "pinia";

export const useSalesStore = defineStore("sales", {
  state: () => ({
    cards: [],
    selectedCard: null,
  }),
});
