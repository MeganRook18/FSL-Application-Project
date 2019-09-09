import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

import { PreAuthenticationComponent } from "./pre-authentication.component";
import {MaterialModule} from "../../shared/material.modules";

describe("PreAuthenticationComponent", () => {
  let component: PreAuthenticationComponent;
  let fixture: ComponentFixture<PreAuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule,
        HttpClientTestingModule,
      ],
      declarations: [ PreAuthenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
