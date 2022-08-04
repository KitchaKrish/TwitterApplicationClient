import { Component, OnInit } from '@angular/core';
import { TwitterServiceService } from 'src/app/twitter-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  token = localStorage.getItem('username')

  isUserLoggedIn: boolean=false;
  isLoginOut: boolean=false;

  constructor(private twitterService:TwitterServiceService) { 

   this.twitterService.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
  });


  this.twitterService.isLoginOut.subscribe( value => {
    this.isLoginOut = value;
});




  }

  ngOnInit(): void {
    console.log(this.token);
    if(this.token!=null)
    {
      this.twitterService.isUserLoggedIn.next(true);
      this.twitterService.isLoginOut.next(false);

    }else{
      this.twitterService.isUserLoggedIn.next(false);
      this.twitterService.isLoginOut.next(true);

    }
  }


  logout(){
    localStorage.removeItem('username');
    localStorage.removeItem('loginid');

  }



}
