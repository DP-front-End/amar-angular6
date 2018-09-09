import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ComapanyTimeDurationComponent} from './comapany-register-step2.component';

describe('ComapanyTimeDurationComponent', () => {
  let component: ComapanyTimeDurationComponent;
  let fixture: ComponentFixture<ComapanyTimeDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComapanyTimeDurationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComapanyTimeDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
