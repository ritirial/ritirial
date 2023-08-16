import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  workExperience : Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    let work1 = {
      fecha : "2016-Presente",
      ubicacion : "Puebla, Pue",
      puesto : "mobile & web developer",
      empresa : "Nucliux",
      logros : [
        { descripcion : "HRA Soft by HRA Consulting Group" }
      ]
    };

    this.workExperience.push(work1);

  }
}
