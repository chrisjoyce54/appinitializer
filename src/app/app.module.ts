import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfigServiceService } from './config-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function loadConfigurations(configService: ConfigServiceService) {
  console.log('Initializing');
  return () => configService.getConfigs();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ConfigServiceService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfigurations,
      deps: [ConfigServiceService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
