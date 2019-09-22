import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoolToggleComponent } from './bool-toggle.component';

describe('BoolToggleComponent', () => {
  let component: BoolToggleComponent;
  let fixture: ComponentFixture<BoolToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoolToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoolToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
