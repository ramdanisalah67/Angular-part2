import { Component, Input } from '@angular/core';
import { FirstServiceService } from '../services/first-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input("var1") myProduct:any
  categorieName="Sport"

  
verif_Admin:any
  constructor(private myservice:FirstServiceService){
this.verif_Admin=myservice.IsAdmin
  }
}
