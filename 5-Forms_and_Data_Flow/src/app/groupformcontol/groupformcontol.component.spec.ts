import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupformcontolComponent } from './groupformcontol.component';

describe('GroupformcontolComponent', () => {
  let component: GroupformcontolComponent;
  let fixture: ComponentFixture<GroupformcontolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupformcontolComponent]
    });
    fixture = TestBed.createComponent(GroupformcontolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
