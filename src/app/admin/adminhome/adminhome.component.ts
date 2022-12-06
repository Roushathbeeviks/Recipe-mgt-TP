import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  recipeeArray:any=[]
  rows:any = [];
  test:any;
  columnMode='standard';
  columns = [];
  ColumnMode = ColumnMode;



  constructor(private adminserv:AdminService,private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void 
  {
    this.adminserv.getrecipe().subscribe((res)=>
    {
      this.rows=res

    })
  }
 
  edit()
  {
    // console.log("edit clicked")
    this.router.navigate(['/edit'])

  }

  delete($event:any,id:any) 
 {
    if(confirm("Do you want to delete this recipe"))
    {
      this.adminserv.deleterecipe(id._id).subscribe((res)=>
      {
        console.log(res)
      this.toastr.success("Deleted successfully","sucees")
      this.ngOnInit();
     })
    
  }
}

}
