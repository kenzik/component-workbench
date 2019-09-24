import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledSelectComponent } from './styled-select.component';

describe('StyledSelectComponent', () => {
  let component: StyledSelectComponent;
  let fixture: ComponentFixture<StyledSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyledSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyledSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
