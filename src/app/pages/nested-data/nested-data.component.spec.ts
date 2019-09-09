import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {Component, Input} from "@angular/core";
import {MatTableModule} from "@angular/material/table";
import {RouterModule} from "@angular/router";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

import { NestedDataComponent } from "./nested-data.component";
import {MaterialModule} from "../../shared/material.modules";

@Component({
    selector: "app-inner-table",
    template: "<p> Inner Table Component </p>",
})

export class MocKInnerTableComponent {
    @Input() polId: number;
}

describe("NestedDataComponent", () => {
  let component: NestedDataComponent;
  let fixture: ComponentFixture<NestedDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
          MaterialModule,
          MatTableModule,
          HttpClientTestingModule,
          RouterModule,
          RouterTestingModule,
      ],
      declarations: [ NestedDataComponent, MocKInnerTableComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
