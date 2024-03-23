import { Component } from '@angular/core';
import { Result, ResultComponent } from '../result/result.component';

@Component({
  selector: 'standings',
  standalone: true,
  imports: [ResultComponent],
  templateUrl: './standings.component.html',
  styleUrl: './standings.component.scss'
})
export class StandingsComponent {
    results: Result[] = [
        {
            class: "XB",
            driver: "Bill",
            time: 40.234,
            pax: 37.874,
            position: 1
        },
        {
            class: "XB",
            driver: "James",
            time: 41.111,
            pax: 38.324,
            position: 2
        },
    ]
}

