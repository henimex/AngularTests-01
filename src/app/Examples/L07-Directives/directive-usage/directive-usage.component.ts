import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-usage',
  templateUrl: './directive-usage.component.html',
  styleUrls: ['./directive-usage.component.css']
})
export class DirectiveUsageComponent implements OnInit {

  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;

  constructor() { }

  ngOnInit(): void {
  }

}
