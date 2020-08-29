import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'translate';
  userName = {
    name: "EVA"
  }

  constructor(private translate:TranslateService) {
   const lang = window.localStorage.getItem('lang');

    if(lang){
      this.translate.use(lang)
    }

  }

  changeTo(lang:string){
    window.localStorage.setItem('lang' , lang)
    this.translate.use(lang)
  }


}
