import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerIconComponent } from './color.picker.icon.component';

describe('ColorPickerIconComponent', () => {
  let component: ColorPickerIconComponent;
  let fixture: ComponentFixture<ColorPickerIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorPickerIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorPickerIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
