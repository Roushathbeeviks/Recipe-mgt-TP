import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeArray:any[] = [];
  ImageArray:any;

  constructor(private adminserv:AdminService) { }

  ngOnInit(): void 
  {
    this.adminserv.getrecipe().subscribe((res)=>
    {
      this.recipeArray = res;
      console.log(this.recipeArray);
    });

   this.adminserv.getImage().subscribe((result)=>
  {
    console.log(result)
    this.ImageArray=result
  })

  }


}