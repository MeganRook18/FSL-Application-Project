import { NgModule } from "@angular/core";
import {
  MatCardModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule, MatTableModule, MatIconModule, MatMenuModule, MatSortModule
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
    MatSortModule,
  ]
})
export class MaterialModule {}
