import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarWorldComponent } from './avatar-world.component';

describe('AvatarWorldComponent', () => {
  let component: AvatarWorldComponent;
  let fixture: ComponentFixture<AvatarWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
