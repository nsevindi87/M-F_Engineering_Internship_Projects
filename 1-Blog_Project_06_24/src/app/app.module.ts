import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { BaseService } from './services/base.services';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogDialogComponent } from './home/blog-dialog/blog-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogDialogComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    NgbPaginationModule,
    MatDialogModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
