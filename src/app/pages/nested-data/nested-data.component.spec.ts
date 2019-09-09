import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {Component, Input} from "@angular/core";
import {MatTableModule} from "@angular/material/table";

import { NestedDataComponent } from "./nested-data.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MaterialModule} from "../../shared/material.modules";
import {RouterModule} from "@angular/router";

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
          RouterModule
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
