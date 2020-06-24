import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginInfoService } from '../service/login-info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup ;

  constructor(private formBuilder: FormBuilder, private loginInfo : LoginInfoService ) {

    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required] ],
      email: ['', [Validators.required, Validators.email] ]
  });
   }

  ngOnInit(): void {
  }

  public submitForm(data) {
    this.loginInfo.setLogginInfo(data, true);
    this.loginForm.reset();
  }

}
