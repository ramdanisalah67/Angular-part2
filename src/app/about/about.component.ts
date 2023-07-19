import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
@Input("var2") CatgeorieName:any

constructor(private myroute:ActivatedRoute){

}
 myId = this.myroute.snapshot.params['id']
}
