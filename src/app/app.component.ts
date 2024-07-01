import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-dream-app';
  name = "Julio Chura";
  email = "jchuraaca@unsa.edu.pe";
  webpage = "http://www.unsa.edu.pe";
}
