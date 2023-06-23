import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  myformbuilder:any
constructor(private fb:FormBuilder){
this.myformbuilder = this.fb.group({
  name:[''],
  age:['']
})
}



print(){
  console.log(this.myformbuilder.value)
}

 
}
