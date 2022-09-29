import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentblogComponent } from './recentblog.component';

describe('RecentblogComponent', () => {
  let component: RecentblogComponent;
  let fixture: ComponentFixture<RecentblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentblogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
