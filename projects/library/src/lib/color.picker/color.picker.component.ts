import {ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, input, output, ViewChild} from '@angular/core';
import {ColorPickerDefaultPanelComponent} from '../color.picker.default.panel/color.picker.default.panel.component';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {MatMenuTrigger} from '@angular/material/menu';

type ModelChangeFunction = (value: string) => void;
type ModelTouchedFunction = () => void;

@Component({
  selector: 'fn-color-picker',
  standalone: true,
  imports: [
    ColorPickerDefaultPanelComponent,
    MatIconButton,
    MatIcon
  ],
  templateUrl: './color.picker.component.html',
  styleUrl: './color.picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorPickerComponent),
      multi: true
    }
  ],
})
export class ColorPickerComponent implements ControlValueAccessor  {
  anotherColorTitle = input<string>('Choose a color not from the palette');
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  colorChanged = output<string>();
  color?: string;

  constructor(private readonly _ref: ChangeDetectorRef, private readonly _d: MatDialog) {
  }

  onModelChange: ModelChangeFunction = () => {};
  onModelTouched: ModelTouchedFunction = () => {};

  registerOnChange(fn: (data: string) => void): void {
    this.onModelChange = fn;
  }
  
  registerOnTouched(fn: () => void): void {
    this.onModelTouched = fn;
  }
  
  writeValue(obj: string): void {
    this.color = obj;
  }
  
  onColorChange(color: string): void {
    this.color = color;
    this.onModelChange(color);
    this._ref.detectChanges();
    if (this.colorChanged) {
      this.colorChanged.emit(color);
    }
  }
  
  async otherColorClick(event: MouseEvent): Promise<void> {
    event.stopImmediatePropagation();
    const { DialogCustomColorComponent } = await import( '../dialog.custom.color/dialog.custom.color.component');
    this._d.open(DialogCustomColorComponent.getDialog(), {
      width: '250px',
      data: {
        color: this.color
      }
    }).afterClosed().pipe(
    ).subscribe({
      next: color => this.onColorChange(color),
    });
  }
}
