import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouclesComponent } from './boucles.component';

describe('BouclesComponent', () => {
  let component: BouclesComponent;
  let fixture: ComponentFixture<BouclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BouclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
