import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerDefaultPanelComponent } from './color.picker.default.panel.component';

describe('ColorPickerDefaultPanelComponent', () => {
  let component: ColorPickerDefaultPanelComponent;
  let fixture: ComponentFixture<ColorPickerDefaultPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorPickerDefaultPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorPickerDefaultPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
