import { ComponentFixture, TestBed } from '@angular/core/testing';

import { East } from './east';

describe('East', () => {
  let component: East;
  let fixture: ComponentFixture<East>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [East]
    })
    .compileComponents();

    fixture = TestBed.createComponent(East);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
