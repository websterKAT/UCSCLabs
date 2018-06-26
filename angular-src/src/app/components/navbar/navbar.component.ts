import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages'; 


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this.authService.logout();
    this.ngFlashMessageService.showFlashMessage({
      messages: ["Logging out"], 
      dismissible: true, 
      timeout: 5000,
      type: 'success'
     });
     this.router.navigate(['/login']);
     return false;
  }

}
