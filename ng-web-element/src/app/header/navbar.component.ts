import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone:true,
  imports:[CommonModule]
})
export class NavbarComponent implements OnInit {

  @Input() logo!: string;
  @Input() items: string[]=[];
  @Input() title!: string;
  constructor() { }

  ngOnInit() {
  }

}
