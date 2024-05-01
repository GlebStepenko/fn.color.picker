import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {ColorPickerIconComponent} from '../../../library/src/lib/color.picker.icon/color.picker.icon.component';


interface IControlForm {
  color1: FormControl<string>;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ColorPickerIconComponent,
    MatIcon,
    ReactiveFormsModule,
    MatButton,
    MatIcon
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test.application';
  formData: FormGroup<IControlForm>;
  curColor?: string;
  isDisabled: boolean = false;
  constructor() {
    this.formData = new FormGroup<IControlForm>({
      color1: new FormControl({value: '', disabled: false}, {nonNullable: true}),
    });
  }

  changeDisabled() {
    if (this.formData.controls.color1.disabled) {
      this.formData.controls.color1.enable()
    }else {
      this.formData.controls.color1.disable()
    }
  }
  
  changeDisabledInput() {
    this.isDisabled = !this.isDisabled;
  }
  
  onColorChanged(color: string): void {
    console.log(color);
  }
  
  changeColorReactive() {
    this.formData.patchValue({
      color1: 'green'
    })
  }
  
  changeColor() {
    this.curColor = 'red'
  }
  changeColorBlue() {
    this.curColor = 'blue'
  }
  
  
}
