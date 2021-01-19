import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Books } from './Book';
@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private _http: HttpClient) { }

  fetchBookListFromRemote():Observable<any>{
    return this._http.get<Books[]>('http://localhost:8088/getbooklist');
  }

  addBookToRemote(book : Books){
    return this._http.post<Books>('http://localhost:8088/addbooks',book);
  }

  fetchBookByIDFromRemote(id: number){
    return this._http.get<Books[]>('http://localhost:8088/getbookbyid/'+id);
  }
}
