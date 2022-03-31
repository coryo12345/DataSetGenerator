import { faker } from "@faker-js/faker";

// These will correspond to faker.js generated items
export enum EDataType {
  firstName = "First name",
  lastName = "Last name",
  middleName = "Middle name",
  fullName = "Full name",
  gender = "Gender",
  phoneNumber = "Phone number",
}

export interface DataType {
  ftype: EDataType; // faker type
  func: Function;
}

// define types
// TODO add more
export const definedTypes: DataType[] = [
  { ftype: EDataType.firstName, func: faker.name.firstName },
  { ftype: EDataType.lastName, func: faker.name.lastName },
  { ftype: EDataType.middleName, func: faker.name.middleName },
  { ftype: EDataType.fullName, func: faker.name.findName },
  {
    ftype: EDataType.gender,
    func: () => {
      return faker.name.gender(true);
    },
  },
  { ftype: EDataType.phoneNumber, func: faker.phone.phoneNumber },
];
