import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanypediaComponent } from './companypedia.component';

describe('CompanypediaComponent', () => {
  let component: CompanypediaComponent;
  let fixture: ComponentFixture<CompanypediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanypediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanypediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
