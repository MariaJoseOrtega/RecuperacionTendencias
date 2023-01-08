import { Component, OnInit } from '@angular/core';
import { UserHttpService } from '../services/User.Service'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userHttpService:UserHttpService) {
   }

  ngOnInit(): void {
    this.getUsers();
    this.getUser();
    this.createUser();
    this.updateUser();
    this.deleteUser();
  }

  getUsers() {
    const url = "localhost:4200";
    this.userHttpService.getAll().subscribe(
    response => {
      console.log(response);    }
  ); }

  getUser() {
    const url = "localhost:4200";
    this.userHttpService.getOne(1).subscribe(
    response => {
      console.log(response);    }
  ); }

  createUser() {
    const data=  {
        nombre:"Maria Jose",
        cedula: 1721329264,
        telefono: 0987177686,
        fechaNacimiento:2000,
        Residencia:"Quito",   
        rol:5,
    
    }
    this.userHttpService.store().subscribe(
    response => {
      console.log(response);    }
  ); }

  updateUser() {
    const data=  {
        telefono: 0987177685,
        fechaNacimiento:2001,
        rol:6,
    }
    this.userHttpService.update(1).subscribe(
    response => {
      console.log(response);    }
  ); }


  deleteUser() {
    this.userHttpService.destroy(1).subscribe(
    response => {
      console.log(response);
    }
  ); 
  }
}