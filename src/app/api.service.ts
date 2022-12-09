import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchData=()=>{
    return this.http.get('http://localhost:8080/viewProducts')
  }
  sendData=(dataToSend:any)=>{
    return this.http.post('http://localhost:8080/addProducts',dataToSend)
  }
  searchData=(dataToSend:any)=>{
    return this.http.post('http://localhost:8080/searchProducts',dataToSend)
  }
  fetchUser=()=>{
    return this.http.get('http://localhost:8080/user')
  }  
  addUser=(dataToSend:any)=>{
    return this.http.post('http://localhost:8080/addUser',dataToSend)

  }
  searchUser=(dataToSend:any)=>{
    return this.http.post('http://localhost:8080/searchUser',dataToSend)
  }
  deleteProduct=(dataToSend:any)=>{
    return this.http.post('http://localhost:8080/deleteProducts',dataToSend)

  }
}
