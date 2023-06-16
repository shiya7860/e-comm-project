import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  showLogIn=false;
  authError:string='';

  constructor(private seller:SellerService, private router:Router) { }

  ngOnInit():void{
    this.seller.reloadSeller();
  }

  signUp(data:SignUp){
   this.seller.userSignUp(data)
  }
  Login(data:SignUp){
    this.authError="";
   this.seller.userLogin(data)
   this.seller.isLoginError.subscribe((isError)=>{
    if(isError){
      this.authError ="Email or Password is not correct";
    }
   })
  }
  
  openLogin(){
    this.showLogIn=true;
  }

  openSignUp(){
    this.showLogIn=false;
  }

}
