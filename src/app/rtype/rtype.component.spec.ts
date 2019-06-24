import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtypeComponent } from './rtype.component';

describe('RtypeComponent', () => {
  let component: RtypeComponent;
  let fixture: ComponentFixture<RtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
