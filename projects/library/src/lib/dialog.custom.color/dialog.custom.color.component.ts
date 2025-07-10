import {Component, Inject} from '@angular/core';
import {ColorChromeModule} from 'ngx-color/chrome';
import {MatButton} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent} from '@angular/material/dialog';

interface IDialogCustomColorComponentInput{
  color: string;
}

@Component({
  selector: 'fn-dialog-custom-color',
  imports: [
    ColorChromeModule,
    MatButton,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose
  ],
  templateUrl: './dialog.custom.color.component.html',
  styleUrl: './dialog.custom.color.component.scss'
})
export class DialogCustomColorComponent {
  color: string;

  constructor(@Inject(MAT_DIALOG_DATA) data: IDialogCustomColorComponentInput) {
    this.color = data.color || '';
  }

  static getDialog(): typeof DialogCustomColorComponent {
    return DialogCustomColorComponent;
  }
}
