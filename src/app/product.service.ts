import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }



  getData() {
    return this.httpClient.get("http://localhost/beopenit/index.php");
  }

  

  insertData(data: any) {
    var form_data = new FormData();

for ( var key in data ) {
    form_data.append(key, data[key]);
}
    return this.httpClient.post("http://localhost/beopenit/index.php", form_data);
  }

  deleteData(id: string) {
    return this.httpClient.options("http://localhost/beopenit/index.php?id="+ id);
  }

/*  updateData(id: string, data: any) {
    return this.httpClient.put(environment.Localurl + "api/produits/" + id, data);
  }*/

  getById(id: any) {
  
    return this.httpClient.get( "http://localhost/beopenit/index.php?id="+ id);
  }
}
