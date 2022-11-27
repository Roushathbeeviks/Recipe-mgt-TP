import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: '',
    email: '',
    password: '',
  };
  
  emailAlredyExist = '';
  userAlreadyExist = '';
  Emailcheck: boolean=false;
  UserCheck: boolean=false;
  data: any = [];

  existingEmailsList: any = [];
  isSignUpFailed = false;
  errorMessage = '';
  isSuccessful = false;
  formBuilder: any;

  constructor(
    private authserv: AuthService,
    private routes: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}



onSubmit()
{
  this.authserv.getdetails(this.form.email,this.form.username).subscribe((res:any)=>
  {
    console.log(res)
    console.log(this.form.email)
        for (let item in res)
          {
            console.log(res[item].email)
            if (this.form.email === res[item].email || this.form.username === res[item].username) 
                {
                  this.Emailcheck=true
                  this.emailAlredyExist="Email is already registered"
                  this.userAlreadyExist="Username is already registered"

                  console.log("existing email id")
                  
                } 
              }
     if(this.Emailcheck===false)   
     {
      const { username, email, password } = this.form;
      this.authserv.register(username, email, password).subscribe({
                next: (data) => {
                  console.log(data);
                  this.isSuccessful = true;
                  this.isSignUpFailed = false;
                  this.toastr.success('Create account succesfully', 'success');
                  this.routes.navigate(['/login']);
                },
                error: (err) => {
                  this.errorMessage = err.error.message;
                  this.isSignUpFailed = true;
                },
              });
     }
     else
     {
      this.reloadPage();
      console.log("Email is already Exists")
     }

})
}

reloadPage(): void {
  window.location.reload();
}
}
