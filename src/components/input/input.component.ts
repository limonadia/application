import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() controlName: string = '';
  @Input() formGroup?: FormGroup;
  @Input() placeholder?: string;
  @Input() type: string = 'text';

  constructor() {}

  ngOnInit() {
    this.control.valueChanges.subscribe(value => {
      if (value) {
        this.control.markAsTouched();
      }
    });
  }

  get control(): FormControl {
    try {
      const control = this.formGroup?.get(this.controlName.toString());
      if (!control) {
        throw new Error(
          `Control with name "${this.controlName}" not found in form group  ` +
          this.formGroup
        );
      } else {
        return control as FormControl;
      }
    } catch (error) {
      return new FormControl();
    }
  }
 
}

