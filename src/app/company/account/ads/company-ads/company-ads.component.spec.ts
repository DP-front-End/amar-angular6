import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAdsComponent } from './company-ads.component';

describe('CompanyAdsComponent', () => {
  let component: CompanyAdsComponent;
  let fixture: ComponentFixture<CompanyAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
