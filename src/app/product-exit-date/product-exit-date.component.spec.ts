import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductExitDateComponent } from './product-exit-date.component';

describe('ProductExitDateComponent', () => {
  let component: ProductExitDateComponent;
  let fixture: ComponentFixture<ProductExitDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductExitDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductExitDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
