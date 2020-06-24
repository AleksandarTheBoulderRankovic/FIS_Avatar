import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginInfoService {

  public loggedIn: boolean = false;
  public loginAddress : string = '';
  public loginEmail : string = '';
  public loginName : string = '';

  constructor() { }

  setLogginInfo(data, loginInfo : boolean) {
    this.loggedIn = loginInfo;
    this.loginAddress = data.address;
    this.loginEmail = data.email;
    this.loginName = data.name;

  }

  public getAddress() {
    return this.loginAddress;
  }

  public getName() {
    return this.loginName;
  }

  public getEmail() {
    return this.loginEmail;
  }

  public getLogBool() {
    return this.loggedIn;
  }

  public getLogData() {

    return {
      address: this.loginAddress,
      email: this.loginEmail,
      name: this.loginName,
      loggedIn: this.loggedIn
    };
  }
}
