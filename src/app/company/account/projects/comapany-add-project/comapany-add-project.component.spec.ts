import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComapanyAddProjectComponent } from './comapany-add-project.component';

describe('ComapanyAddProjectComponent', () => {
  let component: ComapanyAddProjectComponent;
  let fixture: ComponentFixture<ComapanyAddProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComapanyAddProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComapanyAddProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
