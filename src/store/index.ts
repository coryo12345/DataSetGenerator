import { defineStore } from "pinia";
import { Column } from "../types/Columns";
import { DataType, definedTypes, EDataType } from "../types/DataTypes";

export type RootState = {
  rowCount: number;
  columns: Column[];
};

export const useDataStore = defineStore({
  id: "dataStore",
  state: () =>
    ({
      rowCount: 5 as number,
      columns: [
        new Column(
          definedTypes.find((x) => x.ftype === EDataType.fullName) as DataType,
          "Name"
        ),
        new Column(
          definedTypes.find(
            (x) => x.ftype === EDataType.streetAddress
          ) as DataType,
          "Street Address"
        ),
      ],
    } as RootState),
  getters: {},
  actions: {
    setRowCount(count: number) {
      this.rowCount = count;
    },
    setColumns(columns: Column[]) {
      this.columns = columns;
    },
    addColumn(column: Column) {
      this.columns.push(column);
    },
  },
});
