import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { NgxMaskModule } from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

// Custom components
import { FormContainerComponent } from './form-container/form-container.component';
import { ObjectTypeComponent } from './object.type';
import { ArrayTypeComponent } from './array.type';
import { FormlyFieldPhoneNumber } from './custom-fields/phone-number.component';
import { FormlyFieldCountryCode } from './custom-fields/country-code.component';
import { FormlyFieldAlternatePhoneNumber } from './custom-fields/alternate-phone-number.component';
import { NgSelectFormlyComponent } from './ng-select.type';
import { MaterialModule } from '../material/material.module';
import { CustomInputRendererComponent } from './custom-fields/custom-input-renderer.component';

// Validation Messages
export function minItemsValidationMessage(error: any, field: FormlyFieldConfig) {
  return `should NOT have fewer than ${field.props?.minItems || 0} items`;
}

export function maxItemsValidationMessage(error: any, field: FormlyFieldConfig) {
  return `should NOT have more than ${field.props?.maxItems || 0} items`;
}

export function minLengthValidationMessage(error: any, field: FormlyFieldConfig) {
  return `should NOT be shorter than ${field.props?.minLength || 0} characters`;
}

export function maxLengthValidationMessage(error: any, field: FormlyFieldConfig) {
  return `should NOT be longer than ${field.props?.maxLength || 0} characters`;
}

export function minValidationMessage(error: any, field: FormlyFieldConfig) {
  return `should be >= ${field.props?.min || 0}`;
}

export function maxValidationMessage(error: any, field: FormlyFieldConfig) {
  return `should be <= ${field.props?.max || 0}`;
}

export function multipleOfValidationMessage(error: any, field: FormlyFieldConfig) {
  return `should be multiple of ${field.props?.step || 1}`;
}

export function exclusiveMinimumValidationMessage(error: any, field: FormlyFieldConfig) {
  return `should be > ${field.props?.step || 0}`;
}

export function exclusiveMaximumValidationMessage(error: any, field: FormlyFieldConfig) {
  return `should be < ${field.props?.step || 0}`;
}

export function constValidationMessage(error: any, field: FormlyFieldConfig) {
  return `should be equal to constant "${field.props?.const || ''}"`;
}

export function typeValidationMessage({ schemaType }: any) {
  return `should be "${schemaType?.[0] || 'unknown'}"`;
}

@NgModule({
  declarations: [
    FormContainerComponent,
    ArrayTypeComponent,
    ObjectTypeComponent,
    FormlyFieldPhoneNumber,
    FormlyFieldCountryCode,
    FormlyFieldAlternatePhoneNumber,
    NgSelectFormlyComponent,
    CustomInputRendererComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxMaskModule.forRoot(),
    FormlySelectModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'type', message: typeValidationMessage },
        { name: 'minLength', message: minLengthValidationMessage },
        { name: 'maxLength', message: maxLengthValidationMessage },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
        { name: 'multipleOf', message: multipleOfValidationMessage },
        { name: 'exclusiveMinimum', message: exclusiveMinimumValidationMessage },
        { name: 'exclusiveMaximum', message: exclusiveMaximumValidationMessage },
        { name: 'minItems', message: minItemsValidationMessage },
        { name: 'maxItems', message: maxItemsValidationMessage },
        { name: 'uniqueItems', message: 'should NOT have duplicate items' },
        { name: 'const', message: constValidationMessage }
      ],
      types: [
        { name: 'array', component: ArrayTypeComponent },
        { name: 'object', component: ObjectTypeComponent },
        { name: 'ng-select-autocomplete', component: NgSelectFormlyComponent },
        {
          name: 'phoneNumber',
          component: FormlyFieldPhoneNumber,
          wrappers: ['form-field'],
          defaultOptions: {
            fieldGroup: [
              { type: 'input', key: 'countryCode' },
              { type: 'input', key: 'phoneNumber' }
            ]
          }
        }
      ]
    }),
    FormlyMaterialModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MaterialModule
  ],
  exports: [FormContainerComponent, CustomInputRendererComponent]
})
export class FormManagementModule {}
