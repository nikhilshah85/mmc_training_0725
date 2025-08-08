import { ComponentFixture, TestBed } from '@angular/core/testing';

import { West } from './west';

describe('West', () => {
  let component: West;
  let fixture: ComponentFixture<West>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [West]
    })
    .compileComponents();

    fixture = TestBed.createComponent(West);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
