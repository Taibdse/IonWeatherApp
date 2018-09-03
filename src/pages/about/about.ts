import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  tilte = 'Bui Duc Tai is so handsome!!!'
  constructor(public navCtrl: NavController) {
    console.log(this.tilte);
  }

}
