import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Training } from "../components/trainings/training";

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {
  private baseURL = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  getAllTrainings(): Observable<Training[]> {
    return this.http.get<Training[]>(`${this.baseURL}/trainings`);
  }

}

