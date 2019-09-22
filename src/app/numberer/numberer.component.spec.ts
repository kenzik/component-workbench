import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbererComponent } from './numberer.component';

describe('NumbererComponent', () => {
  let component: NumbererComponent;
  let fixture: ComponentFixture<NumbererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
