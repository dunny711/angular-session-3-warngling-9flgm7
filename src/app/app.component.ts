import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  customerWithMoney = [
    {
      id: 2,
      name: "Emil Mustermann",
      money: 12,
      rating: 1
    },
    {
      id: 3,
      name: "Bennet Mustermann",
      money: 12,
      rating: 1
    },
    {
      id: 4,
      name: "Christoph Mustermann",
      money: 12,
      rating: 2
    },
    {
      id: 5,
      name: "Christian Mustermann",
      money: 12,
      rating: 1
    },
    {
      id: 6,
      name: "Jan Mustermann",
      money: 1,
      rating: 10
    }
  ];
  customerNoMoney = [
    {
      id: 1,
      name: "Daniel Mustermann",
      money: -5,
      rating: -1000
    }
  ];
  customerList = [
    {
      id: 1,
      name: "Daniel Mustermann",
      money: -1000,
      qty: [0, 0, 0, 0, 0],
      sum: 0
    },
    {
      id: 2,
      name: "Emil Mustermann",
      money: 12,
      qty: [20, 50, 60],
      sum: 0
    },
    {
      id: 3,
      name: "Bennet Mustermann",
      money: 12,
      qty: [68, 9],
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
      qty: [9],
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
  lotteryThreshold = 2;

  anonymize() {
    //TODO use this function with this.customerList.map(...)
    // this.customerList.map(
    //   (customer, i) => (customer.name = this.anonymizedNames[i])
    // );
  }

  groupByMoney() {
    //TODO use this function to filter poor people >0
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
      customer.sum = customer.qty.reduce((prev, curr) => prev + curr);
    });
  }
  testFunction1() {
    // this.customerList = this.customerList.filter(customer => {
    //   return customer.qty.length > this.lotteryThreshold;
    // });
    // this.customerWithMoney.map(
    //   customer => (customer.rating = customer.rating * this.randomG(4))
    // );
    this.customerWithMoney.filter(customer => {});
    console.log(this.customerList);

    for (var i = 0; i < this.customerList.length; i++) {
      this.customerWithMoney.forEach(element => {
        if (this.customerList[i].qty.length > this.lotteryThreshold) {
          element.rating = element.rating * this.randomG(4);
        }
      });
    }
  }

  randomG(v: number) {
    var r = 0;
    for (var i = v; i > 0; i--) {
      r += Math.random();
    }
    return r / v;
  }
  // }

  // Constructor
  constructor() {}
}
