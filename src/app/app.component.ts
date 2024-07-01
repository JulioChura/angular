import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-dream-app';
  name: string;
  email;
  webpage: string;
  hobbies : string[]
  constructor() {
    console.log("Constructor working...")
    this.name = "Julio Chura";
    this.email = "jchuraaca@unsa.edu.pe"
    this.webpage = "http://www.unsa.edu.pe"
    this.hobbies = ["Pintura", "Desarrollo Web", "Futbol", "Ajedrez"]
  }
  showHobbies() {
    return true;
  }
}
