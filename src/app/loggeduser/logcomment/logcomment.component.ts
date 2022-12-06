import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-logcomment',
  templateUrl: './logcomment.component.html',
  styleUrls: ['./logcomment.component.css']
})
export class LogcommentComponent implements OnInit {

  constructor(private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm)
  {
    this.toastr.success("Send Succesfully")
  }

}
