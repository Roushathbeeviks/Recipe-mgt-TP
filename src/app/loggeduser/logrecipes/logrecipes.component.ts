import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import * as jspdf from 'jspdf';  

@Component({
  selector: 'app-logrecipes',
  templateUrl: './logrecipes.component.html',
  styleUrls: ['./logrecipes.component.css']
})
export class LogrecipesComponent implements OnInit {
  recipeArray:any[] = [];
  ImageArray:any;

  constructor(private adminserv:AdminService) { }

  ngOnInit(): void 
  {
    this.adminserv.getrecipe().subscribe((res)=>
    {
      this.recipeArray = res;
      // console.log(this.recipeArray);
    });

   this.adminserv.getImage().subscribe((result)=>
  {
    // console.log(result)
    this.ImageArray=result
  })


  }
}



