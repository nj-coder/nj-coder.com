import { Component, OnInit } from '@angular/core';
import { LazyLoadingServiceService } from 'src/app/services/LazyLoadingService/lazy-loading-service.service';

@Component({
  selector: 'app-nj-timepicker',
  templateUrl: './nj-timepicker.component.html',
  styleUrls: ['./nj-timepicker.component.scss']
})
export class NjTimepickerComponent implements OnInit {

  constructor(private lazyLoadService: LazyLoadingServiceService) { }

  ngOnInit() {
    /* Usage */
    this.lazyLoadService.loadScript('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js').subscribe(() => {
      // code
    });
  }

}
