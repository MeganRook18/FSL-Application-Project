import { NgModule } from "@angular/core";
import {
  MatCardModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule, MatTableModule, MatIconModule, MatMenuModule
} from "@angular/material";
import {MatPasswordStrengthModule} from "@angular-material-extensions/password-strength";

@NgModule({
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatPasswordStrengthModule,
    MatMenuModule,
  ]
})
export class MaterialModule {}
