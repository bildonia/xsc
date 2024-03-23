import { Component, Input } from '@angular/core';

@Component({
  selector: 'result',
  standalone: true,
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {
    @Input() result!: Result;
}

export interface Result {
    driver: string;
    class: string;
    time: number;
    position?: number;
    pax?: number;
}