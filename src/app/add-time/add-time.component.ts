import { Component, Input, Output } from '@angular/core';
import { Result } from '../result/result.component';
import { EventEmitter } from 'stream';

@Component({
  selector: 'add-time',
  standalone: true,
  templateUrl: './add-time.component.html',
  styleUrl: './add-time.component.scss'
})
export class AddTimeComponent {

    isAddingTime: boolean = false;
    newResult: Result = {
        class: "XA",
        driver: "Bill",
        time: 0
    };

    onAddTimeClick() {
        this.isAddingTime = true;
    }

    close() {
        this.isAddingTime = false;
    }

    save() {

        this.close();
    }
}
