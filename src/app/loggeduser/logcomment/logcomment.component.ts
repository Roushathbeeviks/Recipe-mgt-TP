import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-logcomment',
  templateUrl: './logcomment.component.html',
  styleUrls: ['./logcomment.component.css']
})
export class LogcommentComponent implements OnInit {
  comment: any=""

  constructor(private toastr:ToastrService,private authserv:AuthService ) { }
  

  ngOnInit(): void {
  }
 

  onSubmit(f: NgForm)
  {
    this.authserv.comment(this.comment).subscribe((res)=>
    {
      // this.comment = res
      console.log(res);
      this.toastr.success("Send Succesfully")
    })
    
  }

}
