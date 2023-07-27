import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProductComponent } from './portfolio-product.component';

describe('PortfolioProductComponent', () => {
  let component: PortfolioProductComponent;
  let fixture: ComponentFixture<PortfolioProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioProductComponent]
    });
    fixture = TestBed.createComponent(PortfolioProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
