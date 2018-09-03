import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherProvider {
  apiKey = '6759604bc63ff2cd5813bd18194905d6';
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${this.apiKey}`;
  }

  async getWeather(city, state){
    let x = await this.http.get(`${this.url}`).toPromise();
    console.log(x);
  }

  // http://history.openweathermap.org/data/2.5/history/city?q=London,UK

  async getCityWeather(city){
    let url = `http://history.openweathermap.org/data/2.5/history/city`;
    let x = await this.http.get(`${url}?q=London,UK`).toPromise();
    console.log(x);
  }

}
