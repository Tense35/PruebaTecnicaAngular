import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wave',
  templateUrl: './wave.component.html'
})
export class WaveComponent implements OnInit {

  @Input() waveColor: string = '4055B3';
  constructor() { }

  ngOnInit(): void {
  }

}
