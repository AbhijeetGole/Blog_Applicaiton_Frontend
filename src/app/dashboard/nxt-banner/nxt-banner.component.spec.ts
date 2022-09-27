import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NxtBannerComponent } from './nxt-banner.component';

describe('NxtBannerComponent', () => {
  let component: NxtBannerComponent;
  let fixture: ComponentFixture<NxtBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NxtBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NxtBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
