import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-emptystate',
  templateUrl: './emptystate.component.html',
  styleUrls: ['./emptystate.component.scss']
})
export class EmptystateComponent implements OnInit {

  @Input() icon: string = 'search';
  @Input() title: string = 'No country selected';
  @Input() subtitle: string = 'Please search for a country from the list to learn about them!';

  constructor() { }

  ngOnInit(): void {
  }

}
