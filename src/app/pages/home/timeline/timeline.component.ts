import { Component, OnInit } from '@angular/core';
import { TimelineService } from 'src/app/services/TimeLine/timeline.service';

@Component({
  selector: 'home-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  timelineItems = [];

  constructor(private timeline: TimelineService) {
    this.timelineItems = this.timeline.getTimeline();
  }

  ngOnInit() {
  }

}
