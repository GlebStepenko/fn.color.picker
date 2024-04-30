import { Component } from '@angular/core';
import {ColorPickerIconComponent} from '../../../../dist/library';
import {MatIcon} from '@angular/material/icon';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';


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
  constructor() {
    this.formData = new FormGroup<IControlForm>({
      color1: new FormControl({value: 'red', disabled: false}, {nonNullable: true}),
    });
  }

  changeDisabled() {
    if (this.formData.controls.color1.disabled) {
      this.formData.controls.color1.enable()
    }else {
      this.formData.controls.color1.disable()
    }
  }
  
  onColorChanged(color: string): void {
    console.log(color);
  }
  
  changeColor() {
    this.formData.patchValue({
      color1: 'green'
    })
  }
}
