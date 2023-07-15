import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssosClubComponent } from './assos-club.component';

describe('AssosClubComponent', () => {
  let component: AssosClubComponent;
  let fixture: ComponentFixture<AssosClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssosClubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssosClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
