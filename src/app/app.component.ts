import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  user: User = {
    name: null,
    email: null,
    password: null
  };

  // Constructor
  constructor() {}

  onSubmit() {
    alert(
      `User ${this.user.name} with e-mail address ${
        this.user.email
      } has been added to the system.`
    );
  }
}

export interface User {
  name: string;
  email: string;
  password: string;
}
