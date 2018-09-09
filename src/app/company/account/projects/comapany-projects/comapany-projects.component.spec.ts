import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComapanyProjectsComponent } from './comapany-projects.component';

describe('ComapanyProjectsComponent', () => {
  let component: ComapanyProjectsComponent;
  let fixture: ComponentFixture<ComapanyProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComapanyProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComapanyProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
