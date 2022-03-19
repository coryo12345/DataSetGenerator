export interface Column {
  dataType: DataType;
  field: string;
  header: string;
  sortable: boolean;
}

// These will correspond to faker.js generated items
export enum DataType {
  firstName,
  lastName,
  middleName,
  fullName,
  gender,
  phoneNumber,
}
