import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-competences',
  templateUrl: './skills-competences.component.html',
  styleUrls: ['./skills-competences.component.css']
})
export class SkillsCompetencesComponent {
  skillsAndCompetences : Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    let item1 = {
      habilidad : "Multitarea",
      porcentaje : 70,
    };

    let item2 = {
      habilidad : "Enfocado en objetivos",
      porcentaje : 100,
    };

    let item3 = {
      habilidad : "Comunicación verbal y escrita",
      porcentaje : 80,
    };

    let item4 = {
      habilidad : "Liderazgo",
      porcentaje : 70,
    };

    let item5 = {
      habilidad : "Creatividad",
      porcentaje : 30,
    };

    let item6 = {
      habilidad : "Administración de tiempos",
      porcentaje : 80,
    };

    this.skillsAndCompetences.push(item1);
    this.skillsAndCompetences.push(item2);
    this.skillsAndCompetences.push(item3);
    this.skillsAndCompetences.push(item4);
    this.skillsAndCompetences.push(item5);
    this.skillsAndCompetences.push(item6);
    
  }
}
