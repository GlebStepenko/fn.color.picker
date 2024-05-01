import {Component, effect, forwardRef, HostBinding, input, output, TemplateRef, ViewChild} from '@angular/core';
import {MatMenu, MatMenuTrigger} from '@angular/material/menu';
import {MatButton, MatIconButton} from '@angular/material/button';
import {NgTemplateOutlet} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {ColorPickerDefaultPanelComponent} from '../color.picker.default.panel/color.picker.default.panel.component';
import {MatDialog} from '@angular/material/dialog';
import {finalize} from 'rxjs';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {constDefaultColors} from '../library.const';

type ModelChangeFunction = (value: string) => void;
type ModelTouchedFunction = () => void;

@Component({
  selector: 'fn-color-picker-icon',
  standalone: true,
  imports: [
    MatMenu,
    MatIconButton,
    MatMenuTrigger,
    NgTemplateOutlet,
    MatIcon,
    ColorPickerDefaultPanelComponent,
    MatButton
  ],
  templateUrl: './color.picker.icon.component.html',
  styleUrl: './color.picker.icon.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorPickerIconComponent),
      multi: true
    }
  ],
})
export class ColorPickerIconComponent implements ControlValueAccessor{
  color = input<string>();
  colorsPalette = input<Array<string>>(constDefaultColors);
  customIcon= input<TemplateRef<unknown> | null>(null);
  panelClass = input<string>('');
  disabled = input<boolean>(false);
  anotherColorTitle = input<string>('Choose a color not from the palette');
  anotherColorText = input<string>('Another color');
  removeTitle = input<string>('Remove color');
  colorChanged = output<string>();

  @HostBinding('class') classes = this.panelClass();
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  currentColor: string = '';
  isDisabled: boolean = false;
  constructor(private readonly _d: MatDialog) {
    effect(() => {
      this.currentColor = this.color() ?? ''
    });
    
    effect(() => {
      this.setDisabledState(this.disabled() ?? false)
    });
  }

  onModelChange: ModelChangeFunction = () => {};
  onModelTouched: ModelTouchedFunction = () => {};

  onColorChange(color: string): void {
    this.currentColor = color;
    this.onModelChange(color);
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
        color: this.currentColor
      }
    }).afterClosed().pipe(
     finalize(() => this.trigger.closeMenu())
    ).subscribe({
      next: color => this.onColorChange(color),
    });
  }

  registerOnChange(fn: ModelChangeFunction): void {
    this.onModelChange = fn;
  }
  
  registerOnTouched(fn: ModelTouchedFunction): void {
    this.onModelTouched = fn;
  }
  
  writeValue(color: string): void {
    this.currentColor = color;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

}
