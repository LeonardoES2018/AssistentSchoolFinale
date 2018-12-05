import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


/**
 * Generated class for the TelaInicialAlunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tela-inicial-aluno',
  templateUrl: 'tela-inicial-aluno.html',
})
export class TelaInicialAlunoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TelaInicialAlunoPage');
  }

  isSair(){
    this.navCtrl.setRoot(HomePage);
  }

}
