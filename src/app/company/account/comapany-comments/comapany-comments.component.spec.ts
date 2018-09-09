import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComapanyCommentsComponent } from './comapany-comments.component';

describe('ComapanyCommentsComponent', () => {
  let component: ComapanyCommentsComponent;
  let fixture: ComponentFixture<ComapanyCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComapanyCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComapanyCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
