import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  timelineItems = [{
    type: 'position'
  }, {
    type: 'project',
    subtype: 'opensource'
  }, {
    type: 'education'
  }];

  constructor() { }

  ngOnInit() {
  }

}
