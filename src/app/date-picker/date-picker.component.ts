import { Component, OnInit } from '@angular/core';
import { MdNativeDateModule } from "@angular/material";

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  providers: [MdNativeDateModule]
})
export class DatePickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
