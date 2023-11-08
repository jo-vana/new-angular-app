import { Component, OnInit } from "@angular/core";
import { AccountService } from "src/app/services/account.service";

@Component({
  selector: 'profile-page',
  templateUrl: 'profile-page.component.html',
  styleUrls: ['profile-page.component.scss']
})

export class ProfilePage implements OnInit {
  accountData: any;
  firstName: string ='';
  lastName: string ='';
  email: string ='';

  constructor(private accountService: AccountService) {}


  ngOnInit(): void {
      this.accountService.getAccounts().subscribe(
        (data: any) => {
          this.accountData = data;
          console.log(this.accountData)
          data.forEach((item: any) => {
            this.firstName = item.firstName;
            this.lastName = item.lastName;
            this.email = item.email;
          });

        }
      )
  }
}
