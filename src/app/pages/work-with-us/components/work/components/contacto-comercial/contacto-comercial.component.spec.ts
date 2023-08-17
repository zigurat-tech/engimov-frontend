import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoComercialComponent } from './contacto-comercial.component';

describe('ContactoComercialComponent', () => {
  let component: ContactoComercialComponent;
  let fixture: ComponentFixture<ContactoComercialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactoComercialComponent]
    });
    fixture = TestBed.createComponent(ContactoComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
