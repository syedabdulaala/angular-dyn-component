import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StepComponent } from './step/step.component';
import { TextComponent } from './elements/text/text.component';
import { NumericComponent } from './elements/numeric/numeric.component';

@NgModule({
  declarations: [
    AppComponent,
    StepComponent,
    TextComponent,
    NumericComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TextComponent, NumericComponent]
})
export class AppModule { }
