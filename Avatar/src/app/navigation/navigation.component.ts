import { Component, OnInit } from '@angular/core';
import { LoginInfoService } from '../service/login-info.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public loggedIn: boolean = false;
  public loginAddress : string = '';
  public loginEmail : string = '';
  public loginName : string = '';

  public setParameters(loggedIn, address, name, email){
    this.loggedIn = loggedIn;
    this.loginAddress = address;
    this.loginName = name;
    this.loginEmail = email;
  }

  constructor(private loginInfo : LoginInfoService) { 
    console.log(loginInfo.getAddress());
    setInterval(() => {    
      this.loggedIn = loginInfo.getLogData().loggedIn;
      this.loginAddress = loginInfo.getLogData().address;
      this.loginName = loginInfo.getLogData().name;
      this.loginEmail = loginInfo.getLogData().email;
      
       }, 10000);
  }


  ngOnInit(): void {
  
  }

  


}
