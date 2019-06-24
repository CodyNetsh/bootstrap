import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RrtComponent } from './rrt.component';

describe('RrtComponent', () => {
  let component: RrtComponent;
  let fixture: ComponentFixture<RrtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RrtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
