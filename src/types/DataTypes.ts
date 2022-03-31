import { faker } from "@faker-js/faker";

// These will correspond to faker.js generated items
// These MUST be unique
export enum EDataType {
  firstName = "First name",
  lastName = "Last name",
  middleName = "Middle name",
  fullName = "Full name",
  gender = "Gender",
  phoneNumber = "Phone number",
  jobArea = "Job Area",
  jobTitle = "Job Title",
  jobType = "Job Type",
  city = "City",
  country = "Country",
  county = "County",
  state = "State",
  streetAddress = "Street Address",
  zipCode = "Zip Code",
  animal = "Animal",
  color = "Color",
  price = "Price",
  product = "Product",
  companyName = "Company Name",
  pastDate = "Past Date",
  futureDate = "Future Date",
  domainName = "Domain Name",
  email = "E-mail",
  username = "Username",
  password = "Password",
  ip = "IP Address",
  mac = "Mac Address",
  sentence = "Sentence",
  musicGenre = "Music Genre",
  vehicle = "Vehicle",
  vin = "VIN",
  uuid = "UUID",
  word = "Word",
  filename = "Filename",
}

export interface DataType {
  ftype: EDataType; // faker type
  func: Function;
}

// define types
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
  { ftype: EDataType.jobArea, func: faker.name.jobArea },
  { ftype: EDataType.jobTitle, func: faker.name.jobTitle },
  { ftype: EDataType.jobType, func: faker.name.jobType },
  { ftype: EDataType.city, func: faker.address.city },
  { ftype: EDataType.country, func: faker.address.country },
  { ftype: EDataType.county, func: faker.address.county },
  { ftype: EDataType.state, func: faker.address.state },
  { ftype: EDataType.streetAddress, func: faker.address.streetAddress },
  { ftype: EDataType.zipCode, func: faker.address.zipCode },
  { ftype: EDataType.animal, func: faker.animal.type },
  { ftype: EDataType.color, func: faker.commerce.color },
  { ftype: EDataType.price, func: faker.commerce.price },
  { ftype: EDataType.product, func: faker.commerce.productName },
  { ftype: EDataType.companyName, func: faker.company.companyName },
  { ftype: EDataType.pastDate, func: faker.date.past },
  { ftype: EDataType.futureDate, func: faker.date.future },
  { ftype: EDataType.domainName, func: faker.internet.domainName },
  { ftype: EDataType.email, func: faker.internet.email },
  { ftype: EDataType.username, func: faker.internet.userName },
  { ftype: EDataType.password, func: faker.internet.password },
  { ftype: EDataType.ip, func: faker.internet.ipv4 },
  { ftype: EDataType.mac, func: faker.internet.mac },
  { ftype: EDataType.sentence, func: faker.lorem.sentence },
  { ftype: EDataType.musicGenre, func: faker.music.genre },
  { ftype: EDataType.vehicle, func: faker.vehicle.vehicle },
  { ftype: EDataType.vin, func: faker.vehicle.vin },
  { ftype: EDataType.uuid, func: faker.datatype.uuid },
  { ftype: EDataType.word, func: faker.random.word },
  { ftype: EDataType.filename, func: faker.system.commonFileName },
].sort((a, b) => a.ftype.localeCompare(b.ftype));
