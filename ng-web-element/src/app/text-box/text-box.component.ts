import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

type textType = 'text' | 'number' | 'date';

@Component({
  selector: 'app-text-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.less'],
})
export class TextBoxComponent {
  @Input()
  label!: string;

  @Input()
  info!: string;

  @Input()
  type: textType = 'text';

  @Output()
  handleChange = new EventEmitter<any>();
}
