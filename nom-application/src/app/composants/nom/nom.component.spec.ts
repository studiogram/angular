import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomComponent } from './nom.component';

describe('NomComponent', () => {
  let component: NomComponent;
  let fixture: ComponentFixture<NomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
