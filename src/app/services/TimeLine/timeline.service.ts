import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor() { }

  getTimeline() {
    return [{
      type: 'position',
      startDate: '07-01-2017',
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
      startDate: '08-01-2019',
      description: `A simple and user-friendly timepicker using pure JavaScript`,
      project: {
        title: 'NJ Timepicker',
        link: 'https://github.com/nj-coder/nj-timepicker'
      },
      techs: ['JavaScript', 'SASS', 'Gulp'],
      itemImage: 'assets/images/github.png'
    },{
      type: 'project',
      startDate: '08-01-2019',
      description: `QicWorks is the answer, providing the latest in digital Job Management.`,
      project: {
        title: 'QicWorks - Job Management Software',
        link: 'https://github.com/nj-coder/nj-timepicker'
      },
      techs: ['MS .NET', 'AngularJS', 'Cordova'],
      itemImage: 'assets/images/qicworks.jpg'
    }, {
      type: 'education',
      startDate: '02-01-2017',
      endDate: '12-01-2018',
      education: {
        title: 'University of Wollongong, Australia',
        link: 'https://www.uow.edu.au/'
      },
      description: 'Masters in Information Technology',
      itemImage: 'assets/images/uow.jpg'
    }, {
      type: 'position',
      startDate: '10-01-2014',
      endDate: '02-01-2019',
      description: `Design, develop and test mobile and web-based applications for best user experience and performance.`,
      company: {
        name: 'TCS',
        link: 'https://www.tcs.com/',
        title: 'Systems Engineer'
      },
      techs: ['Android', 'AngularJS', 'ExtJS', 'Cordova'],
      itemImage: 'assets/images/tcs.png'
    }, {
      type: 'education',
      startDate: '07-01-2010',
      endDate: '07-01-2014',
      education: {
        title: 'Amal Jyothi College of Engineering',
        link: 'https://ajce.in/'
      },
      description: 'Bachelors in Computer Science',
      itemImage: 'assets/images/ajce.png'
    }];
  }
}
