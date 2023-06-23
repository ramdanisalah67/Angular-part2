import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
constructor(){

}

myForm = new FormGroup({
  name: new FormControl,
  age: new FormControl,
});

print(){
  console.log(this.myForm.value)
}

 
}
