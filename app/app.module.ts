import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WindowComponent } from './window/window.component';


@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        WindowComponent,
    ],
    providers: [
    ],
    entryComponents: [
    ],
    bootstrap: [WindowComponent]
})
export class AppModule { }