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
      name: "Daniel Ballerina",
      money: -1000,
      qty: [0, 0, 0, 0, 0],
      sum: 0
    },
    {
      id: 2,
      name: "Emil Guru",
      money: 12,
      qty: [20, 50, 60],
      sum: 0
    },
    {
      id: 3,
      name: "Bennet Jovi",
      money: 12,
      qty: [68, 9],
      sum: 0
    },
    {
      id: 4,
      name: "Christoph Bachelor",
      money: 12,
      qty: [20, 50, 45, 10, 9],
      sum: 0
    },
    {
      id: 5,
      name: "Christian Cutie",
      money: 12,
      qty: [9],
      sum: 0
    },
    {
      id: 6,
      name: "Jan Designer",
      money: 12,
      qty: [0, 50, 60, 10, 9],
      sum: 0
    }
  ];
  anonymizedNames = ["A", "B", "C", "D", "E", "F"];
  lotteryThreshold = 2;

  anonymize() {
    //TODO use this function with this.customerList.map(...)
  }

  groupByMoney() {
    //Todo use filter on customerList to filter poor people out
  }
  sumOfQuantity() {
    //ToDo use reduce and map on customerList to add the qty together and put them into the variable sum
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

  //some Gaussian function
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
