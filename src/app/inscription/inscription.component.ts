import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  myformbuilder:any
constructor(private fb:FormBuilder){

this.myformbuilder = this.fb.group({
  name:['',Validators.required],
  age:['',Validators.pattern("[0-9]{1-3}")]
})

}
  ngOnInit(): void {
  
    this.myformbuilder.patchValue({
      name:'user1',
      age: 25
    })
  }

get name(){
  return this.myformbuilder.get('name')
}
get age(){
  return this.myformbuilder.get('age')
}

print(){
  console.log(this.myformbuilder.value)
}

 
}
