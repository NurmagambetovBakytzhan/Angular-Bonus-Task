import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css'],
  imports: [FormsModule, CommonModule]
})
export class DataListComponent implements OnInit {
  items: any[] = [];
  searchText = '';
  newItem = {id:0, name: '', hobby: null };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.apiService.getItems().subscribe(
      response => {
        this.items = response
        console.log(response)
      })
      
  }


  addItem() {
    this.apiService.createItem(this.newItem).subscribe(() => {
      this.getItems();
      this.newItem = { id:0, name: '', hobby: null };
    });
  }

  editItem(item: any) {
    const updatedItem = { ...item, name: `${item.name} (updated)` };
    this.apiService.updateItem(item.id, updatedItem).subscribe(() => this.getItems());
  }

  deleteItem(id: number) {
    this.apiService.deleteItem(id).subscribe(() => this.getItems());
  }

  sortData() {
    this.items.sort((a, b) => a.name.localeCompare(b.name));
  }

  filterData() {
    this.items = this.items.filter((item) => item.age > 25);
  }
}
