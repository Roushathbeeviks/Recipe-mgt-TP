import { Component,  OnInit, } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

import jsPDF from 'jspdf';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from "pdfmake/build/vfs_fonts"; 
import { ActivatedRoute } from '@angular/router';
declare var require: any;
const htmlToPdfmake = require("html-to-pdfmake");
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;




@Component({
  selector: 'app-logdownload',
  templateUrl: './logdownload.component.html',
  styleUrls: ['./logdownload.component.css']
})

export class LogdownloadComponent implements OnInit {
  RecipeArray: any[]=[]
  Recipename:string = ""
  Cookingtime:any
  Count:any
  Ingredients:string=""
  Steps:string=""

  id:any


  @ViewChild('pdfTable')
  pdfTable!: ElementRef;

  constructor(private adminserv:AdminService,private route:ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.id=this.route.snapshot.paramMap.get('id')
       console.log(this.id)
       if(this.id)
       {
         this.adminserv.getrecipebyid(this.id).subscribe((res:any)=>
        {
              this.RecipeArray=res
              console.log(this.RecipeArray)
              this.Recipename=res.recipename
              this.Cookingtime=res.cookingtime
              this.Count=res.count
              this.Ingredients=res.ingredients
              this.Steps=res.steps

              
         })
        }
  }

  get Ing() : Array<String>{
    let ings=this.Ingredients.split(",");
    ings.pop();
    return ings;
  }

  get steps() : Array<String>{
    let stepis=this.Steps.split(".");
    stepis.pop();
    return stepis;
  }
  public download() {
  
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
     const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
     
  }
}


