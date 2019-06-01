import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ConfigModel } from './config-model';

const dummyConfigs: any = {
  APIEndpoint: 'url_here',
  apiKey: 'abcdee'
};

@Injectable({
  providedIn: 'root'
})
export class ConfigServiceService {
  configurations: ConfigModel = null;

  constructor(private http: HttpClient) {}

  public getConfigs(): Promise<ConfigModel> {
    // this is where you would run a http service to fetch the congfiguratations
    // convert the response into a promise
    console.log('loading configurations');
    return this.http.get<ConfigModel>('../assets/config.json') // this could be a http request
      .pipe(
        tap(config => {
          this.configurations = config;
        })
      )
      .toPromise();

    // return of(dummyConfigs) // this could be a http request
    //   .pipe(
    //     tap(config => {
    //       this.configurations = config;
    //     })
    //   )
    //   .toPromise();
  }
}
