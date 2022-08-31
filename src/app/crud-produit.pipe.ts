import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "CrudProduitFiltre",
})
export class CrudProduitPipe implements PipeTransform {
  transform(tabAtelier: any, mot: any): any {
    if (mot) {
      tabAtelier = tabAtelier.filter(
        (a:any) =>
          
            a[4].toLowerCase().indexOf(mot.toLowerCase()) != -1 
    
          
 
      );
     
    
    }

     return tabAtelier;
   
  }
}