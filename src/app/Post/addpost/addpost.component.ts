import { formatDate } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TwitterServiceService } from 'src/app/twitter-service.service';
import FileUpload from '../Model/FileUpload';
import TwitterApp from '../Model/TwitterApp';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  selectedFiles: any;
  currentFile: any;

  constructor(private twitterService: TwitterServiceService, private router: Router) { }
  twitterApp: TwitterApp = new TwitterApp;
  today = new Date();
  ngOnInit(): void {
    this.twitterApp.postDate = formatDate(this.today, 'MM-dd-yyyy hh:mm:ss a', 'en-US', '+0530');
    this.twitterApp.userName = JSON.stringify(localStorage.getItem('loginid'));
    this.twitterApp.userName =  this.twitterApp.userName.replace('"', '');
    this.twitterApp.userName =  this.twitterApp.userName.replace('"', '');
  }

  selectFile(event: any) {

    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);

  }

  fileupload: FileUpload = new FileUpload;
  
  addPost() {

    this.currentFile = this.selectedFiles.item(0);
    
    this.twitterService.upload(this.currentFile).subscribe(
      event => {
        if (event instanceof HttpResponse) {
          this.twitterApp.imagePath = event.body.downloadUri;
          console.log(this.twitterApp.imagePath);

          const promise = this.twitterService.addPost(this.twitterApp);
          promise.subscribe((response:any) => {

            if(response.status){
              this.router.navigate(['/alltweet'])
            }else if(!response.status){
              this.router.navigate(['/alltweet'])
            }

          })


        }
      });

    this.selectedFiles = undefined;
  }
  }
  

