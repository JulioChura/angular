import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HelloWorldComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-dream-app';
  name: string;
  email;
  webpage: string;
  hobbies : string[];
  showHobbies: boolean;
  constructor() {
    console.log("Constructor working...")
    this.name = "Julio Chura";
    this.email = "jchuraaca@unsa.edu.pe"
    this.webpage = "http://www.unsa.edu.pe"
    this.hobbies = ["Pintura", "Desarrollo Web", "Futbol", "Ajedrez"]
    this.showHobbies  = false;
  }
  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }
  newHobby(hobby : any) {
    console.log(hobby)
    this.hobbies.push(hobby.value);
    hobby.value = ""
    return false;
  }
}
