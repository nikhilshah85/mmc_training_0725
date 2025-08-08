import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Culture } from './culture';

describe('Culture', () => {
  let component: Culture;
  let fixture: ComponentFixture<Culture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Culture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Culture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
