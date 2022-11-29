import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly URL = environment.API_URL;
  constructor(private http: HttpClient) { }

  get_single_property(id: String): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.URL + '/properties/' + id, {
      observe: 'response'
    });
  }

  get_all_properties(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.URL + '/properties/' , {
      observe: 'response'
    });
  }

  create_property(request_obj: Object): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.URL + '/properties/', request_obj, {
      observe: 'response'
    });
  }

  remove_property(id: String): Observable<HttpResponse<any>> {
    return this.http.delete<any>(this.URL + '/properties/' + id, {
      observe: 'response'
    });
  }

  update_property(id: String, request_obj: Object): Observable<HttpResponse<any>> {
    return this.http.put<any>(this.URL + '/properties/' + id, request_obj, {
      observe: 'response'
    });
  }
}
