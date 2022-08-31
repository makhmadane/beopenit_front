import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beopenit';
  search="";
  public produits!: [];
  constructor(public produitService:ProductService,
 ) { }
  ngOnInit(): void {
      this.getAllProduit();
  }

getAllProduit(){
  
  this.produitService.getData().subscribe(
    (data:any)=>{
      
        console.log(data)
        this.produits=data;
    },
    (err)=>{
   
      console.log("err", err);
    }
  );
}

deleteSupprimer(id:any){

  this.produitService.deleteData(id).subscribe(
    ()=>{
        console.log("cool");
        this.getAllProduit();
    },
    ()=>{
      console.log("error");
    }
  )
}
getById(id:any){
  console.log(id);
  this.produitService.getById(id).subscribe(
    (data:any)=>{
      
        console.log(data[0]);
      
    },
    ()=>{
      console.log("error");
    }
  )
}
onAddProduct(addForm: NgForm): void {

  this.produitService.insertData(addForm.value).subscribe(
    (response: any) => {
      console.log(response);
      this.getAllProduit();
      window.onload;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
      this.getAllProduit();
      window.onload;
    }
  );
}

}
