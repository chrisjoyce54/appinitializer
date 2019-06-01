import { Component, OnInit } from '@angular/core';
import { ConfigServiceService } from './config-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-app-initializer-demo-app';
  constructor(private config: ConfigServiceService) { }

  ngOnInit(): void {
    console.log(this.config.configurations.server);
  }

}
