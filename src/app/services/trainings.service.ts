import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {
  constructor(private http: HttpClient) { }

  getAllTrainings(): Observable<any> {
    return this.http.get('/trainings/getAllTrainings');
  }

  getTrainingById(id: number): Observable<any> {
    return this.http.get(`/trainings/${id}`);
  }
}
