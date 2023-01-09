import { Injectable } from '@angular/core';
import { IClient } from './client';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };

  clientUrl: string = 'http://localhost:8080/event/client/';

  constructor(private http: HttpClient) { }

  addClient(client: IClient): Observable<IClient> {
    return this.http.post<IClient>(this.clientUrl, client, this.httpOptions)
  }
}
