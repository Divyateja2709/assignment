import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent {
  @Input() fields: FormlyFieldConfig[] = [];
  @Input() model: any = {};
  @Input() form: FormGroup = new FormGroup({});

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form submission', this.model);
      // Handle form submission logic here (e.g., send data to an API)
    } else {
      this.markFormGroupTouched(this.form);
      console.warn('Form is invalid. Please correct the errors.');
    }
  }

  // Helper method to mark all controls as touched
  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control); // Recursively mark nested controls
      } else {
        control?.markAsTouched();
      }
    });
  }
}
