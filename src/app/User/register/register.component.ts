import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TwitterServiceService } from 'src/app/twitter-service.service';
import Register from '../Register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private twitterService:TwitterServiceService, private router: Router) { }

  register: Register = new Register;

  ngOnInit(): void {
  }



  createAccount(){
    const promise = this.twitterService.createAccount(this.register);
    promise.subscribe((response:any) => {
      if(response.status){
        this.router.navigate(['/registersuccess'])
      }else if(!response.status){
        this.router.navigate(['/registersuccess'])
      }
    })
  }

}
