import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeiComponent } from './wei.component';

describe('WeiComponent', () => {
  let component: WeiComponent;
  let fixture: ComponentFixture<WeiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
