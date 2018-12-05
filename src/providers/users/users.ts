import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {
  private API_URL = 'http://192.168.101.166:8001/api';
  

  constructor(public http: Http) {
    console.log('Hello UsersProvider Provider');
  }

 createAccount(name:string, email: string, password: string, type: string) {
    return new Promise(resolve => {
      var data = {
        name: name,
        email: email,
        password: password,
        type: type
      };
 
      this.http.post(this.API_URL + '/professors', data)
        .subscribe(result => {
          resolve(result.json());
        },
        (error) => {
          console.log(error);
        });
    });
 } 

 getUser(id: number) {
  return new Promise((resolve, reject) => {
    let url = this.API_URL + '/professors?id=' + id;

    this.http.get(url)
      .subscribe((result: any) => {
        resolve(result.json());
      },
      (error) => {
        reject(error);
      });
  });
} 

/*  createAccount(nome:string) {
    return new Promise((resolve, reject) => {
      var data = {
        nome: nome
      };
 
      this.http.post(this.API_URL + '/marcas',data)
        .subscribe((result:any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error);
        });
    });
  } 
*/
  /*login(email: string, password: string, type: string, name:string) {
    return new Promise((resolve, reject) => {
      var data = {
        name: name,
        email: email,
        password: password,
        type: type
      };

      this.http.post(this.API_URL + 'login', data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }*/

}
