import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLearnComponent } from './users-learn.component';

describe('UsersLearnComponent', () => {
  let component: UsersLearnComponent;
  let fixture: ComponentFixture<UsersLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersLearnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
