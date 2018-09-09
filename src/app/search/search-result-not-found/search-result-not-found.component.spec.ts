import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultNotFoundComponent } from './search-result-not-found.component';

describe('SearchResultNotFoundComponent', () => {
  let component: SearchResultNotFoundComponent;
  let fixture: ComponentFixture<SearchResultNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
