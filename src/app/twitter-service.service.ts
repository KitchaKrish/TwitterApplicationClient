import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import TwitterApp from './Post/Model/TwitterApp';
import login from './User/Model/login';
import Register from './User/Register';

const BASE_URL_ADMIN = "http://localhost:9090/api/";

@Injectable({
  providedIn: 'root'
})

export class TwitterServiceService {

  constructor(public http: HttpClient) { }

  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoginOut: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  url:string= "http://localhost:9090/";
  createAccount(register: Register) {
    return this.http.post(BASE_URL_ADMIN + "twitter/registerctrl/register", register);
  }


  login(loginObj: login) {
    return this.http.post(BASE_URL_ADMIN + "twitter/registerctrl/login", loginObj);
  }

  getAllPost() {
    return this.http.get(BASE_URL_ADMIN + "twitter/flightctrl/getAllPost");
  }

  addPost(twitterApp: TwitterApp) {
    return this.http.post(BASE_URL_ADMIN + "twitter/flightctrl/addPost", twitterApp);
  }


  addLike(twitterId: number) {
    return this.http.get(BASE_URL_ADMIN + "twitter/flightctrl/likePosts/"+twitterId);
  }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${BASE_URL_ADMIN}/twitter/flightctrl/uploadFile`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }



  //searchPostByUsername


  searchPost(userName:string) {
    return this.http.get(BASE_URL_ADMIN + "twitter/flightctrl/searchPostByUsername/"+userName);
  }

//searchByUsername

  deletepost(twitterId: number) {
    return this.http.delete(BASE_URL_ADMIN + "twitter/flightctrl/deletepost/"+twitterId);
  }
  searchByUsername(userName:string) {
    return this.http.get(BASE_URL_ADMIN + "twitter/registerctrl/searchByUsername/"+userName);
  }

  changePassword(userName:string, password:string) {
    return this.http.get(BASE_URL_ADMIN + "twitter/registerctrl/changePassword/"+userName+"/"+password);
  }



}
