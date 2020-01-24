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

  ngOnInit() {
    this.itemsService.getAllItems().subscribe((data: Item[]) => {
        this.items = data;
    });
  }

}
