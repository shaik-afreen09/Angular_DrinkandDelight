import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawmaterialProcessDateComponent } from './rawmaterial-process-date.component';

describe('RawmaterialProcessDateComponent', () => {
  let component: RawmaterialProcessDateComponent;
  let fixture: ComponentFixture<RawmaterialProcessDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawmaterialProcessDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawmaterialProcessDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
