import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather: any;
  location: {
    city: string,
    state: string
  }

  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider) {

  }

  ionViewWillEnter(){ //ngOnInit
    this.showWeather();    
  }

  async showWeather(){
    this.location = {
      city: 'Miami',
      state: 'FL'
    }
    let { city, state } = this.location;
    try {
      await this.weatherProvider.getCityWeather(city);
      // console.log(weather);
    } catch (error) {
      console.log(error.message);
    }
    
  }

}
