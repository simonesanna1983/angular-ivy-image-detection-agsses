import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Prediction } from '../app.component';
import * as mobilenet from '@tensorflow-models/mobilenet';

@Component({
  selector: 'app-video-detection',
  templateUrl: './video-detection.component.html',
  styleUrls: ['./video-detection.component.css']
})
export class VideoDetectionComponent implements OnInit, AfterViewInit {

  @ViewChild('video') video: ElementRef;
  predictions: Prediction[];
  model: any;
  loading = true;
  constructor() { }

  public async ngOnInit(): Promise<void> {
    console.log('loading mobilenet model...');
    this.model = await mobilenet.load();
    console.log('Sucessfully loaded model');
    this.loading = false;
    setInterval(async () => {
      this.predictions = await this.model.classify(this.video.nativeElement);
    }, 3000);
  }

  public async ngAfterViewInit(): Promise<void> {
    const vid = this.video.nativeElement;
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        vid.srcObject = stream;
      })
      .catch((error) => {
        console.log('Something went wrong!');
      });
    }
  }

  public stopVideo(): void {
    window.location.assign('/');
  }
}