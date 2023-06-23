import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { FirstServiceService } from '../services/first-service.service';
import { Injectable } from '@angular/core';

@Injectable({
providedIn:'root'
})
export class adminGuard implements CanActivate {

constructor(private myservice:FirstServiceService,private myroute:Router){

}
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Promise<boolean | UrlTree>{
    return new Promise((resolve,inject)=>{
        if(this.myservice.IsAdmin==true){
          resolve(true)
        }
        else{
          this.myroute.navigate(['/'])
          resolve(false)
        }
    })

  }
}
