
import { Component, OnInit } from '@angular/core';

import { TwitterServiceService } from 'src/app/twitter-service.service';
import TwitterApp from '../Model/TwitterApp';

@Component({
  selector: 'app-mytweet',
  templateUrl: './mytweet.component.html',
  styleUrls: ['./mytweet.component.css']
})
export class MytweetComponent implements OnInit {

  constructor(private twitterService:TwitterServiceService) { }
  twitterApp:TwitterApp[]=[]

  ngOnInit(): void {
    this.refreshList();
  }

  addLike(twitterId:number){
    const promise = this.twitterService.addLike(twitterId);
  promise.subscribe((response) => {
    
    this.refreshList();


  });
  }


  deletepost(twitterId:number){
    const promise = this.twitterService.deletepost(twitterId);
  promise.subscribe((response) => {
    
    this.refreshList();


  });
  }

userName:string="";

refreshList(){
  this.userName= JSON.stringify(localStorage.getItem('loginid'));
  this.userName = this.userName.replace('"', '');
  this.userName = this.userName.replace('"', '');

  console.log(this.userName);
  
  const promise = this.twitterService.searchPost(this.userName);
  promise.subscribe((response) => {
    this.twitterApp = response as TwitterApp[];
    console.log('HelloWrold');
  });
}



}
