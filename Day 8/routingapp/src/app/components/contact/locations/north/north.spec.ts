import { ComponentFixture, TestBed } from '@angular/core/testing';

import { North } from './north';

describe('North', () => {
  let component: North;
  let fixture: ComponentFixture<North>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [North]
    })
    .compileComponents();

    fixture = TestBed.createComponent(North);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
