import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements-certificates',
  templateUrl: './achievements-certificates.component.html',
  styleUrls: ['./achievements-certificates.component.css']
})
export class AchievementsCertificatesComponent {
  achievementsCertificates : Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    let achievement1 = {
      logro : "Ponente en Encuentro de Jovenes Investigadores (2013) en Salamanca, España",
    };

    let achievement2 = {
      logro : "Participante en Concurso Nacional de Ciencia y Tecnología de CECyTEs (2011) en Tijuana, Baja California",
    };

    this.achievementsCertificates.push(achievement1);
    this.achievementsCertificates.push(achievement2);
    
  }
}
