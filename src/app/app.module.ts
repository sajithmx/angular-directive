import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ColorDirective } from './color.directive';
import { MyIfDirective } from './my-if.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ColorDirective, MyIfDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
