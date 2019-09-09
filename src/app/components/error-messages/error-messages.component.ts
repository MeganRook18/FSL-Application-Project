import {Component, Input} from "@angular/core";
import { ErrorType } from "../../shared/types";

@Component({
  selector: "app-error-messages",
  templateUrl: "./error-messages.component.html"
})
export class ErrorMessagesComponent {
  @Input() errors: ErrorType[] = [];
  @Input() path: string;
  public errorType = ErrorType;
}
