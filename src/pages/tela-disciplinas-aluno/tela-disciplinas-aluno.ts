import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TelaInicialAlunoPage } from '../tela-inicial-aluno/tela-inicial-aluno';
import { HomePage } from '../home/home';

/**
 * Generated class for the TelaDisciplinasAlunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tela-disciplinas-aluno',
  templateUrl: 'tela-disciplinas-aluno.html',
})
export class TelaDisciplinasAlunoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TelaDisciplinasAlunoPage');
  }

  isSair(){
    this.navCtrl.setRoot(HomePage);
  }

}
