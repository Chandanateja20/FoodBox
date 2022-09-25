import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorpageComponent implements OnInit {

 @Input() visible:boolean= false;
 @Input() notFoundMessage:string='Nothing Found!';
 @Input() resetLinkText:string='Reset';
 @Input() resetLinkRoute:string='/menu';

  constructor() { }

  ngOnInit(): void {
  }

}
