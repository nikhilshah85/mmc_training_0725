import { ComponentFixture, TestBed } from '@angular/core/testing';

import { South } from './south';

describe('South', () => {
  let component: South;
  let fixture: ComponentFixture<South>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [South]
    })
    .compileComponents();

    fixture = TestBed.createComponent(South);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
