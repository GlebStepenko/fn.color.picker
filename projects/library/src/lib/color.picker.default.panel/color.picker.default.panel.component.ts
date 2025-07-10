import {Component, effect, input, output} from '@angular/core';
import {constDefaultColors} from '../library.const';

@Component({
  selector: 'fn-color-picker-default-panel',
  imports: [],
  templateUrl: './color.picker.default.panel.component.html',
  styleUrl: './color.picker.default.panel.component.scss'
})
export class ColorPickerDefaultPanelComponent {
  colors = input<Array<string>>(constDefaultColors);
  onColorSelect = output<string>({ alias: 'colorClick' });
}
