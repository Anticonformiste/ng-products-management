import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output
} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() notify: EventEmitter<string> = new EventEmitter();

  ngOnChanges(): void {
    console.log('we are onChanges');
    // adopt the stars width based on product's rating
    this.starWidth = (this.rating * 75) / 5;
  }
  // send a payload to the container after clicking on the stars
  onClick(): void {
    this.notify.emit(`My width is: ${this.starWidth} px.`);
  }
}
