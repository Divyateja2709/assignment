import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-ng-select',
  template: `
    <ng-select
      [items]="to.options | formlySelectOptions : field | async"
      [placeholder]="to.placeholder || to.label || ''"
      [bindValue]="to.bindValue || 'value'"
      [bindLabel]="to.bindLabel || 'label'"
      [formControl]="formControl"
      [class.is-invalid]="showError"
      [multiple]="to.multiple || false"
      [clearable]="to.clearable || true">
    </ng-select>
  `,
  styles: [
    `
      .is-invalid {
        border: 1px solid red;
      }
    `
  ]
})
export class NgSelectFormlyComponent extends FieldType<FieldTypeConfig> {
  /**
   * A shortcut to access the `props` object in Formly fields,
   * which contains additional options passed to the field.
   */
  get to() {
    return this.props || {};
  }
}
