import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCreateAdComponent } from './company-create-ad.component';

describe('CompanyCreateAdComponent', () => {
  let component: CompanyCreateAdComponent;
  let fixture: ComponentFixture<CompanyCreateAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyCreateAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCreateAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
