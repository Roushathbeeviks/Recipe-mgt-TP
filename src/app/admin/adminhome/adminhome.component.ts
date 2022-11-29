import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  recipeeArray:any=[]



  constructor(private adminserv:AdminService,private toastr:ToastrService) { }

  ngOnInit(): void 
  {
    this.adminserv.getrecipe().subscribe((res)=>
    {
      this.recipeeArray=res

    })
  }
 
  edit()
  {

  }

  delete(id:any) 
{
    if(confirm("Do you want to delete this recipe"))
    {
      this.adminserv.deleterecipe(id).subscribe((res)=>
      {
        console.log(res)
      this.toastr.success("Deleted successfully","sucees")
      this.ngOnInit();
     })
    
  }
}
}
