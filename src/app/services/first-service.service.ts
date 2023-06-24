import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {
name="salah"
url="/api/v1"
IsAdmin=true
  constructor() { }
  

  testObservable(){
    return new Observable(obs=>{
      setTimeout(() => {
        obs.next('one')
      }, 1000);
      setTimeout(() => {
        obs.next('two')
      }, 2000);
      setTimeout(() => {
        obs.next('three')
      }, 3000);
      setTimeout(() => {
        obs.error()
      }, 4000);
      setTimeout(() => {
        obs.complete()
      }, 4000);
  
      setTimeout(() => {
        obs.next('four')
      }, 5000);
    })
  }
}
