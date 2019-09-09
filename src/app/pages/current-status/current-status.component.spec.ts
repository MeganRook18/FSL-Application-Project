import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatTableModule } from "@angular/material";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

import { CurrentStatusComponent } from "./current-status.component";
import { MaterialModule } from "../../shared/material.modules";

describe("CurrentStatusComponent", () => {
  let component: CurrentStatusComponent;
  let fixture: ComponentFixture<CurrentStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        MatTableModule,
        HttpClientTestingModule,
        RouterModule,
        RouterTestingModule
      ],
      declarations: [CurrentStatusComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(CurrentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    component.policies = [
      {
        polId: 0,
        num: "PO0",
        amount: 100,
        userId: 1,
        description: "Insurance policy number POO"
      },
      {
        polId: 1,
        num: "PO1",
        amount: 1000,
        userId: 1,
        description: "Insurance policy number PO1"
      }
    ];
    component.currentUser.userId = 1;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
