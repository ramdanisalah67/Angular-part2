import { Component } from '@angular/core';
import { FirstServiceService } from './services/first-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
mypath=""
myname=""
productName="IPHONE 11"
  constructor(private myservice:FirstServiceService){
    this.myname=myservice.name
    this.mypath=myservice.url
  }
}
