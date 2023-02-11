import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.less'],
})
export class TextBoxComponent {
  @Input() label!: string;
  @Input() info!: string;
  @Input() type = 'text';
  @Output() handleChange = new EventEmitter<any>();
}
