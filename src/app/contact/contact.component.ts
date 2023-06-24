import { Component, OnDestroy, OnInit } from '@angular/core';
import { FirstServiceService } from '../services/first-service.service';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,OnDestroy {
num:any
ob:Subscription
  constructor(private myservice:FirstServiceService){
    
    this.ob= myservice.testObservable().subscribe(val=>this.num=val)

  }
  ngOnInit(): void {
  
  }
  ngOnDestroy(): void {
    console.log('destroy,observable unsubscription finish')
    this.ob.unsubscribe()
  }
}
