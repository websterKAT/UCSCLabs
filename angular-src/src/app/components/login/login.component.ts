import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:String;
  password:String;

  constructor(
    private authService:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router
   ) { }

  ngOnInit() {
  }
  onLoginSubmit(){
    const user = {
      email:this.email,
      password:this.password
    }
    
    
    this.authService.authenticateUser(user).subscribe(data => {
        if(data.success){
          console.log(data.token);
          this.authService.storeUserData(data.token,data.user);
          this.ngFlashMessageService.showFlashMessage({
            messages: ["You are logging in"], 
            dismissible: true, 
            timeout: 5000,
            type: 'success'
           });
           this.router.navigate(['']);
           

        } else {
          this.ngFlashMessageService.showFlashMessage({
            messages: ["something went wrong"], 
            dismissible: true, 
            timeout: 5000,
            type: 'danger'
           });
           this.router.navigate(['login']);
        }
    });
  }


} 
