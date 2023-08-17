import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanteraDeEmpleoComponent } from './cantera-de-empleo.component';

describe('CanteraDeEmpleoComponent', () => {
  let component: CanteraDeEmpleoComponent;
  let fixture: ComponentFixture<CanteraDeEmpleoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanteraDeEmpleoComponent]
    });
    fixture = TestBed.createComponent(CanteraDeEmpleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
