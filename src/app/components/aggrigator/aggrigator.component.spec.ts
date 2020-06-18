import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggrigatorComponent } from './aggrigator.component';

describe('AggrigatorComponent', () => {
  let component: AggrigatorComponent;
  let fixture: ComponentFixture<AggrigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggrigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggrigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
