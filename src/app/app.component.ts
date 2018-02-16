import { Component, OnInit } from '@angular/core';
import { Timeline } from '../models/timeline.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public timeline: Timeline;

  public ngOnInit(): void {
    this.timeline = {
      localTitle: "Miss Clayton's Outstanding Teen",
      stateTitle: "Miss North Carolina's Outstanding Teen",
      introduction: 'intro text goes here',
      socialMedia: [],
      titlelog: []
    };
  }
}
