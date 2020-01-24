import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  @Input() model: Item;
  constructor() { }

  ngOnInit() {
  }

}
