import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  time?: string;
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 

    this.activatedRoute.queryParams.subscribe(params => {
      this.time = params['time'];
    });

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

  onSubmit(){}

  toThirdPage() {
    if (this.form.valid) {
      const { terms, ...formValues } = this.form.value;
      this.router.navigate(['/third-page'], {
        queryParams: { 
          ...formValues,
          time: this.time 
        }
      });
    }
  }

}
