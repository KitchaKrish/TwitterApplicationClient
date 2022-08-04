import { Component, OnInit } from '@angular/core';
import { TwitterServiceService } from 'src/app/twitter-service.service';
import TwitterApp from '../Model/TwitterApp';

@Component({
  selector: 'app-listtweet',
  templateUrl: './listtweet.component.html',
  styleUrls: ['./listtweet.component.css']
})
export class ListtweetComponent implements OnInit {

  constructor(private twitterService:TwitterServiceService) { }

   fruits: string[] = ['Apple', 'Orange', 'Banana'];

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



  refreshList(){
    const promise = this.twitterService.getAllPost();
    promise.subscribe((response) => {
      this.twitterApp = response as TwitterApp[];
      console.log('HelloWrold');


    });
  }

}
