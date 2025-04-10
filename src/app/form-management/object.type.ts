import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-object-type',
  template: `
    <fieldset class="mb-3">
      <!-- Label -->
      <legend *ngIf="props.label" class="text-lg font-semibold">{{ props.label }}</legend>

      <!-- Description -->
      <p *ngIf="props.description" class="text-sm text-gray-500">{{ props.description }}</p>

      <!-- Error Message -->
      <div *ngIf="showError && formControl.errors" class="alert alert-danger" role="alert">
        <formly-validation-message [field]="field"></formly-validation-message>
      </div>

      <!-- Render Formly Fields -->
      <div *ngIf="field.fieldGroup && field.fieldGroup.length > 0">
        <formly-field *ngFor="let f of field.fieldGroup" [field]="f"></formly-field>
      </div>
    </fieldset>
  `,
  styles: [
    `
      fieldset {
        border: 1px solid #ddd;
        padding: 16px;
        border-radius: 4px;
      }
      legend {
        margin-bottom: 8px;
      }
      .alert {
        margin-top: 8px;
      }
    `
  ]
})
export class ObjectTypeComponent extends FieldType<FieldTypeConfig> {
  /**
   * A shortcut to access the `props` object in Formly fields,
   * which contains additional options passed to the field.
   */
  get props() {
    return this.field.props || {};
  }
}
