import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recursion',
  templateUrl: './recursion.component.html',
  styleUrls: ['./recursion.component.scss']
})
export class RecursionComponent implements OnInit {
  @Input() stars:any;
  constructor() { }

  ngOnInit(): void {
  }

}
