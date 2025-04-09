import { Component } from '@angular/core';
import { JsonFormsControl } from '@jsonforms/angular';
import { ControlRenderer } from '@jsonforms/core';

@Component({
  selector: 'app-custom-input',
  template: `
    <label class="block text-sm font-medium mb-1">{{ label }}</label>
    <input class="border rounded w-full p-2" [value]="data" (input)="onChange($event.target.value)" />

    <div *ngIf="error" class="text-red-500 text-xs mt-1">
      {{ error }}
    </div>
  `
})
export class CustomInputRendererComponent extends JsonFormsControl implements ControlRenderer {
  override label = '';

  override ngOnInit(): void {
    this.label = this.uischema?.label || this.scopedSchema?.title || '';
    super.ngOnInit();
  }
}
