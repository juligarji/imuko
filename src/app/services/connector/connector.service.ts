import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

// allowed methos that can be used in a http call
type AllowedHttpMethods = 'post' | 'get' | 'put' | 'delete';

@Injectable({
  providedIn: 'root'
})

// ............. SERVICE DESCRIPTION ...................
//  This service allows the comunication to third party api's 
// using http calls
// .....................................................

export class ConnectorService {


  constructor(private http:HttpClient) { 
  }

  unprotected(method:AllowedHttpMethods,headers:any,uri:string,body?:any):Observable<any>{
    // Send a http call without a JWT token based system authentication
    return this.call(method,headers,uri,body)
            .pipe(
              retry(2)
            )
  }

  private call(method:AllowedHttpMethods,headers:HttpHeaders,uri:string,body?:any):Observable<any>{
    // Is the base of every comunication using the HTTP protocol.
    switch(method)
    {
      case 'get':
       return this.http.get(uri,{
         headers: headers
       })

      case 'post':
        return this.http.post(uri,body,{
          headers: headers
        })

      case 'put':
        return this.http.put(uri,body,{
          headers: headers
        })

      case 'delete':
        return this.http.delete(uri,{
          headers: headers
        })
    }
  }
}
