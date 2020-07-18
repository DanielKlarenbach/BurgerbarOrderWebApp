import { Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input('name') name: String;
  
  constructor() { }

  ngOnInit(): void {
  }
}
