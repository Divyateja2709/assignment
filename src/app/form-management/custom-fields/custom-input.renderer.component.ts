import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-custom-input',
  template: `
    <!-- Input field with Formly attributes -->
    <input [type]="props.type || 'text'" [formControl]="formControl" [formlyAttributes]="field" class="form-control" [ngClass]="{ 'is-invalid': showError }" />

    <!-- Error message display -->
    <div *ngIf="showError" class="invalid-feedback">
      <formly-validation-message [field]="field"></formly-validation-message>
    </div>
  `
})
export class CustomInputRendererComponent extends FieldType<FieldTypeConfig> {}
