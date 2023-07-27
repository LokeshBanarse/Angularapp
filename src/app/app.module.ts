import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Demo2Component } from './demo2/demo2.component';
import { DemodatabindingComponent } from './demodatabinding/demodatabinding.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { AtttributedirComponent } from './atttributedir/atttributedir.component';
import { CustdirDirective } from './custdir.directive';
import { SimpleformComponent } from './simpleform/simpleform.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo2Component,
    DemodatabindingComponent,
    ChildComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent,
    AtttributedirComponent,
    CustdirDirective,
    SimpleformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
