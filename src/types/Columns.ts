import { DataType } from "./DataTypes";

export interface IColumn {
  dataType: DataType;
  displayName: string;
  internalId: string;
}

export class Column implements IColumn {
  dataType: DataType;
  displayName: string;
  internalId: string;

  constructor(dataType: DataType, displayName: string) {
    this.dataType = dataType;
    this.displayName = displayName;
    this.internalId = getUID();
  }
}

// internal ID counter for Column class
var idCounter = 0;
function getUID(): string {
  return (idCounter++).toString();
}
