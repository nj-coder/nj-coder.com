import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  timelineItems = [{
    type: 'position',
    startDate: '01-07-2017',
    endDate: 'current',
    description: `Design, develop and test mobile and web-based applications for best user experience and performance.`,
    company: {
      name: '152HQ',
      link: 'https://www.152hq.com/wp/',
      title: 'Senior Front-end Developer'
    },
    techs: ['Angular', 'Ionic', 'AngularJS', 'Cordova'],
    itemImage: 'assets/images/152hq.png'
  }, {
    type: 'project',
    subtype: 'opensource',
    startDate: '01-08-2019',
    description: `A simple and user-friendly timepicker using pure JavaScript`,
    project: {
      title: 'NJ Timepicker',
      link: ''
    },
    techs: ['JavaScript', 'SASS', 'Gulp'],
    itemImage: 'assets/images/github.png'
  }, {
    type: 'education'
  }];

  constructor() { }

  ngOnInit() {
  }

}
