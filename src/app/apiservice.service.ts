import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable, ɵɵngDeclareClassMetadata } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  apiurl = "http://localhost:3000/users/"
  cpiurl = "http://localhost:3000/user/"
  nameurl = "http://localhost:3000/user/name/"
  //get all data from database
  constructor(private http:HttpClient) { }
  getAlluser():Observable<any> {
    return this.http.get(`${this.apiurl}`)
  }
  createData(data:any):Observable<any>{
    console.log(data,"Data created")
    return this.http.post(`${this.cpiurl}`,data)
  }
  deleteData(id:any):Observable<any>{
    let ids = id
    return this.http.delete(`${this.cpiurl}${ids}`)
  }
  updateData(data:any,id:any):Observable<any>{
    let ids = id
    return this.http.put(`${this.cpiurl}${ids}`,data)
  }
  getSingleData(id:any):Observable<any>{
    let ids = id
    return this.http.get(`${this.cpiurl}${ids}`)

  }
  getUserName(name:any):Observable<any>{
    let names = name
    return this.http.get(`${this.nameurl}${names}`)
  }

}



