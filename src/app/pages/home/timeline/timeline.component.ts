import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  timelineItems = [{
    type: 'position',
    company: {
      name: '152HQ',
      link: 'https://www.152hq.com/wp/',
      title: 'Senior Front-end Developer'
    },
    techs: ['Angular', 'Ionic', 'AngularJS', 'Cordova'],
    startDate: '07-07-2017',
    endDate: 'current',
    itemImage: ''
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
