import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private apiUrl = 'http://localhost:3000/songs';

  constructor(private http: HttpClient) {}

  getSongs(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}