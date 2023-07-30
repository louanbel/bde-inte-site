import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentreeComponent } from './rentree.component';

describe('RentreeComponent', () => {
  let component: RentreeComponent;
  let fixture: ComponentFixture<RentreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
