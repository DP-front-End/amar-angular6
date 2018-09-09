import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ComapanyDetailsComponent} from './comapany-register-step1.component';

describe('ComapanyDetailsComponent', () => {
  let component: ComapanyDetailsComponent;
  let fixture: ComponentFixture<ComapanyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComapanyDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComapanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
