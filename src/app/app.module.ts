import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VideoDetectionComponent } from './video-detection/video-detection.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, VideoDetectionComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
