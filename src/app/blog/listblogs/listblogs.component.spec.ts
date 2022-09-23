import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListblogsComponent } from './listblogs.component';

describe('ListblogsComponent', () => {
  let component: ListblogsComponent;
  let fixture: ComponentFixture<ListblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListblogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
