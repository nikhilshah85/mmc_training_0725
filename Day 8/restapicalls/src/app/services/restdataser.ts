import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Restdataser {

    postdata_fromweb:any;
 
    _http:HttpClient;
    constructor(_http:HttpClient) {
      this._http=_http;
     }

     getPostData(){
       this._http.get("https://jsonplaceholder.typicode.com/posts")
       .subscribe((res:any)=>{
          this.postdata_fromweb=res;
          console.log(this.postdata_fromweb);}
                 )
     }


}
