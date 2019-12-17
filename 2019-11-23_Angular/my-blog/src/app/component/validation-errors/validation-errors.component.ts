import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.scss']
})
export class ValidationErrorsComponent implements OnInit {

  translations = [
    {errorName: 'required',
     errorText: 'This field is required'},
    {errorName: 'minLength',
     errorText: 'This field has min length'}
    ];

  @Input()
  control: AbstractControl;

  constructor() {
  }

  ngOnInit() {
  }

}
