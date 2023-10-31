import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: 'example-component',
  templateUrl: 'example-component.component.html',
  styleUrls: ['example-component.component.scss']
})

export class ExampleComponent implements OnInit {
  users: any;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (data: any) => {
        this.users = data;
      }
    )
  }
}
