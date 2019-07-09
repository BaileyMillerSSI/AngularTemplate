import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatButtonComponent } from './float-button.component';

describe('FloatButtonComponent', () => {
  let component: FloatButtonComponent;
  let fixture: ComponentFixture<FloatButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
