import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.css']
})
export class LanguagePickerComponent implements OnInit{

  public title;//local storage test

  constructor(private translate: TranslateService) {
    if (localStorage.getItem('myLang')) {
      translate.setDefaultLang(localStorage.getItem('myLang'));
      translate.use(localStorage.getItem('myLang'));
    } else {
      translate.setDefaultLang('lv');
      translate.use('lv');
    }
  }

  ngOnInit(): void {
    this.title = localStorage.getItem('myLang');//localstorage test
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    this.translate.setDefaultLang(language);
    localStorage.setItem('myLang', language);
  }

}
