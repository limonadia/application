import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator } from '@angular/forms';

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
    this.form = this.fb.group({
      name: [''],
      lastName: [''],
      email: [''],
      phone: [''],
    });
  }

  ngOnInit() {
  }

  onSubmit(){

  }

}
