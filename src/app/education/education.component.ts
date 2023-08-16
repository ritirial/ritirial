import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education : Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    let education1 = {
      fecha : "2013-Presente",
      titulo : "Ingeniería en Tecnologías Computacionales",
      escuela : "Instituto Tecnológico de Estudios Superiores de Monterrey, Campus Puebla",
    };

    let education2 = {
      fecha : "2010-2013",
      titulo : "Tecnico en Informática",
      escuela : "Colegio de Estudios Cientificos y Tecnológicos del Estado, Campus Tecamachalco",
    };

    this.education.push(education1);
    this.education.push(education2);
    
  }
}
