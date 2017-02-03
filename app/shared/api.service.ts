import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService{
  private headers = new Headers({'Content-Type': 'application/json'});
  template={
    "productId":"",
    "productName":"",
    "quantity":""
  };
  error="fails";


  constructor(private http: Http,){
  }

productDetails=this.template;

  insertProduct(){
    let body = JSON.stringify(this.productDetails);
    console.log(body);
    this.http.post('/insert', body, {headers: this.headers})
      .map(res => res.json())
      .subscribe(
        res => {
          this.productDetails=res;
        },
        err => this.error
      );
  }
}
