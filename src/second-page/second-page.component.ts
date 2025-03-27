import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  form: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { 
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      terms: new FormControl(false, Validators.required)
    });
  }

  ngOnInit() {
  }

  onSubmit(){

  }

  toThirdPage(){
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    }
  }

}
