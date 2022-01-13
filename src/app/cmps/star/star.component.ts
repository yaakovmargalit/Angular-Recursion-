import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  @Input() starCount: any
  constructor() { 

  }
  
  ngOnInit(): void {
    // this.star = [this.starCount]
  }

}
