import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewaccountdetails } from './viewaccountdetails';

describe('Viewaccountdetails', () => {
  let component: Viewaccountdetails;
  let fixture: ComponentFixture<Viewaccountdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Viewaccountdetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewaccountdetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
