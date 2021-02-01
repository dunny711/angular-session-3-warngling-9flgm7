import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  customerList = [
    {
      id: 1,
      name: "Daniel Mustermann",
      money: -1000,
      qty: [3, 4, 5, 120, 9],
      sum: 0
    },
    {
      id: 2,
      name: "Emil Mustermann",
      money: 12,
      qty: [20, 50, 60, 10, 9],
      sum: 0
    },
    {
      id: 3,
      name: "Bennet Mustermann",
      money: 12,
      qty: [20, 4, 60, 68, 9],
      sum: 0
    },
    {
      id: 4,
      name: "Christoph Mustermann",
      money: 12,
      qty: [20, 50, 45, 10, 9],
      sum: 0
    },
    {
      id: 5,
      name: "Christian Mustermann",
      money: 12,
      qty: [20, 50, 63, 10, 9],
      sum: 0
    },
    {
      id: 6,
      name: "Jan Mustermann",
      money: 12,
      qty: [0, 50, 60, 10, 9],
      sum: 0
    }
  ];
  anonymizedNames = ["A", "B", "C", "D", "E", "F"];

  anonymize() {
    this.customerList.map(
      (customer, i) => (customer.name = this.anonymizedNames[i])
    );
  }

  groupByMoney() {
    this.customerList = this.customerList.filter(customer => {
      return customer.money > 0;
    });
  }
  sumOfQuantity() {
    // this.customerList.map(customer => {
    //   customer.sum = customer.qty.reduce(function (accumulator, currentValue, currentIndex, array) {
    //     return accumulator + currentValue;
    // })
    this.customerList.map(customer => {
      customer.sum = customer.qty.reduce((prev, curr) => prev + curr, );
    });
  }
  // }

  // Constructor
  constructor() {}
}
