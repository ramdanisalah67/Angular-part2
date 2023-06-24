import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

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
  age:['',Validators.minLength(3)||Validators.required],
  items:this.fb.array([
    this.fb.group({
      username:[''],
      password:['']
    }),
    this.fb.group({
      username:[''],
      password:['']
    })
  ])
})

}
  ngOnInit(): void {
  
   /* this.myformbuilder.patchValue({
      name:'user1',
      age: 25
    })*/
  }

get name(){
  return this.myformbuilder.get('name')
}
get age(){
  return this.myformbuilder.get('age')
}

get items(){
  return this.myformbuilder.get('items') as FormArray
}
print(){
  console.log(this.myformbuilder.value)
}

addNewRow(){
let myRow = this.fb.group({
  username:[''],
  password:['']
})
this.items.push(myRow)
}
deleteRow(i:any){
  this.items.removeAt(i)
}
}
