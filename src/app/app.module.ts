import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { FormManagementModule } from './form-management/form-management.module';
import { JsonFormsModule } from '@jsonforms/angular';

@NgModule({
  declarations: [
    AppComponent // Declare your main app component here
  ],
  imports: [
    BrowserModule, // Angular module for browser support
    HttpClientModule, // Module for HTTP requests
    AppRoutingModule, // Routing module for the app
    BrowserAnimationsModule, // Required for Angular Material animations
    ReactiveFormsModule, // For reactive forms
    FormsModule, // For template-driven forms
    MaterialModule, // Custom Angular Material module
    FormManagementModule, // Custom module for form management
    JsonFormsModule // JSON Forms module for dynamic forms
  ],
  providers: [], // Add any services if needed
  bootstrap: [AppComponent] // Bootstrap the main app component
})
export class AppModule {}
