import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TwitterServiceService } from 'src/app/twitter-service.service';
import OutPutModel from '../Model/OutputModel';
import Register from '../Register';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  constructor(private twitterService: TwitterServiceService, private router : Router) { }
  forgotShow: boolean = false;
  forgotHide: boolean = false;
  errormessage: boolean = false;


  register: Register = new Register;

  ngOnInit(): void {
    this.forgotShow = true;
    this.forgotHide = false;
    this.errormessage = false;
  }


  userName:string="";
  password:string="";
  cnfpassword:string="";

  outputModel:OutPutModel = new OutPutModel;


  changepassword(){
    if(this.password == this.cnfpassword){
      const promise = this.twitterService.changePassword(this.userName,this.password);
      promise.subscribe((response:any) => {
        
        this.outputModel = response as OutPutModel;
       if(this.outputModel.status){
        alert("Password Cheanged")
        this.router.navigate(['/login'])
       }else{
        this.router.navigate(['/forgot'])
       }
  
      });
    }else{
     alert("password not match")
      
    }
  }



  forgot() {
   

    const promise = this.twitterService.searchByUsername(this.userName);
    promise.subscribe((response:any) => {
      
      this.outputModel = response as OutPutModel;
      if(this.outputModel.status){
        this.forgotShow = false;
        this.forgotHide = true;
  
        

      }else{
        this.forgotShow = true;
        this.forgotHide = false;
        
      }


    });
  }





}
