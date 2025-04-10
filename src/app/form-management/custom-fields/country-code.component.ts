import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-country-code',
  template: `
    <mat-form-field appearance="fill" class="w-100">
      <!-- Label for the dropdown -->
      <mat-label>{{ props.label || 'Country Code' }}</mat-label>

      <!-- Country Code Selector -->
      <mat-select [formControl]="formControl" [formlyAttributes]="field">
        <mat-option *ngFor="let option of props.options" [value]="option.value">
          {{ option.label }}
        </mat-option>
      </mat-select>

      <!-- Error State Handling -->
      <mat-error *ngIf="showError">
        <formly-validation-message [field]="field"></formly-validation-message>
      </mat-error>
    </mat-form-field>
  `,
  styles: [
    `
      .w-100 {
        width: 100%;
      }
    `
  ]
})
export class FormlyFieldCountryCode extends FieldType<FieldTypeConfig> {
  /**
   * A shortcut to access the `props` object in Formly fields,
   * which contains additional options passed to the field.
   */
  get props() {
    return this.field.props || {};
  }
}
