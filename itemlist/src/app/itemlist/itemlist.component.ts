import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {
  
  title = "Item's List";
  newItem = "";
  // nIteration = 0;
  dispTime = Date.now();
  items = [
    "JQuery",
    "PHP",
    "MySQL"
  ];
  itemTimes = [
    this.dispTime,
    this.dispTime,
    this.dispTime
  ];
  constructor() { }

  ngOnInit() {
  }

  injectItem() {
    if(this.newItem !="") {
      this.items.push(this.newItem);
      this.itemTimes.push(Date.now());
      this.newItem = "";
    }
  }
  
  removeItem(id) {
    this.items.splice(id,1);
    this.itemTimes.splice(id,1);
  }


}
  