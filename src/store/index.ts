import { defineStore } from "pinia";
import { Column } from "../types/Columns";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    rowCount: 1 as number,
    columns: [] as Column[],
  }),
  getters: {},
  actions: {
    setRowCount(count: number) {
      this.rowCount = count;
    },
    setColumns(columns: Column[]) {
      this.columns = columns;
    },
  },
});
