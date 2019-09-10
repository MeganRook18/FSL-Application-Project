import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Component, Input } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { SignInComponent } from "./sign-in.component";
import { MaterialModule } from "../../shared/material.modules";
import { ErrorType } from "../../shared/types";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {RouterTestingModule} from "@angular/router/testing";

@Component({
  selector: "app-error-messages",
  template: "<p>  Error Messages Component </p>"
})
export class MocKErrorMessagesComponent {
  @Input() errors: ErrorType[] = [];
  @Input() path: string;
}

describe("SignInComponent", () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        RouterTestingModule,
      ],
      declarations: [SignInComponent, MocKErrorMessagesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
