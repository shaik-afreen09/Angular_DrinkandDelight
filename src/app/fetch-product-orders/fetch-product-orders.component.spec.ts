import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchProductOrdersComponent } from './fetch-product-orders.component';

describe('FetchProductOrdersComponent', () => {
  let component: FetchProductOrdersComponent;
  let fixture: ComponentFixture<FetchProductOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchProductOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchProductOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
