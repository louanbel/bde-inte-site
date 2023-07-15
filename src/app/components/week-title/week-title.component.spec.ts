import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekTitleComponent } from './week-title.component';

describe('WeekTitleComponent', () => {
  let component: WeekTitleComponent;
  let fixture: ComponentFixture<WeekTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
