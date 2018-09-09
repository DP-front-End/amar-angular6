import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAmaarComponent } from './about-amaar.component';

describe('AboutAmaarComponent', () => {
  let component: AboutAmaarComponent;
  let fixture: ComponentFixture<AboutAmaarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutAmaarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAmaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
