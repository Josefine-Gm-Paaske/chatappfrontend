import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
//<Name of interface e.g. IUser>
  GetAll():Observable<any>{
    //TODO Find the correct URL
    return this.http.get("http://localhost/3000")
  }
}
