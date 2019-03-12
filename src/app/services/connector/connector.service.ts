import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

type AllowedHttpMethods = 'post' | 'get' | 'put' | 'delete';

@Injectable({
  providedIn: 'root'
})

export class ConnectorService {

  constructor(private http:HttpClient) { 
  }

  unprotected(method:AllowedHttpMethods,headers:any,uri:string,body?:any):Observable<any>{
    return this.call(method,headers,uri,body)
            .pipe(
              retry(2)
            )
  }

  private call(method:AllowedHttpMethods,headers:HttpHeaders,uri:string,body?:any):Observable<any>{
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
