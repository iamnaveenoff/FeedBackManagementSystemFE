import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import { Feedback } from '../models/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedBackApiService {
  private host = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {
  }

  saveFeedback(feedback): Observable<any> {
    return this.http.post<any>(`${this.host}/saveFeedback`, feedback);
  }

}

