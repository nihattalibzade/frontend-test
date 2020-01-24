import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item';
import { ItemsService } from '../../services/items.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  item: Item;
  constructor(private itemsService: ItemsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.item = {
      id: -1,
      title: 'No Items Found!',
      parent_id: -1
    };
    this.itemsService.getItem(this.route.snapshot.params.id).subscribe((response: Item) => {
        this.item = response;
      });
  }

}
