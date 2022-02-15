import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';

@Injectable({ providedIn: 'root' })
export class SerService {
  user = new BehaviorSubject('');
  constructor(private http: HttpClient) {}
  formDetails(details: any) {
    return this.http.post('http://localhost:3000/', details); //.subscribe(res=>{
    // console.log(res)
    // });  
  }
//   practice to pull msg
  count() {
    return this.http.get('http://localhost:3000/std');
  }
  del(id: string) {
    return this.http.post('http://localhost:3000/del', { id: id });
  }

  find(id: object) {
    return this.http.post('http://localhost:3000/find', id);
  }
  update(data:any){
    return this.http.post('http://localhost:3000/update',data)
  }
  debSearch(name:any){
    return this.http.post('http://localhost:3000/debSearch',{name:name})
  }
  // commit
}
