import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { LoginComponent } from '../components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class ContributorService {

  constructor( private http: HttpClient) { }

userId = localStorage.getItem('userId');
token = localStorage.getItem('token');

  getAssignmentsByContributorIdUrl = `${'http://localhost:8080/assignment/getallbycontributorid/'}${this.userId}`;

  getAssignments(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token
    })
    
    const response = this.http.get<any>(this.getAssignmentsByContributorIdUrl, {headers } );
    console.log("header",headers);
    
    console.log("get Assignments",response);
    console.log("get assignments url : ",this.getAssignmentsByContributorIdUrl);
    console.log(response);
    
    return response;
  }


}