import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedDataComponent } from './nested-data.component';

describe('NestedDataComponent', () => {
  let component: NestedDataComponent;
  let fixture: ComponentFixture<NestedDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
