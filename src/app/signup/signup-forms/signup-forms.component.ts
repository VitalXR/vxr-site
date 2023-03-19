import { Component } from '@angular/core';
import { SignupFormsService } from './signup-forms.service';

@Component({
  templateUrl: './signup-forms.component.html',
  styleUrls: ['./signup-forms.component.scss'],
  providers: [SignupFormsService]
})
export class SignupFormsComponent {
  constructor(private signupformsService: SignupFormsService ) {
    this.arr = []

    for(let i = 0; i < 10; i++){
      let t_object: tempClass = {
        attr1: 'Hello ' + i,
        attr2: i,
        attr3: 'Goodbye' + i,
        attr4: i * i + i
      }
      this.arr.push(t_object);
    }
  }

  arr: tempClass[]
}


class tempClass {
  attr1: String;
  attr2: Number;
  attr3: String;
  attr4: Number;
}