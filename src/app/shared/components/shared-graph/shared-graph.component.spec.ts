import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedGraphComponent } from './shared-graph.component';

describe('SharedGraphComponent', () => {
  let component: SharedGraphComponent;
  let fixture: ComponentFixture<SharedGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
