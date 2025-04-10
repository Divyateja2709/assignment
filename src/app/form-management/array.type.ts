import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-array-type',
  template: `
    <fieldset class="mb-3">
      <!-- Label -->
      <legend *ngIf="props?.label" class="text-lg font-semibold">{{ props.label }}</legend>
      <p *ngIf="props?.description" class="text-sm text-gray-500">{{ props.description }}</p>

      <!-- Add Button -->
      <div class="d-flex flex-row-reverse mb-2">
        <button class="btn btn-primary" type="button" (click)="add()"><span aria-hidden="true">+</span> Add</button>
      </div>

      <!-- Error Message -->
      <div *ngIf="showError && formControl?.errors" class="alert alert-danger" role="alert">
        <formly-validation-message [field]="field"></formly-validation-message>
      </div>

      <!-- Field Group -->
      <div *ngFor="let f of field.fieldGroup; let i = index" class="row align-items-start mb-3">
        <!-- Render Field -->
        <formly-field class="col" [field]="f"></formly-field>

        <!-- Remove Button -->
        <div *ngIf="f.props?.removable !== false" class="col-auto">
          <button class="btn btn-danger" type="button" (click)="remove(i)"><span aria-hidden="true">-</span> Remove</button>
        </div>
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
      .row {
        margin-bottom: 12px;
      }
      .btn {
        font-size: 14px;
      }
    `
  ]
})
export class ArrayTypeComponent extends FieldArrayType {}
