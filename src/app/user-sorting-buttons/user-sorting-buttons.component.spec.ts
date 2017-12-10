import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSortingButtonsComponent } from './user-sorting-buttons.component';

describe('UserSortingButtonsComponent', () => {
  let component: UserSortingButtonsComponent;
  let fixture: ComponentFixture<UserSortingButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSortingButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSortingButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
