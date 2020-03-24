import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaxipediaComponent } from './avaxipedia.component';

describe('AvaxipediaComponent', () => {
  let component: AvaxipediaComponent;
  let fixture: ComponentFixture<AvaxipediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaxipediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaxipediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
