import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() logo!: string;
  @Input() title!: string;

  _items!: string;
  get items() {
    if(this._items)
      return JSON.parse(this._items);
    return "";
  }
  @Input() set items(value: string) {
    this._items = value;
  }
  constructor() {}

  ngOnInit() {}
}
