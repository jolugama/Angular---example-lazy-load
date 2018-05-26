import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinLazyLoadComponent } from './sin-lazy-load.component';

describe('SinLazyLoadComponent', () => {
  let component: SinLazyLoadComponent;
  let fixture: ComponentFixture<SinLazyLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinLazyLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinLazyLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
