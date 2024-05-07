import {
  BaseLogger,
  ElasticLogger,
  MongoLogger,
} from "../crossCuttingConcerns/logging/logger.js";
import Customer from "../models/customer.js";
import { User } from "../models/user.ts";

import UserService from "../services/userService.js";

console.log("User component yüklendi");

let logger1 = new MongoLogger();
let userService = new UserService(logger1);

let user1 = new User(1, "Engin", "tip1");
let user2 = new User(2, "Baran");
userService.add(user1);
userService.add(user2);

//console.log(userService.list())
//console.log(userService.getById(2))

let customer: any = { id: 1, firstName: "Engin", lastName: "", type: "" };

//prototyping
customer.lastName = "Demiroğ";

console.log(customer.lastName);

console.log("--------------------------");
userService.load();

let customerToAdd = new Customer(1, "Seda", "Yılmaz", "456789123");

customerToAdd.type = "customer";

userService.add(customerToAdd);
console.log(userService.customers);
console.log(userService.employees);
console.log(userService.errors);
console.log(userService.getCustomersSorted());
//22.00 Dersteyiz