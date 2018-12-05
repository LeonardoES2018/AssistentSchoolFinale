import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TelaSalasProfessorPage } from '../tela-salas-professor/tela-salas-professor';

/**
 * Generated class for the TelaInicialProfessorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tela-inicial-professor',
  templateUrl: 'tela-inicial-professor.html',
})
export class TelaInicialProfessorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TelaInicialProfessorPage');
  }

  isTurma(){
    this.navCtrl.setRoot(TelaSalasProfessorPage);
  }

}
