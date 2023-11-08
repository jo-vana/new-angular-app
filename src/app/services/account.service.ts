import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  private apiUrl= "http://localhost:3000/";

  constructor( private http: HttpClient ) {}

  getAccounts() {
    return this.http.get(`${this.apiUrl}accounts`);
  }

  createAccount() {
    // return this.apiUrl.post()
  }
}
