import { Component } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent {
  languages : Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    let language1 = {
      idioma : "Inglés",
    };

    this.languages.push(language1);
    
  }
}
