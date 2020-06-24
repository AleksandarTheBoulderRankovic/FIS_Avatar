import { Component, OnInit } from '@angular/core';
import { LoginInfoService } from '../service/login-info.service';

@Component({
  selector: 'app-signup-parent',
  templateUrl: './signup-parent.component.html',
  styleUrls: ['./signup-parent.component.css']
})
export class SignupParentComponent implements OnInit {

  constructor(private loginInfo : LoginInfoService) { }

  ngOnInit(): void {
  }

  onSubmit(data) {
    this.loginInfo.setLogginInfo(data, true);
  }

}
