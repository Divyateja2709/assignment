import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { FormManagementModule } from './form-management/form-management.module';

// ✅ Added JSONFormsModule
import { JsonFormsModule } from '@jsonforms/angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormManagementModule,
    JsonFormsModule // ✅ Here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
