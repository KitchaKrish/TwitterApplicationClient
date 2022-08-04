import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TwitterServiceService } from 'src/app/twitter-service.service';
import login from '../Model/login';
import OutPutModel from '../Model/OutputModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private twitterService: TwitterServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  loginObj: login = new login();
  outputModel: OutPutModel = new OutPutModel();

  login() {
    console.log(this.loginObj);
    const promise = this.twitterService.login(this.loginObj);
    promise.subscribe((response: any) => {
      console.log(response);
     
      if (response!=null) {
        localStorage.setItem('username', response.username);
        localStorage.setItem('loginid', response.loginId);
        this.twitterService.isUserLoggedIn.next(true);
        this.twitterService.isLoginOut.next(false);

        this.router.navigate(['/alltweet'])
      }
    })
  }

}
