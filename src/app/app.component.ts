import { Component, OnInit } from '@angular/core';
import { Timeline } from '../models/timeline.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public timeline: Timeline;
  public logOpen: boolean = true;

  public ngOnInit(): void {
    this.timeline = {
      localTitle: "Miss Clayton's Outstanding Teen",
      stateTitle: "Miss North Carolina's Outstanding Teen",
      introduction: 'intro text goes here',
      socialMedia: [
        {
          icon: 'fa fa-linkedin fa-2x',
          link:
            'https://www.linkedin.com/company/miss-capital-city-&-miss-clayton-scholarship-pageants---nc/',
          color: '#0077B5'
        },
        {
          icon: 'fa fa-facebook fa-2x',
          link: 'https://www.facebook.com/MissClaytonsOutstandingTeen/',
          color: '#0077B5'
        }
      ],
      titlelog: [
        {
          color: "#10A2F5",
          year: 2016,
          name: "a winner was crowned",
          details: "win win win win"
        }
      ]
    };
  }

  public toggleOpen(valueToToggle: string): void{
    switch(valueToToggle){
      case 'logOpen':
      this.logOpen = !this.logOpen;
    }
  }
}
