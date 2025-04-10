import { Component, OnInit } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'formly-field-phone-number',
  template: `
    <div [formGroup]="formControl">
      <!-- Country Code Field -->
      <mat-form-field appearance="fill">
        <mat-label>Country Code</mat-label>
        <mat-select [formControl]="getFormControl('countryCode')" (selectionChange)="onCountryCodeChange($event.value)">
          <mat-option value="+91">India +91</mat-option>
          <mat-option value="+852">Hong Kong +852</mat-option>
          <mat-option value="+1">USA +1</mat-option>
        </mat-select>
      </mat-form-field>

      <!-- Phone Number Field -->
      <mat-form-field appearance="fill">
        <mat-label>Phone Number</mat-label>
        <input matInput [formControl]="getFormControl('phoneNumber')" type="text" [mask]="phoneNumberMask" />
      </mat-form-field>
    </div>
  `
})
export class FormlyFieldPhoneNumber extends FieldType<FieldTypeConfig> implements OnInit {
  phoneNumberMask: string = '00000-00000'; // Default mask

  ngOnInit(): void {
    this.updateMask(this.getFormControl('countryCode')?.value);

    // Listen for changes in the country code
    this.getFormControl('countryCode')?.valueChanges.subscribe(value => {
      this.updateMask(value);
    });
  }

  /**
   * Updates the phone number mask based on the country code.
   */
  private updateMask(countryCode: string): void {
    switch (countryCode) {
      case '+852':
        this.phoneNumberMask = '0000-0000'; // Mask for Hong Kong
        break;
      case '+1':
        this.phoneNumberMask = '000-0000'; // Mask for USA
        break;
      default:
        this.phoneNumberMask = '00000-00000'; // Default mask
    }
  }

  /**
   * Gets the FormControl for a specific key in the field's formControl.
   */
  getFormControl(key: string): AbstractControl | null {
    return this.formControl?.get(key) || null;
  }

  /**
   * Handles country code change event.
   */
  onCountryCodeChange(newValue: string): void {
    this.updateMask(newValue);
  }
}
