import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTabsComponent } from './company-tabs.component';

describe('CompanyTabsComponent', () => {
  let component: CompanyTabsComponent;
  let fixture: ComponentFixture<CompanyTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
