import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http:HttpClient) { }
//<Name of interface e.g. IChat>
  GetAll():Observable<any>{
    //TODO Find the correct URL
    return this.http.get("http://localhost/3000")
  }
}
