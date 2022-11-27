import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import {Validators, FormGroup, NonNullableFormBuilder, FormControl,} from "@angular/forms";
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageService } from '../../services/storage.service';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = {
    email: '',
    password: '',
  };
  isLoggedIn = false;
  isLoginFailed = false;
  msg = '';
  isadmin = false;
  role:any=""

  constructor(
    private authserv: AuthService,
    private storageserv: StorageService,
    private routes: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  onSubmit() {
    const { email, password } = this.form;
    this.authserv.login(email, password).subscribe({
      next: (data) => {
        this.storageserv.saveUser(data);
        console.log(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        // this.roles = this.storageserv.getUser().roles;
        // this.reloadPage();

        if (data.Success == 'Success!') {
          if (
            this.form.email == 'admin@gmail.com' &&
            this.form.password == 'admin123'
          ) {
            this.routes.navigate(['/adminhome']);
            this.toastr.success(
              'You are successfully logged in as admin','Success')

            this.role="Admin"
          } else {
            this.toastr.success('Logged  Succesfully', 'success');
            this.routes.navigate(['/userhome']);
      
          }
        } else {
          this.msg = data.Success;
          alert(this.msg);
          this.reloadPage();
          // this.routes.navigate(['/login'])
        }
      },
      error: (err) => {
        // this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      },
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
