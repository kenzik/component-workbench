import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumbererComponent } from './numberer/numberer.component';
import { BoolToggleComponent } from './bool-toggle/bool-toggle.component';
import { InputCommentComponent } from './input-comment/input-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    NumbererComponent,
    BoolToggleComponent,
    InputCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
