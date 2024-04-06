import { Component, Input } from '@angular/core';
import { RandomNumberBelow } from '../random';

@Component({
  selector: 'app-random-table',
  templateUrl: './random-table.component.html',
  styleUrls: ['./random-table.component.css'],
})
export class RandomTableComponent {
  @Input() header?: string;
  @Input() values?: string[];
  selectedValue?: number;

  randomRoll(): void {
    let numberOfValues: number = this.values?.length ? this.values.length : 0;
    this.selectedValue = RandomNumberBelow(numberOfValues);
  }
}
