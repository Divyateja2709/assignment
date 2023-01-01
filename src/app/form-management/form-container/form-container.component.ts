import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DataService } from '../data.service';
import { switchMap, startWith, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormContainerComponent {
  form = new FormGroup({});
  model = {
    id: 123123,
    firstname: 'Juri',
    age: 34,
    nationId: 1,
    cityId: 1,
    ip: null
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'id'
    },
    {
      key: 'firstname',
      type: 'input',
      templateOptions: {
        label: 'Firstname',
        required: true
      }
    },
    {
      key: 'age',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Age',
        min: 18
      },
      validation: {
        messages: {
          min: 'Sorry, you have to be older than 18'
        }
      }
    },
    {
      key: 'nationId',
      type: 'ng-select-autocomplete',
      // type: 'select', // <select>
      templateOptions: {
        label: 'Nation',
        options: this.dataService.getNations()
      }
    },
    {
      key: 'cityId',
      type: 'select', // <select>
      templateOptions: {
        label: 'Cities',
        options: []
      },
      expressionProperties: {
        'templateOptions.disabled': model => !model.nationId,
        'model.cityId': '!model.nationId ? null : model.cityId'
      },
      hideExpression: model => !model.nationId,
      hooks: {
        onInit: (field: FormlyFieldConfig) => {
          field.templateOptions.options = field.form.get('nationId').valueChanges.pipe(
            startWith(this.model.nationId),
            switchMap(nationId => this.dataService.getCities(nationId))
          );
        }
      }
    },
    {
      key: 'ip',
      type: 'input',
      templateOptions: {
        label: 'IP Address',
        required: true
      },
      validators: {
        // validation: ['ip']
        ip2: {
          expression: c => !c.value || /(\d{1,3}\.){3}\d{1,3}/.test(c.value),
          message: (errorr, field: FormlyFieldConfig) => `"${field.formControl.value}" is not valid`
        }
      }
    }
  ];

  constructor(private dataService: DataService, private http: HttpClient, private formlyJsonSchema: FormlyJsonschema) {}

  ngOnInit() {
    // this.http.get<FormlyFieldConfig[]>('/assets/dynamic-form.json').subscribe((jsonSchema: any) => {
    //   const formlyConfig = this.formlyJsonSchema.toFieldConfig(jsonSchema);
    //   this.fields = formlyConfig.fieldGroup;
    // });
  }

  onSubmit({ valid, value }) {
    console.log(value);
    this.model = value;
  }
}
