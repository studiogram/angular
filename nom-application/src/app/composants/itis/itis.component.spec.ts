import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItisComponent } from './itis.component';

describe('ItisComponent', () => {
  let component: ItisComponent;
  let fixture: ComponentFixture<ItisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
