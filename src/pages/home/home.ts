import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { TelaPerfilPage } from '../tela-perfil/tela-perfil';
import { TelaCadastroPage, User } from '../tela-cadastro/tela-cadastro';
import { UsersProvider } from '../../providers/users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  model:User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private userProvider: UsersProvider) {
  let name = navParams.get(this.model.name);
    this.model.password;
    this.model.type;
    console.log(name);
  }

  isTelaPerfil(){
    this.navCtrl.setRoot(TelaPerfilPage, {
      name:name
    });
  }

  isTelaCadastrar(){
    this.navCtrl.setRoot(TelaCadastroPage);
  }

  getUser() {
    this.userProvider.createAccount(this.model.name, this.model.email, this.model.password, this.model.type)
      .then((result: any) => {
        this.toast.create({ message: 'Usuário criado com sucesso. Token: ' + result.token, position: 'botton', duration: 3000 }).present();
        this.navCtrl.setRoot(TelaPerfilPage);
        //Salvar o token no Ionic Storage para usar em futuras requisições.
        //Redirecionar o usuario para outra tela usando o navCtrl
        //this.navCtrl.pop();
        //this.navCtrl.setRoot()
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao criar o usuário. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  } 


}

