import { Component } from '@angular/core';
import schema from '../assets/form1.schema.json';
import uischema from '../assets/form1.uischema.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-forms-app';
  schema = schema;
  uischema = uischema;
  data = {}; // form model

  onChange(event: any) {
    this.data = event.data;
  }
}
