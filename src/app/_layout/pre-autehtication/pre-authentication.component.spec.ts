import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreAuthenticationComponent } from './pre-authentication.component';

describe('PreAuthenticationComponent', () => {
  let component: PreAuthenticationComponent;
  let fixture: ComponentFixture<PreAuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreAuthenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
