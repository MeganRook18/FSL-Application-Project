import { Component, Input } from "@angular/core";
import { ErrorType } from "../../shared/types";

@Component({
  selector: "app-error-messages",
  templateUrl: "./error-messages.component.html",
  styleUrls: ["./error-messages.component.scss"]
})
export class ErrorMessagesComponent {
  @Input() errors: ErrorType[] = [];
  public errorType = ErrorType;
}
