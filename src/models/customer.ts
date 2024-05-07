import { User } from "./user";

export default class Customer extends User {
  creditCardNumber: string;
  constructor(id, firstName, lastName, creditCardNumber) {
    super(id, firstName, lastName);

    this.creditCardNumber = creditCardNumber;
  }
}
