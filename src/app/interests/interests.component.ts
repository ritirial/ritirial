import { Component } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent {
  interests : Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    let interest1 = {
      interes : "UX",
    };

    let interest2 = {
      interes : "Desarrollo movil",
    };

    let interest3 = {
      interes : "Desarrollo de videojuegos",
    };

    this.interests.push(interest1);
    this.interests.push(interest2);
    this.interests.push(interest3);
    
  }
}
