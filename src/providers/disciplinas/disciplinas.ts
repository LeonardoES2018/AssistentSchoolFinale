import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DisciplinasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DisciplinasProvider {
  private API_URL = 'http://192.168.101.156:8001/api';

  constructor(public http: HttpClient) {
    console.log('Hello DisciplinasProvider Provider');
  }

  /*createAccount(name:string, email: string, password: string, type: string) {
    return new Promise((resolve, reject) => {
      var data = {
        name: name,
        email: email,
        password: password,
        type: type
      };
 
      this.http.post(this.API_URL + '/register', data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }*/

}
