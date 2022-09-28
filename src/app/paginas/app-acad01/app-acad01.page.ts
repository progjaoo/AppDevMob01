import { AppPage } from './../../../../e2e/src/app.po';
import { ApplicationInitStatus, ApplicationModule, Component, OnInit } from '@angular/core';
import { AppAcad01PageModule } from './app-acad01.module';
import { close } from 'inspector';

@Component({
  selector: 'app-app-acad01',
  templateUrl: './app-acad01.page.html',
  styleUrls: ['./app-acad01.page.scss'],
})
export class AppAcad01Page implements OnInit {
  plateform: any;

  constructor() { }
  ngOnInit() {
  }
  exitApp() {
    navigator['AppAcad'].exitApp();
  }

}
