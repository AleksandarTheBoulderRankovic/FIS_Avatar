import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signUpForm: FormGroup;
  @Output()
  public emitBaby : EventEmitter<Object> = new EventEmitter<Object>();

  constructor(private formBuilder: FormBuilder) { 

    this.signUpForm = this.formBuilder.group({
        name: ['', [Validators.required] ],
        email: ['', [Validators.required, Validators.email] ],
        address: ['', [Validators.required] ]
    });
  }

  ngOnInit(): void {
  }

  public submitForm(data) {
    this.emitBaby.emit(data);
    this.signUpForm.reset();
  }

}
