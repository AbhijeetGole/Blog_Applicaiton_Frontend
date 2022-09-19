import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupBannerComponent } from './signup-banner.component';

describe('SignupBannerComponent', () => {
  let component: SignupBannerComponent;
  let fixture: ComponentFixture<SignupBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
