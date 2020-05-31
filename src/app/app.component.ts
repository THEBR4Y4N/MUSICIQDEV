import { Component,HostBinding,OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import {NgxSpinnerService} from 'ngx-spinner'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // animation triggers go here
  ]
})
export class AppComponent implements OnInit{
  title = 'MusicIQ';
  constructor(private spinnerService:NgxSpinnerService){

  }
  ngOnInit(){
    this.spinner();
  }
  
  spinner(): void{
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    },3000)
  }

}