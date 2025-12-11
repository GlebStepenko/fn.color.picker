import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {ColorPickerIconComponent} from '../../../library/src/lib/color.picker.icon/color.picker.icon.component';
import {ColorPickerComponent} from '../../../library/src/lib/color.picker/color.picker.component';


interface IControlForm {
  color0: FormControl<string>;
  color1: FormControl<string>;
}

@Component({
  selector: 'app-root',
  imports: [
    ColorPickerIconComponent,
    ColorPickerComponent,
    ReactiveFormsModule,
    MatButton,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'test.application';
  formData: FormGroup<IControlForm>;
  curColor?: string = 'green';
  isDisabled: boolean = false;

  colorList: Array<{ name: string; color: string}> = [];
  constructor(private readonly _ref: ChangeDetectorRef) {
    this.formData = new FormGroup<IControlForm>({
      color0: new FormControl({value: '', disabled: false}, {nonNullable: true}),
      color1: new FormControl({value: '', disabled: false}, {nonNullable: true}),
    });
  }

  changeDisabled() {
    if (this.formData.controls.color1.disabled) {
      this.formData.controls.color1.enable()
    }else {
      this.formData.controls.color1.disable()
    }

    if (this.formData.controls.color0.disabled) {
      this.formData.controls.color0.enable()
    }else {
      this.formData.controls.color0.disable()
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



  generate() {
    this.colorList.push({
      name: 'red',
      color: 'red'
    });


    this.colorList.push({
      name: 'green',
      color: 'green'
    });

    this.colorList.push({
      name: 'black',
      color: 'black'
    });
    // this._ref.markForCheck()
    // this._ref.detectChanges()

  }
  change2() {
    this.colorList[1].color = 'orange'
  }


  onSubmit() {
    console.log('onSubmit');
  }



}
