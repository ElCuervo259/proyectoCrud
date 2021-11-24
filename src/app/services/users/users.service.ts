import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  deleteUser(id:number): Observable<any>{
    return this.http.delete('https://jsonplaceholder.typicode.com/users/' + id);
  }
}
