import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrComponentlessModule } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import {AdminService} from '../../services/admin.service'
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})

export class AddrecipeComponent implements OnInit {

  data={
    recipeid:"",
    recipename:"",
    cookingtime:"",
    count:"",
    ingredients:"",
    steps:"",
    image:""
  }
  imageData:string="";
  selectedFile:any= ImageSnippet;

  
  constructor(private adminserv:AdminService,private routes:Router) { }

  ngOnInit(): void
  {
    // image:new FormControl(null)
  }




  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.adminserv.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
        
        },
        (err) => {
        
        })
    });

    reader.readAsDataURL(file);
  }

add()
{
  // console.log(this.data)
    
  const formData = new FormData();
  // formData.append('file', this.image);
  // formData.append('recipename', f.controls.pizzaname.value);
  // formData.append('pizzasize', f.controls.pizzasize.value);
  // formData.append('pizzaprice', f.controls.pizzaprice.value);
  this.adminserv.createRecipe(this.data).subscribe((res)=>
  {
    console.log(res);
    this.routes.navigate(['/adminhome'])

  }
 );
}

}






  // selectImage(event:any) {
  //   console.log("image selected");
  //   const file= (event.target).files[0];
  //   const allowedFileTypes=["image/png", "image/jpg", "image/jpeg"]
  //   this.selectedFile=new ImageSnippet(event.target.result, file)


  // }
  //   if(file && allowedFileTypes.includes(file.type))
  //   {
  //     const reader= new FileReader();
  //     reader.onload=()=>
  //     {
  //       this.imageData = reader.result as string;
  //     }
    
  //     reader.readAsDataURL(file)
  //   }
  // }


    // if (event.target.files.length > 0) {
    //   const file = event.target.files[0];
      // this.image = file;
    // }
  
