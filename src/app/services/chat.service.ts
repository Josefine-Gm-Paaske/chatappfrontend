import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http:HttpClient) { }
//<navn på interface fx. IChat>
  GetAll():Observable<any>{
    //Ikke den rigtige url
    return this.http.get("http://localhost/3000")
  }
}
