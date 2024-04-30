import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCustomColorComponent } from './dialog.custom.color.component';

describe('DialogCustomColorComponent', () => {
  let component: DialogCustomColorComponent;
  let fixture: ComponentFixture<DialogCustomColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogCustomColorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogCustomColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
