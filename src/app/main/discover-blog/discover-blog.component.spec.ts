import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverBlogComponent } from './discover-blog.component';

describe('DiscoverBlogComponent', () => {
  let component: DiscoverBlogComponent;
  let fixture: ComponentFixture<DiscoverBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
