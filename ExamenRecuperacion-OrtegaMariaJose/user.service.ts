import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUser, userModel, UpdateUser } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {
  readonly API_URL: string ='localhost:4200'
  constructor(private  httpUser: HttpUser){}

    getAll() {
      const url =  `${this.API_URL}`;
      return this.httpUser.get(url);
     }
  
    getOne(id:number) {
      const url =  `${this.API_URL}/${id}`;
      return this.httpUser.get(url);
     }
  
    user(user: CreateUser) {
      const data=  {
        nombre:"Maria Jose",
        cedula: 1721329264,
        telefono: 0987177686,
        fechaNacimiento:2000,
        Residencia:"Quito",   
        rol:5,
      }
      const url =  `${this.API_URL}`;
      return this.httpUser.post(url, data)}
  
    update(id:number,user: UpdateUser) {
      const data=  {
        telefono: 0987177685,
        fechaNacimiento:2001,
        rol:6,
      }
      const url = "localhost:4200";
      return this.httpUser.put(url, data);}
  
  
    destroy(id:number) {
      const url =  `${this.API_URL}/${id}`;
      return this.httpUser.delete(url);
     }
}