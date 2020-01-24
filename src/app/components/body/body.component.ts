import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  title = '';
  itemsTreeView: any[];
  items: Item[] = [];
  constructor(private itemsService: ItemsService) {}

  static createTreeView(flatItems) {
    const map = {};
    let node;
    const roots = [];
    for (let i = 0; i < flatItems.length; i += 1) {
      map[flatItems[i].id] = i;
      flatItems[i].children = [];
    }
    for (const item of flatItems) {
      node = item;
      if (node.parent_id) {
        flatItems[map[node.parent_id]].children.push(node);
      } else {
        roots.push(node);
      }
    }
    return roots;
  }
  ngOnInit() {
    this.itemsService.getAllItems().subscribe((data: Item[]) => {
        this.items = data;
    });
    this.itemsTreeView = BodyComponent.createTreeView(this.items);
  }

}
