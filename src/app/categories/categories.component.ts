import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { CategoriesService } from './categories.service';
import { Lists } from '../list';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categoryList: any;
  constructor(private catService: CategoriesService) {}
  quantity: number = 1;
  totalCount = 0;
  catIndex=0;
  @Output() newItemEvent = new EventEmitter<string>();

  ngOnInit(): void {
    this.getList();
  }
  catList: Lists[] = [];
  getList() {
    this.catService.getList().subscribe((result) => {
      this.catList = result;
      this.categoryList = this.catList[0].table_menu_list;
      console.log(this.catList[0].table_menu_list);
      this.addCount(0);
    });
  }
  plus(i: any) {
    this.quantity = this.categoryList[this.catIndex].category_dishes[i].key + 1
    this.categoryList[this.catIndex].category_dishes[i]?  this.categoryList[this.catIndex].category_dishes[i].key = this.quantity:null;
    this.totalItemsInCart(this.catIndex)
  }
  minus(i: any) {
    if (this.categoryList[this.catIndex].category_dishes[i].key > 0) {
      this.quantity =  this.categoryList[this.catIndex].category_dishes[i].key -1
      this.categoryList[this.catIndex].category_dishes[i]?  this.categoryList[this.catIndex].category_dishes[i].key = this.quantity:null;
      this.totalItemsInCart(this.catIndex)

    }
  }

  totalItemsInCart(i: any) {
    this.totalCount=0;
    this.categoryList[i].category_dishes.forEach((item: any) => {
      this.totalCount = this.totalCount + item.key;
    });
    this.addNewItem(this.totalCount)
  }

  addCount(categoryId: any) {
    this.catIndex=categoryId
    this.categoryList[categoryId].category_dishes.forEach((item: any) => {
      item.key = 0;
    });
  }

  addNewItem(totalCount :any) {
    this.newItemEvent.emit(totalCount);
  }
}
