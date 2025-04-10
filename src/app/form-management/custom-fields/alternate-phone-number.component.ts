import { Component, OnInit } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'formly-field-alternate-phone-number',
  template: `
    <div [formGroup]="formControl">
      <!-- Country Code Selector -->
      <mat-form-field appearance="fill" class="col-3">
        <mat-label>Country Code</mat-label>
        <mat-select [formControl]="getFormControl('countryCode')" (selectionChange)="onCountryCodeChange($event.value)">
          <mat-option value="+91">+91</mat-option>
          <mat-option value="+852">+852</mat-option>
          <mat-option value="+1">+1</mat-option>
        </mat-select>
      </mat-form-field>

      <!-- Phone Number Input -->
      <mat-form-field appearance="fill" class="col-9">
        <mat-label>Phone Number</mat-label>
        <input matInput [formControl]="getFormControl('phoneNumber')" type="text" [mask]="phoneNumberMask" />
      </mat-form-field>
    </div>
  `
})
export class FormlyFieldAlternatePhoneNumber extends FieldType<FieldTypeConfig> implements OnInit {
  phoneNumberMask: string = '00000-00000'; // Default mask

  ngOnInit(): void {
    // Initialize mask based on the current value
    const countryCodeControl = this.getFormControl('countryCode');
    if (countryCodeControl) {
      this.updateMask(countryCodeControl.value);
      countryCodeControl.valueChanges.subscribe(value => this.updateMask(value));
    }
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
   * Handles country code changes.
   */
  onCountryCodeChange(newValue: string): void {
    this.updateMask(newValue);
  }
}
