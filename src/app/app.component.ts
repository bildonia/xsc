import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StandingsComponent } from './standings/standings.component';
import { AddTimeComponent } from './add-time/add-time.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StandingsComponent, AddTimeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'xsc';
}
